<?php

namespace App\Models;

use App\Models\News;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @OA\Schema(
 *   schema="UserComments",
 *   type="object",
 *   required={"user_id", "comment"},
 *   @OA\Property(
 *     property="id",
 *     type="integer",
 *     format="int64",
 *     readOnly=true,
 *     description="The unique identifier of the user comment."
 *   ),
 *   @OA\Property(
 *     property="user_id",
 *     type="integer",
 *     format="int64",
 *     description="The identifier of the user who made the comment."
 *   ),
 *   @OA\Property(
 *     property="comment",
 *     type="string",
 *     description="The content of the comment."
 *   ),
*    @OA\Property(
*      property="user",
*      ref="#/components/schemas/User",
*      readOnly=true,
*      description="The user who made the comment."
*    )
* )
*/
class UserComments extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'comment',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
