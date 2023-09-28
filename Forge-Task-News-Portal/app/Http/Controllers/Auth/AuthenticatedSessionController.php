<?php

namespace App\Http\Controllers\Auth;

use Illuminate\View\View;
use Illuminate\Http\Request;
use App\Helpers\UserLogHelper;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use App\Providers\RouteServiceProvider;
use App\Http\Requests\Auth\LoginRequest;

class AuthenticatedSessionController extends Controller
{
    /**
     * @OA\Get(
     *     path="/login",
     *     summary="Show the login view",
     *     tags={"Authentication"},
     *     @OA\Response(
     *         response=200,
     *         description="The login view",
     *         @OA\MediaType(
     *             mediaType="text/html",
     *             @OA\Schema(type="string")
     *         )
     *     )
     * )
     */
    public function create(): View
    {
        return view('auth.login');
    }

    /**
     * @OA\Post(
     *     path="/login",
     *     summary="Store the authenticated session",
     *     tags={"Authentication"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 property="email",
     *                 type="string",
     *                 format="email",
     *                 description="The user's email address",
     *                 example="user@example.com"
     *             ),
     *             @OA\Property(
     *                 property="password",
     *                 type="string",
     *                 format="password",
     *                 description="The user's password",
     *                 example="secret"
     *             ),
     *             @OA\Property(
     *                 property="remember",
     *                 type="boolean",
     *                 description="Whether to remember the user's session",
     *                 example=true
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=302,
     *         description="Redirect to the intended route",
     *         @OA\Header(
     *             header="Location",
     *             description="The redirect URL",
     *             @OA\Schema(type="string")
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthenticated",
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *     )
     * )
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();
        UserLogHelper::addToLog('Logged in');
        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * @OA\Post(
     *     path="/logout",
     *     summary="Destroy the authenticated session",
     *     tags={"Authentication"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(
     *         response=302,
     *         description="Redirect to the home page",
     *         @OA\Header(
     *             header="Location",
     *             description="The redirect URL",
     *             @OA\Schema(type="string")
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthenticated",
     *     )
     * )
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();
        UserLogHelper::addToLog('Logged out');
        return redirect('/');
    }
}
