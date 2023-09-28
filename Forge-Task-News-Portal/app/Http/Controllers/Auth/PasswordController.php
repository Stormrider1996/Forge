<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class PasswordController extends Controller
{
    /**
     * @OA\Put(
     *      path="/password",
     *      operationId="updatePassword",
     *      tags={"Password"},
     *      summary="Update the user's password",
     *      description="Updates the user's password after validating the current password and the new password confirmation",
     *      security={
     *         {"bearerAuth": {}}
     *      },
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              required={"current_password","password","password_confirmation"},
     *              @OA\Property(property="current_password", type="string", format="password", example="secret"),
     *              @OA\Property(property="password", type="string", format="password", example="newsecret"),
     *              @OA\Property(property="password_confirmation", type="string", format="password", example="newsecret"),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=302,
     *          description="Successful operation",
     *          @OA\Header(header="Location", description="The URL of the previous page with a status message", @OA\Schema(type="string")),
     *       ),
     *       @OA\Response(
     *          response=422,
     *          description="Validation error",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string", example="The given data was invalid."),
     *              @OA\Property(property="errors", type="object",
     *                  @OA\Property(property="current_password", type="array",
     *                      @OA\Items(type="string", example="The current password is incorrect.")
     *                  ),
     *                  @OA\Property(property="password", type="array",
     *                      @OA\Items(type="string", example="The password confirmation does not match.")
     *                  ),
     *              ),
     *          ),
     *       ),
     *)
    */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validateWithBag('updatePassword', [
            'current_password' => ['required', 'current_password'],
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);

        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back()->with('status', 'password-updated');
    }
}