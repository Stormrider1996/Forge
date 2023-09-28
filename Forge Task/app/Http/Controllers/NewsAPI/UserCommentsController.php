<?php

namespace App\Http\Controllers\NewsAPI;

use App\Models\News;
use App\Models\User;
use App\Models\UserComments;
use Illuminate\Http\Request;
use App\Helpers\UserLogHelper;
use Illuminate\Contracts\View\View;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Egulias\EmailValidator\Parser\Comment;

class UserCommentsController extends Controller
{
    /**
     * @OA\Get(
     *     path="/news/comments",
     *     tags={"News"},
     *     summary="Get a list of comments with news and user details",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/UserComments")
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     ),
     * )
     */
    public function index(Request $request)
    {
        $news = News::firstOrCreate([
            'title' => $request->title,
            'description' => $request->description,
            'newsURL' => $request->newsURL,
            'imageURL' => $request->imageURL,
        ]);

        $comments = UserComments::where('news_id', $news->id)->paginate(10);

        return view('comments', compact('news', 'comments'));
    }

    /**
     * @OA\Post(
     *     path="/news/comments",
     *     tags={"News"},
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
        $news = News::findOrFail($request->news_id);
        $request->validate([
            'comment' => 'required|string|max:255',
        ]);

        $comment = UserComments::create([
            'news_id' => $news->id,
            'user_id' => $authUserId,
            'comment' => $request->comment,
        ]);

        UserLogHelper::addToLog('Comment added');
        return redirect()->back()->with('success', 'Comment added.');
    }

    /**
     * @OA\Put(
     *     path="/news/comments/{comment_id}",
     *     tags={"News"},
     *     summary="Update an existing comment",
     *     @OA\Parameter(
     *         name="comment_id",
     *         in="path",
     *         required=true,
     *         description="The ID of the comment to update",
     *         @OA\Schema(
     *             type="UUID"
     *         )
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             type="object",
     *             required={"comment"},
     *             @OA\Property(
     *                 property="comment",
     *                 type="string",
     *                 description="The new content of the comment"
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
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Validation error"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Comment not found"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     )
     * )
     */
    public function update(Request $request, $comment_id)
    {
        $comment = UserComments::findOrFail($comment_id);
        $now = Carbon::now();
        $createdAt = $comment->created_at;
        $diff = $now->diffInMinutes($createdAt);
        if ($diff < 5) {
            $request->validate([
                'comment' => 'required|string|max:255',
            ]);

            $comment->update([
                'comment' => $request->comment,
            ]);

            UserLogHelper::addToLog('Comment updated');
            return redirect()->back()->with('success', 'Comment updated.');
        } else {
            return redirect()->back()->with('error', 'You cannot update this record after 5 minutes');
        }
    }

    /**
     * @OA\Delete(
     *     path="/news/comments/{comment_id}",
     *     tags={"News"},
     *     summary="Delete a comment by id",
     *     @OA\Parameter(
     *         name="comment_id",
     *         in="path",
     *         required=true,
     *         description="The id of the comment to delete",
     *         @OA\Schema(
     *             type="UUID"
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
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     ),
     * )
     */
    public function destroy($comment_id)
    {
        $comment = UserComments::findOrFail($comment_id);
        $now = Carbon::now();
        $createdAt = $comment->created_at;
        $diff = $now->diffInMinutes($createdAt);
        if ($diff < 5) {
            $comment->delete();
            return redirect()->back()->with('success', 'Comment deleted.');
        } else {
            return redirect()->back()->with('error', 'You cannot delete this record after 5 minutes');
        }
    }
}