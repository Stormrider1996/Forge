<?php

namespace App\Http\Controllers\NewsAPI;

use App\Models\News;
use App\Models\User;
use App\Models\UserComments;
use Illuminate\Http\Request;
use App\Helpers\UserLogHelper;
use Illuminate\Contracts\View\View;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Egulias\EmailValidator\Parser\Comment;

class UserCommentsController extends Controller
{
    /**
     * @OA\Get(
     *     path="/news/comments",
     *     tags={"Comments"},
     *     summary="Get a list of comments with news and user details",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/UserComments")
     *         )
     *     )
     * )
     */
    public function index(Request $request){
        $news = News::firstOrCreate([
            'title' => $request->title,
            'description' => $request->description,
            'newsURL' => $request->newsURL,
            'imageURL' => $request->imageURL,
        ]);

        $comments = UserComments::with('user')->get();

        return view('comments', compact('news', 'comments'));
    }

    /**
     * @OA\Post(
     *     path="/news/comments",
     *     tags={"Comments"},
     *     summary="Create a new comment",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             type="object",
     *             required={"comment"},
     *             @OA\Property(
     *                 property="comment",
     *                 type="string",
     *                 description="The content of the comment"
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(
     *                 property="success",
     *                 type="string",
     *                 description="The success message"
     *             )
     *         )
     *     )
     * )
     */
    public function store(Request $request)
    {
        $authUserId = Auth::user()->id;

        $request->validate([
            'comment' => 'required|string|max:255',
        ]);

        $comment = UserComments::create([
            'user_id' => $authUserId,
            'comment' => $request->comment,
        ]);

        UserLogHelper::addToLog('Comment added');
        return redirect()->back()->with('success', 'Comment added.');
    }

    /**
     * @OA\Delete(
     *     path="/news/comments/{comment_id}",
     *     tags={"Comments"},
     *     summary="Delete a comment by id",
     *     @OA\Parameter(
     *         name="comment_id",
     *         in="path",
     *         required=true,
     *         description="The id of the comment to delete",
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(
     *                 property="success",
     *                 type="string",
     *                 description="The success message"
     *             )
     *         )
     *     )
     * )
     */
    public function destroy($comment_id)
    {
        $comment = UserComments::findOrFail($comment_id);
        $comment->delete();

        return redirect()->back()->with('success', 'Comment deleted.');
    }
}
