<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *   schema="UserFavourites",
 *   type="object",
 *   required={"user_id", "title", "description", "newsURL", "imageURL"},
 *   @OA\Property(
 *     property="id",
 *     type="integer",
 *     format="int64",
 *     readOnly=true,
 *     description="The unique identifier of the user favourite."
 *   ),
 *   @OA\Property(
 *     property="user_id",
 *     type="integer",
 *     format="int64",
 *     description="The identifier of the user who added the favourite."
 *   ),
 *   @OA\Property(
 *     property="title",
 *     type="string",
 *     description="The title of the favourite."
 *   ),
*    @OA\Property(
*      property="description",
*      type="string",
*      description="The description of the favourite."
*    ),
*    @OA\Property(
*      property="newsURL",
*      type="string",
*      format="uri",
*      description="The URL of the news article related to the favourite."
*    ),
*    @OA\Property(
*      property="imageURL",
*      type="string",
*      format="uri",
*      description="The URL of the image related to the favourite."
*    ),
*    @OA\Property(
*      property="user",
*      ref="#/components/schemas/User",
*      readOnly=true,
*      description="The user who added the favourite."
*    )
* )
*/
class UserFavourites extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'description',
        'newsURL',
        'imageURL',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}