<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if the user is authenticated and has the admin role
        if (auth()->check() && auth()->user()->is_admin == true) {
            // Allow the request to proceed further
            return $next($request);
        }

        // Otherwise, redirect the user to the home page or abort with a 403 error
        return redirect('home');
        // or
        // abort(403);
    }
}