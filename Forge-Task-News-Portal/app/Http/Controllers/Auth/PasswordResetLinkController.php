<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\View\View;

class PasswordResetLinkController extends Controller
{
    /**
     * @OA\Get(
     *      path="/forgot-password",
     *      operationId="showForgotPasswordForm",
     *      tags={"Password"},
     *      summary="Show the form to request a password reset link",
     *      description="Returns a view with the form to enter the user's email address and request a password reset link",
     *      security={
     *         {"guest": {}}
     *      },
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\MediaType(
     *              mediaType="text/html",
     *              @OA\Schema(type="string")
     *          )
     *       ),
     *)
    */
    public function create(): View
    {
        return view('auth.forgot-password');
    }

   /**
     * @OA\Post(
     *      path="/forgot-password",
     *      operationId="sendPasswordResetLink",
     *      tags={"Password"},
     *      summary="Send a password reset link to the user's email address",
     *      description="Attempts to send a password reset link to the user's email address and returns a status message",
     *      security={
     *         {"guest": {}}
     *      },
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              required={"email"},
     *              @OA\Property(property="email", type="string", format="email", example="user@example.com"),
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
     *                  @OA\Property(property="email", type="array",
     *                      @OA\Items(type="string", example="We can't find a user with that email address.")
     *                  ),
     *              ),
     *          ),
     *       ),
     *)
    */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => ['required', 'email'],
        ]);

        // We will send the password reset link to this user. Once we have attempted
        // to send the link, we will examine the response then see the message we
        // need to show to the user. Finally, we'll send out a proper response.
        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status == Password::RESET_LINK_SENT
                    ? back()->with('status', __($status))
                    : back()->withInput($request->only('email'))
                            ->withErrors(['email' => __($status)]);
    }
}
