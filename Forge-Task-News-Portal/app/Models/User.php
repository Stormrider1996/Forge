<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * @OA\Schema(
 *   schema="User",
 *   type="object",
 *   required={"name", "country", "language", "email", "password", "favourite_category"},
 *   @OA\Property(
 *     property="id",
 *     type="integer",
 *     format="int64",
 *     readOnly=true,
 *     description="The unique identifier of the user."
 *   ),
 *   @OA\Property(
 *     property="name",
 *     type="string",
 *     description="The name of the user."
 *   ),
 *   @OA\Property(
 *     property="country",
 *     type="string",
 *     description="The country of the user."
 *   ),
 *   @OA\Property(
 *     property="language",
 *     type="string",
 *     description="The language of the user."
 *   ),
 *   @OA\Property(
 *     property="email",
 *     type="string",
 *     format="email",
 *     description="The email address of the user."
 *   ),
 *   @OA\Property(
 *     property="password",
 *     type="string",
 *     format="password",
 *     writeOnly=true,
 *     description="The password of the user."
 *   ),
 *   @OA\Property(
 *     property="favourite_category",
 *     type="string",
 *     description="The favourite category of the user."
 *   ),
 *   @OA\Property(
 *     property="email_verified_at",
 *     type="string",
 *     format="date-time",
 *     nullable=true,
 *     readOnly=true,
 *     description="The date and time when the email address of the user was verified."
 *   ),
 *    @OA\Property(
 *      property="userFavourites",
 *      type="array",
 *      @OA\Items(ref="#/components/schemas/UserFavourites"),
 *      readOnly=true,
 *      description="The favourites of the user."
 *    ),
 *    @OA\Property(
 *      property="comments",
 *      type="array",
 *      @OA\Items(ref="#/components/schemas/UserComments"),
 *      readOnly=true,
 *      description="The comments of the user."
 *    )
 * )
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'country',
        'language',
        'email',
        'password',
        'favourite_category',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function userFavourites()
    {
        return $this->hasMany(UserFavourites::class);
    }

    public function comments()
    {
        return $this->hasMany(UserComments::class);
    }
}