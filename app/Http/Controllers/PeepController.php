<?php

namespace App\Http\Controllers;

use App\Http\Resources\PeepResource;
use App\Models\Peep;
use Illuminate\Http\Request;

class PeepController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return  PeepResource::collection(Peep::orderBy('created_at', 'desc')->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(['message' => 'string|required']);

        $peep = new Peep;
        $peep->message = $request->input('message');
        $peep->user_id = auth()->id();
        $peep->status = 'active';
        $peep->save();

        return response()->json([
            'message' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new PeepResource(Peep::findOrFail($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return new PeepResource(Peep::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate(['message' => 'string|required', 'user_id' => 'integer|required']);

        $peep = Peep::findOrFail($id);
        $peep->message = $request->input('message');
        $peep->user_id = 1;
        $peep->status = 'active';

        $peep->save();

        return response()->json([
            'message' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $peep = Peep::findOrFail($id);
        $peep->status = 'deleted';
        $peep->save();

        return response()->json(['message' => 'success']);
    }
}
