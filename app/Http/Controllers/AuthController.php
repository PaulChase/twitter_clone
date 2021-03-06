<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required',  'email', 'max:255', 'unique:users'],
            'username' => ['required',  'string', 'max:255', 'unique:users'],
            'password' => ['required',  'min:8'],
        ]);


        $user = User::create([
            'name' => $request->input('name'),
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);
        return response(['user' => $request->input('username')]);


        // return $this->logUserIn($request->email, $request->password);
    }

    public function logUserIn($email, $password)
    {

        if (Auth::attempt(['email' => $email, 'password' => $password], 'true')) {
            $token = auth()->user()->createToken('loginToken')->plainTextToken;

            $loginCookie = cookie('logintoken', $token, 10080); // lasts for one week

            return response([
                'user' => auth()->user(),
                'message' => 'success'
            ])->withCookie($loginCookie);
        }



        return response([
            'message' => 'error'
        ], 401);
    }

    public function logout()
    {
        $logoutCookie = Cookie::forget('logintoken');
        // Auth::logout();
        auth()->user()->tokens()->delete();


        return response(['message' => 'success'])->withCookie($logoutCookie);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'min:8'],
        ]);

        // $user = User::where('email', $request->email)->first();


        // if (!$user || !Hash::check($request->password, $user->password)) {
        //     return response(['error' => 'please check your details again'], 401);
        // }
        return $this->logUserIn($request->email, $request->password);
    }

    public function getUser()
    {
        return response(['user' => auth()->user()]);
    }
}
