<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @OA\Schema(
 *     schema="UserLog",
 *     type="object",
 *     title="UserLog",
 *     description="A user log model",
 *     @OA\Property(property="id", type="string", example="029ee764-4177-4f54-8ee7-f1a348fdcdb7"),
 *     @OA\Property(property="subject", type="string", example="User logged in"),
 *     @OA\Property(property="url", type="string", format="url", example="https://example.com/login"),
 *     @OA\Property(property="method", type="string", enum={"GET","POST","PUT","PATCH","DELETE"}, example="POST"),
 *     @OA\Property(property="ip", type="string", format="ipv4", example="192.168.0.1"),
 *     @OA\Property(property="agent", type="string", example="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"),
 *     @OA\Property(property="user_id", type="string", example=1),
 *     @OA\Property(property="created_at", type="string", format="date-time", example="2021-12-31T23:59:59Z"),
 *     @OA\Property(property="updated_at", type="string", format="date-time", example="2021-12-31T23:59:59Z")
 * )
 */
class UserLog extends Model
{
    use UUID;

    protected $fillable = [
        'subject', 'url', 'method', 'ip', 'agent', 'user_id'
    ];
}