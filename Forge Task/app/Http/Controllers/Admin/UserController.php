<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Helpers\UserLogHelper;
use App\Http\Controllers\Controller;
use App\Models\UserComments;
use App\Models\UserFavourites;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * @OA\Get(
     *      path="/admin/users",
     *      operationId="users.index",
     *      tags={"Admin"},
     *      summary="Get list of non-admin users",
     *      description="Returns a paginated list of non-admin users",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/User")
     *       ),
     *       @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *       ),
     *       @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *       ),
     *       @OA\Response(
     *          response=500,
     *          description="Internal server error"
     *       ),
     * )
     */
    public function index()
    {
        $users = User::where('is_admin', false)->paginate(10);

        return view('admin-backoffice-users-index', ['users' => $users]);
    }

    /**
     * @OA\Get(
     *      path="/admin/users/{user_id}/edit",
     *      operationId="users.edit",
     *      tags={"Admin"},
     *      summary="Get user details for editing",
     *      description="Returns user data with favourites and comments",
     *      @OA\Parameter(
     *          name="user_id",
     *          description="User id",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/User")
     *       ),
     *       @OA\Response(
     *          response=404,
     *          description="User not found"
     *       ),
     *       @OA\Response(
     *          response=500,
     *          description="Internal server error"
     *       ),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     * )
     */
    public function edit($user_id)
    {
        $user = User::with('userFavourites', 'comments')->findOrFail($user_id);

        return view('admin-backoffice-users-edit', ['user' => $user]);
    }

    /**
     * @OA\Put(
     *     path="/admin/users/{user_id}/update",
     *     operationId="updateUser",
     *     tags={"Admin"},
     *     summary="Update user details",
     *     description="Updates user name, email and password",
     *     @OA\Parameter(
     *         name="user_id",
     *         in="path",
     *         description="ID of the user to be updated",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="name",
     *         in="query",
     *         description="New name of the user",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="email",
     *         in="query",
     *         description="New email of the user",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="password",
     *         in="query",
     *         description="New password of the user",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="User updated successfully"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="User not found"
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     ),
     *)
     */
    public function update(Request $request, $user_id)
    {
        $user = User::with('userFavourites', 'comments')->findOrFail($user_id);

        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->email_verified_at = now();
        $user->password = Hash::make($request->input('password'));
        $user->save();

        return redirect()->route('users.index');
    }

    /**
     * @OA\Delete(
     *     path="/admin/users/{user_id}/delete",
     *     operationId="deleteUser",
     *     tags={"Admin"},
     *     summary="Delete user",
     *     description="Deletes user by ID",
     *     @OA\Parameter(
     *         name="user_id",
     *         in="path",
     *         description="ID of the user to be deleted",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="User deleted successfully"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="User not found"
     *     ),
     *      @OA\Response(
     *          response=500,
     *          description="Internal server error"
     *     ),
     *)
     */
    public function delete($user_id)
    {
        $user = User::findOrFail($user_id);
        $user->delete();

        return redirect()->back();
    }

    /**
     * @OA\Delete(
     *     path="/admin/comments/{comment_id}",
     *     operationId="deleteComment",
     *     tags={"Admin"},
     *     summary="Delete comment",
     *     description="Deletes comment by ID",
     *     @OA\Parameter(
     *         name="comment_id",
     *         in="path",
     *         description="ID of the comment to be deleted",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Comment deleted successfully"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Comment not found"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     ),
     *)
    */
    public function deleteComment($comment_id)
    {
        $comment = UserComments::findOrFail($comment_id);
        $comment->delete();
        return redirect()->back()->with('success', 'Comment deleted successfully.');
    }

    /**
     * @OA\Delete(
     *     path="/admin/favourites/{favourite_id}",
     *     operationId="deleteFavourite",
     *     tags={"Admin"},
     *     summary="Delete favourite",
     *     description="Deletes favourite by ID",
     *     @OA\Parameter(
     *         name="favourite_id",
     *         in="path",
     *         description="ID of the favourite to be deleted",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Favourite deleted successfully"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Favourite not found"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     ),
     *)
    */
    public function deleteFavourite($favourite_id)
    {
        $favourite = UserFavourites::findOrFail($favourite_id);
        $favourite->delete();
        return redirect()->back()->with('success', 'Favourite deleted successfully.');
    }

    /**
     * @OA\Get(
     *     path="/admin/logs",
     *     operationId="userLog",
     *     tags={"Admin"},
     *     summary="Get user log activity",
     *     description="Returns a list of user log activity",
     *     @OA\Response(
     *         response=200,
     *         description="User log activity retrieved successfully",
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthenticated"
     *     ),
     *     @OA\Response(
     *         response=403,
     *         description="Forbidden"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     ),
     *)
    */
    public function userLog()
    {
        $logs = UserLogHelper::userLogLists();

        return view('log-activity',compact('logs'));
    }


}
