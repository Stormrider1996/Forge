<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\UserComments;
use App\Models\UserFavourites;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class NewsApiTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function testTopHeadlinesPage()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get(route('top-headlines'));
        $response->assertStatus(200);
    }

    public function testAllNewsPage()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get(route('everything'));
        $response->assertStatus(200);
    }

    public function testDashboardPage()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get(route('dashboard'));
        $response->assertStatus(200);
    }

    public function testSourcesPage()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/news/sources?category=general&language=en&country=us');
        $response->assertStatus(200);
    }

    public function testFavouritesPage()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get(route('favourites.index'));
        $response->assertStatus(200);
    }

    public function testCreatingUserFavourite()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->post(route('favourites.store'), [
            'title' => 'Example Favourite',
            'description' => 'Example description',
            'newsURL' => 'http://example.com/news',
            'imageURL' => 'http://example.com/image.jpg',
        ]);
        $response->assertRedirect();
        $this->assertDatabaseHas('user_favourites', [
            'title' => 'Example Favourite',
            'description' => 'Example description',
            'newsURL' => 'http://example.com/news',
            'imageURL' => 'http://example.com/image.jpg',
        ]);
    }

    public function testUpdateUserFavouriteCategory()
    {
        $user = User::factory()->create();
        $category = 'sports';
        $response = $this->actingAs($user)->put(route('categories.update', $user->id), [
            'category' => $category,
        ]);
        $response->assertRedirect();
        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'favourite_category' => $category,
        ]);
    }

    public function testDeletingUserFavourite()
    {
        $user = User::factory()->create();
        $favourite = $user->userFavourites()->create([
            'newsURL' => 'https://example.com/news/1',
            'title' => 'Fake News',
            'image' => 'https://example.com/news/1/image.jpg',
            'description' => 'This is a fake news article.',
            'user_id' => $user->id,
        ]);
        $response = $this->actingAs($user)->delete(route('favourites.destroy', $favourite));
        $response->assertRedirect();
        $this->assertDatabaseMissing('user_favourites', [
            'id' => $favourite->id,
        ]);
    }

    public function testCommentsPage()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->post(route('comments.store'), [
            'user_id' => $user->id,
            'comment' => 'Test Comment',

        ]);
        $response->assertStatus(302);
        $this->assertDatabaseHas('user_comments', [
            'user_id' => $user->id,
            'comment' => 'Test Comment',
        ]);

    }

    public function testDeleteComment()
    {
        $user = User::factory()->create();
        $comment = UserComments::factory()->create([
            'user_id' => $user->id,
            'comment' => 'Test Comment',
        ]);
        $response = $this->actingAs($user)->delete(route('comments.destroy', $comment->id));
        $response->assertStatus(302);
        $this->assertDatabaseMissing('user_comments', ['id' => $comment->id]);
    }

    public function testUserIndexPageAsAdmin()
    {
        $admin = User::factory()->create(['is_admin' => true]);
        $response = $this->actingAs($admin)->get(route('users.index'));
        $response->assertOk();
    }

    public function testEditingUserAsAdmin()
    {
        $admin = User::factory()->create(['is_admin' => true]);
        $user = User::factory()->create();
        $response = $this->actingAs($admin)->get(route('users.edit', $user));
        $response->assertOk();
    }

    public function testUpdatingUserAsAdmin()
    {
        $admin = User::factory()->create(['is_admin' => true]);
        $user = User::factory()->create();
        $response = $this->actingAs($admin)->put(route('users.update', $user), [
            'name' => 'New Name',
            'email' => $user->email,
        ]);
        $response->assertRedirect();
        $user->refresh();
        $this->assertEquals('New Name', $user->name);
    }

    public function testDeletingUserAsAdmin()
    {
        $admin = User::factory()->create(['is_admin' => true]);
        $user = User::factory()->create();
        $response = $this->actingAs($admin)->delete(route('users.delete', $user));
        $response->assertRedirect();
        $this->assertDatabaseMissing('users', [
            'id' => $user->id,
        ]);
    }

    public function testLogsPageAsAdmin()
    {
        $admin = User::factory()->create(['is_admin' => true]);
        $response = $this->actingAs($admin)->get(route('logs.index'));
        $response->assertOk();
    }

    public function testDeleteCommentAsAdmin()
    {
        $user = User::factory()->create();
        $admin = User::factory()->create([
            'is_admin' => true,
        ]);
        $this->actingAs($admin);
        $comment = UserComments::factory()->create([
            'user_id' => $user->id,
            'comment' => 'Example comment',
        ]);
        $response = $this->delete(route('deleteComment', ['comment_id' => $comment->id]));
        $this->assertDatabaseMissing('user_comments', [
            'id' => $comment->id,
        ]);
        $response->assertRedirect()->assertSessionHas('success', 'Comment deleted successfully.');
    }

    public function testDeleteFavouriteAsAdmin()
    {
        $user = User::factory()->create();
        $admin = User::factory()->create([
            'is_admin' => true,
        ]);
        $this->actingAs($admin);
        $favourite = UserFavourites::factory()->create([
            'user_id' => $user->id,
            'title' => 'Example Favourite',
            'description' => 'Example description',
            'newsURL' => 'http://example.com/news',
            'imageURL' => 'http://example.com/image.jpg',
        ]);
        $response = $this->delete(route('deleteFavourite', ['favourite_id' => $favourite->id]));
        $this->assertDatabaseMissing('user_favourites', [
            'id' => $favourite->id,
        ]);
        $response->assertRedirect()->assertSessionHas('success', 'Favourite deleted successfully.');
    }


}