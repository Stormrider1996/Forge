<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\View\View;
use App\Http\OpenApi\Schemas\UserSchema;

class ProfileController extends Controller
{
    /**
     * @OA\Get(
     *   path="/profile/edit",
     *   tags={"Profile"},
     *   summary="Show the form for editing the user profile.",
     *   security={{"bearerAuth":{}}},
     *   @OA\Response(
     *     response=200,
     *     description="The edit profile view.",
     *     @OA\MediaType(
     *       mediaType="text/html",
     *       @OA\Schema(
     *         type="object",
     *         @OA\Property(
     *           property="user",
     *           ref="#/components/schemas/User"
     *         ),
     *         @OA\Property(
     *           property="countries",
     *           type="array",
     *           @OA\Items(type="string")
     *         ),
     *         @OA\Property(
     *           property="languages",
     *           type="array",
     *           @OA\Items(type="string")
     *         )
     *       )
     *     )
     *   ),
     *    @OA\Response(
     *      response=401,
     *      description="Unauthorized.",
     *    ),
     *    @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *    ),
     * )
     */
    public function edit(Request $request): View
    {
        return view('profile.edit', [
            'user' => $request->user(),
            'countries' => config('constants.countries'),
            'languages' => config('constants.languages'),
        ]);
    }

    /**
     * @OA\Patch(
     *     path="/profile",
     *     tags={"Profile"},
     *     summary="Update the user profile",
     *     description="Update the user profile with the given input",
     *     security={{"bearerAuth":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"name","email","country","language"},
     *             @OA\Property(property="name", type="string", example="John Doe"),
     *             @OA\Property(property="email", type="string", format="email", example="john.doe@example.com"),
     *             @OA\Property(property="country", type="string", example="US"),
     *             @OA\Property(property="language", type="string", example="en")
     *         )
     *     ),
     *     @OA\Response(
     *         response=302,
     *         description="Redirect to the profile edit page with a status message",
     *         @OA\Header(header="Location", description="The URL of the profile edit page", @OA\Schema(type="string"))
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="The given data was invalid."),
     *             @OA\Property(property="errors", type="object",
     *                 @OA\Property(property="name", type="array", @OA\Items(type="string")),
     *                 @OA\Property(property="email", type="array", @OA\Items(type="string")),
     *                 @OA\Property(property="country", type="array", @OA\Items(type="string")),
     *                 @OA\Property(property="language", type="array", @OA\Items(type="string"))
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     ),
     * )
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'country' => $request->input('country'),
            'language' => $request->input('language')
        ]);

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit')->with('status', 'profile-updated');
    }

    /**
     * @OA\Delete(
     *     path="/profile",
     *     tags={"Profile"},
     *     summary="Delete the user profile",
     *     description="Delete the user profile after validating the password",
     *     security={{"bearerAuth":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"password"},
     *             @OA\Property(property="password", type="string", format="password", example="secret")
     *         )
     *     ),
     *     @OA\Response(
     *         response=302,
     *         description="Redirect to the home page",
     *         @OA\Header(header="Location", description="The URL of the home page", @OA\Schema(type="string"))
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="The given data was invalid."),
     *             @OA\Property(property="errors", type="object",
     *                 @OA\Property(property="password", type="array", @OA\Items(type="string"))
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     ),
     * )
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validateWithBag('userDeletion', [
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
