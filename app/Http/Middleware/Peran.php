<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth; // Perbaiki import ini
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Peran 
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $peran): Response
    {
        if(Auth::check()){
            $peran = explode('-', $peran);
            //jika akun sudah tersedia maka memilih level user
            if (in_array(Auth::user()->role, $peran)){
                return $next($request);
            }
        }
        return redirect('http://localhost:5173/login');
    }
}