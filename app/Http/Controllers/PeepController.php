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
        $peeps = Peep::where('parent_id', 0)->orderBy('created_at', 'desc')->get();
        return  PeepResource::collection($peeps);
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
        $request->validate(['message' => 'string|required', 'parentID' => 'integer']);

        $peep = new Peep;
        $peep->message = $request->input('message');
        $peep->user_id = auth()->id();
        $peep->parent_id = $request->input('parentID') ? $request->input('parentID') : 0;
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
    public function show(Peep $peep)
    {
        $replies = Peep::where('parent_id', $peep->id)->get();
        return response()->json(
            [
                'peep' => $peep,
                'replies' => $replies
            ]
        );
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
        $request->validate(['message' => 'string|required']);

        $peep = Peep::findOrFail($id);
        $peep->message = $request->input('message');

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
