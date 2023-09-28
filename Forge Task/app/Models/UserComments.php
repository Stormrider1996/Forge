<?php

namespace App\Models;

use App\Models\News;
use App\Traits\UUID;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @OA\Schema(
 *   schema="UserComments",
 *   type="object",
 *   required={"user_id", "comment"},
 *   @OA\Property(
 *     property="id",
 *     type="UUID",
 *     format="string",
 *     readOnly=true,
 *     description="The unique identifier of the user comment."
 *   ),
 *   @OA\Property(
 *     property="news_id",
 *     type="UUID",
 *     format="string",
 *     description="The identifier of the user who made the comment."
 *   ),
 *   @OA\Property(
 *     property="user_id",
 *     type="UUID",
 *     format="string",
 *     description="The identifier of the news that has the comments."
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
    use HasFactory, UUID;

    protected $fillable = [
        'user_id',
        'news_id',
        'comment',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function news()
    {
        return $this->belongsTo(News::class);
    }
}
