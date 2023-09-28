<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;

class VerifyEmailController extends Controller
{
    /**
     * @OA\Post(
     *     path="/verify-email/{id}/{hash}",
     *     summary="Verify the user's email address",
     *     tags={"Authentication"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="The user's id",
     *         required=true,
     *         @OA\Schema(
     *             type="UUID"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="hash",
     *         in="path",
     *         description="The verification hash",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response=302,
     *         description="Redirect to the home page with verified status",
     *     ),
     *     @OA\Response(
     *          response=500,
     *          description="Internal server error"
     *     ),
     *     security={
     *         {"api_key": {}}
     *     }
     * )
     */
    public function __invoke(EmailVerificationRequest $request): RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->intended(RouteServiceProvider::HOME.'?verified=1');
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return redirect()->intended(RouteServiceProvider::HOME.'?verified=1');
    }
}
