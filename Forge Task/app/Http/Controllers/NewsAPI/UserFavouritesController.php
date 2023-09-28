<?php

namespace App\Http\Controllers\NewsAPI;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\UserFavourites;
use App\Helpers\UserLogHelper;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use jcobhams\NewsApi\NewsApi;

class UserFavouritesController extends Controller
{
    /**
     * @OA\Get(
     *     path="/user/favourites",
     *     summary="Get user favourites",
     *     tags={"News"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Returns a view of user favourites and news categories",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(
     *                 property="userFavourites",
     *                 type="array",
     *                 @OA\Items(ref="#/components/schemas/UserFavourites")
     *             ),
     *             @OA\Property(
     *                 property="categories",
     *                 type="array",
     *                 @OA\Items(type="string")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     ),
     * )
     */
    public function index()
    {

        $userFavourites = User::find(auth()->user()->id)->userFavourites;

        $newsApi = new NewsAPI(env('NEWS_API_KEY'));
        $categories = $newsApi->getCategories();

        return view('userFavourites', compact('userFavourites', 'categories'));
    }

    /**
     * @OA\Post(
     *     path="/user/favourites",
     *     summary="Store a user favourite",
     *     tags={"News"},
     *     security={{"bearerAuth":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             type="object",
     *             required={"title", "description", "newsURL", "imageURL"},
     *             @OA\Property(
     *                 property="title",
     *                 type="string",
     *                 description="The title of the favourite."
     *             ),
     *             @OA\Property(
     *                 property="description",
     *                 type="string",
     *                 description="The description of the favourite."
     *             ),
     *             @OA\Property(
     *                 property="newsURL",
     *                 type="string",
     *                 format="uri",
     *                 description="The URL of the news article related to the favourite."
     *             ),
     *             @OA\Property(
     *                 property="imageURL",
     *                 type="string",
     *                 format="uri",
     *                 description="The URL of the image related to the favourite."
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=302,
     *         description="Redirects back with a success or error message"
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     ),
     * )
     */
    public function store(Request $request)
    {
        $authUserId = Auth::user()->id;

        $favourite = UserFavourites::firstOrCreate([
            'user_id' => $authUserId,
            'title' => $request->title,
            'description' => $request->description,
            'newsURL' => $request->newsURL,
            'imageURL' => $request->imageURL,
        ]);

        if ($favourite->wasRecentlyCreated) {
            UserLogHelper::addToLog('Favourite article added');
            return redirect()->back()->with('success', 'News article added to favourites.');
        } else {
            return redirect()->back()->with('error', 'News article already added to favourites.');
        }
    }

    /**
     * @OA\Put(
     *     path="/user/favourites/{user_id}",
     *     summary="Update a user favourite category",
     *     tags={"News"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="user_id",
     *         in="path",
     *         required=true,
     *         description="The identifier of the user to update",
     *         @OA\Schema(
     *             type="UUID",
     *             format="string"
     *         )
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             type="object",
     *             required={"category"},
     *             @OA\Property(
     *                 property="category",
     *                 type="string",
     *                 description="The name of the favourite category to update"
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=302,
     *         description="Redirects back with a success message"
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="User not found"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     ),
     * )
     */
    public function update(Request $request, $user_id)
    {
        $user = User::findOrFail($user_id);
        $user->favourite_category = $request->input('category');
        $user->save();

        return redirect()->back()->with('success', 'User favourite category updated successfully.');
    }

    /**
     * @OA\Delete(
     *     path="/user/favourites/{userFavourite_id}",
     *     summary="Delete a user favourite",
     *     tags={"News"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="userFavourite_id",
     *         in="path",
     *         required=true,
     *         description="The identifier of the user favourite to delete",
     *         @OA\Schema(
     *             type="UUID",
     *             format="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response=302,
     *         description="Redirects to the favourites index with a success message"
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="User favourite not found"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     ),
     * )
     */
    public function destroy($userFavourite_id)
    {
        $userFavourite = UserFavourites::findOrFail($userFavourite_id);
        $userFavourite->delete();

        return redirect()->route('favourites.index')->with('success', 'Favourite article deleted successfully.');
    }
}
