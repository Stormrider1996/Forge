<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\NewsAPI\NewsController;
use App\Http\Controllers\NewsAPI\UserCommentsController;
use App\Http\Controllers\NewsAPI\UserFavouritesController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth', 'verified'])->group(function () {

    // Profile routes
    Route::controller(ProfileController::class)->group(function () {
        Route::get('/profile', 'edit')->name('profile.edit');
        Route::patch('/profile', 'update')->name('profile.update');
        Route::delete('/profile','destroy')->name('profile.destroy');
    });


    // News API routes
    Route::prefix('/news')->group(function () {
        Route::controller(NewsController::class)->group(function () {
            Route::get('/top-headlines', 'indexTopHeadlines')->name('top-headlines');
            Route::get('/everything', 'indexAllNews')->name('everything');
            Route::get('/dashboard', 'indexDashboard')->name('dashboard');
            Route::get('/sources', 'indexSources')->name('sources');
        });

    });

    // Favourites section routes
    Route::prefix('/user')->group(function () {
        Route::controller(UserFavouritesController::class)->group(function () {
            Route::get('/favourites', 'index')->name('favourites.index');
            Route::post('/favourites', 'store')->name('favourites.store');
            Route::put('/favourites/{user_id}', 'update')->name('categories.update');
            Route::delete('/favourites/{userFavourite_id}', 'destroy')->name('favourites.destroy');
        });
    });

    Route::prefix('/news')->group(function () {
        Route::controller(UserCommentsController::class)->group(function () {
            Route::get('/comments', 'index')->name('comments.index');
            Route::post('/comments', 'store')->name('comments.store');
            Route::delete('/comments/{comment_id}', 'destroy')->name('comments.destroy');
        });
    });
});

Route::middleware(['IsAdmin'])->group(function () {
    Route::prefix('/admin')->group(function () {
        Route::controller(UserController::class)->group(function () {
            Route::get('/users','index')->name('users.index');
            Route::get('/users/{user_id}/edit','edit')->name('users.edit');
            Route::put('/users/{user_id}/update','update')->name('users.update');
            Route::delete('/users/{user_id}/delete','delete')->name('users.delete');

            Route::get('/logs','userLog')->name('logs.index');

            Route::delete('/favourites/{favourite_id}', 'deleteFavourite')->name('deleteFavourite');
            Route::delete('/comments/{comment_id}', 'deleteComment')->name('deleteComment');
        });
    });
});

require __DIR__.'/auth.php';