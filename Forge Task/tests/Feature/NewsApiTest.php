<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\News;
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
        // Create a user
        $user = User::factory()->create();

        // Act: Send a GET request to the 'top-headlines' route
        $response = $this->actingAs($user)->get(route('top-headlines'));

        // Assert: Verify that the response has a status code of 200 (OK)
        $response->assertStatus(200);
    }

    public function testAllNewsPage()
    {
        // Create a user
        $user = User::factory()->create();

        // Act: Send a GET request to the 'everything' route
        $response = $this->actingAs($user)->get(route('everything'));

        // Assert: Verify that the response has a status code of 200 (OK)
        $response->assertStatus(200);
    }

    public function testDashboardPage()
    {
        // Create a user
        $user = User::factory()->create();

        // Act: Send a GET request to the 'dashboard' route
        $response = $this->actingAs($user)->get(route('dashboard'));

        // Assert: Verify that the response has a status code of 200 (OK)
        $response->assertStatus(200);
    }

    public function testSourcesPage()
    {
        // Create a user
        $user = User::factory()->create();

        // Act: Send a GET request to the '/news/sources' route with specific query parameters
        $response = $this->actingAs($user)->get('/news/sources?category=general&language=en&country=us');

        // Assert: Verify that the response has a status code of 200 (OK)
        $response->assertStatus(200);
    }

    public function testFavouritesPage()
    {
        // Create a user
        $user = User::factory()->create();

        // Act: Send a GET request to the 'favourites.index' route
        $response = $this->actingAs($user)->get(route('favourites.index'));

        // Assert: Verify that the response has a status code of 200 (OK)
        $response->assertStatus(200);
    }

    public function testCreatingUserFavourite()
    {
        // Create a user
        $user = User::factory()->create();

        // Act: Send a POST request to the 'favourites.store' route with data
        $response = $this->actingAs($user)->post(route('favourites.store'), [
            'title' => 'Example Favourite',
            'description' => 'Example description',
            'newsURL' => 'http://example.com/news',
            'imageURL' => 'http://example.com/image.jpg',
        ]);

        // Assert: Verify that the response is a redirect
        $response->assertRedirect();

        // Assert: Verify that the 'user_favourites' table has the created record
        $this->assertDatabaseHas('user_favourites', [
            'title' => 'Example Favourite',
            'description' => 'Example description',
            'newsURL' => 'http://example.com/news',
            'imageURL' => 'http://example.com/image.jpg',
        ]);
    }

    public function testUpdateUserFavouriteCategory()
    {
        // Create a user
        $user = User::factory()->create();

        // Define the category
        $category = 'sports';

        // Act: Send a PUT request to the 'categories.update' route with the user's ID and category data
        $response = $this->actingAs($user)->put(route('categories.update', $user->id), [
            'category' => $category,
        ]);

        // Assert: Verify that the response is a redirect
        $response->assertRedirect();

        // Assert: Verify that the 'users' table has the updated category for the user
        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'favourite_category' => $category,
        ]);
    }

    public function testDeletingUserFavourite()
    {
        // Create a user
        $user = User::factory()->create();

        // Create a favourite associated with the user
        $favourite = $user->userFavourites()->create([
            'newsURL' => 'https://example.com/news/1',
            'title' => 'Fake News',
            'image' => 'https://example.com/news/1/image.jpg',
            'description' => 'This is a fake news article.',
            'user_id' => $user->id,
        ]);

        // Act: Send a DELETE request to the 'favourites.destroy' route with the favourite's ID
        $response = $this->actingAs($user)->delete(route('favourites.destroy', $favourite));

        // Assert: Verify that the response is a redirect
        $response->assertRedirect();

        // Assert: Verify that the 'user_favourites' table no longer has the deleted favourite
        $this->assertDatabaseMissing('user_favourites', [
            'id' => $favourite->id,
        ]);
    }

    public function testCommentsPage()
    {
        // Create a user
        $user = User::factory()->create();

        // Create a news article
        $news = News::factory()->create();

        // Act: Send a POST request to the 'comments.store' route with comment data
        $response = $this->actingAs($user)->post(route('comments.store'), [
            'news_id' => $news->id,
            'user_id' => $user->id,
            'comment' => 'Test Comment',
        ]);

        // Assert: Verify that the response has a status code of 302 (Found/Redirect)
        $response->assertStatus(302);

        // Assert: Verify that the 'user_comments' table has the created comment
        $this->assertDatabaseHas('user_comments', [
            'news_id' => $news->id,
            'user_id' => $user->id,
            'comment' => 'Test Comment',
        ]);
    }

    public function testDeleteComment()
    {
        // Create a user
        $user = User::factory()->create();

        // Create a comment associated with the user
        $comment = UserComments::factory()->create([
            'user_id' => $user->id,
            'comment' => 'Test Comment',
        ]);

        // Act: Send a DELETE request to the 'comments.destroy' route with the comment's ID
        $response = $this->actingAs($user)->delete(route('comments.destroy', $comment->id));

        // Assert: Verify that the response has a status code of 302 (Found/Redirect)
        $response->assertStatus(302);

        // Assert: Verify that the 'user_comments' table no longer has the deleted comment
        $this->assertDatabaseMissing('user_comments', ['id' => $comment->id]);
    }

    public function testUserIndexPageAsAdmin()
    {
        // Create an admin user
        $admin = User::factory()->create(['is_admin' => true]);

        // Act: Send a GET request to the 'users.index' route
        $response = $this->actingAs($admin)->get(route('users.index'));

        // Assert: Verify that the response has a status code of 200 (OK)
        $response->assertOk();
    }

    public function testEditingUserAsAdmin()
    {
        // Create an admin user
        $admin = User::factory()->create(['is_admin' => true]);

        // Create a regular user
        $user = User::factory()->create();

        // Act: Send a GET request to the 'users.edit' route with the user's ID
        $response = $this->actingAs($admin)->get(route('users.edit', $user));

        // Assert: Verify that the response has a status code of 200 (OK)
        $response->assertOk();
    }

    public function testUpdatingUserAsAdmin()
    {
        // Create an admin user
        $admin = User::factory()->create(['is_admin' => true]);

        // Create a regular user
        $user = User::factory()->create();

        // Act: Send a PUT request to the 'users.update' route with the user's ID and updated data
        $response = $this->actingAs($admin)->put(route('users.update', $user), [
            'name' => 'New Name',
            'email' => $user->email,
        ]);

        // Assert: Verify that the response is a redirect
        $response->assertRedirect();

        // Refresh the user model from the database
        $user->refresh();

        // Assert: Verify that the user's name has been updated
        $this->assertEquals('New Name', $user->name);
    }

    public function testDeletingUserAsAdmin()
    {
        // Create an admin user
        $admin = User::factory()->create(['is_admin' => true]);

        // Create a regular user
        $user = User::factory()->create();

        // Act: Send a DELETE request to the 'users.delete' route with the user's ID
        $response = $this->actingAs($admin)->delete(route('users.delete', $user));

        // Assert: Verify that the response is a redirect
        $response->assertRedirect();

        // Assert: Verify that the 'users' table no longer has the deleted user
        $this->assertDatabaseMissing('users', ['id' => $user->id]);
    }

    public function testLogsPageAsAdmin()
    {
        // Create an admin user
        $admin = User::factory()->create(['is_admin' => true]);

        // Act: Send a GET request to the 'logs.index' route
        $response = $this->actingAs($admin)->get(route('logs.index'));

        // Assert: Verify that the response has a status code of 200 (OK)
        $response->assertOk();
    }

    public function testDeleteCommentAsAdmin()
    {
        // Create a regular user
        $user = User::factory()->create();

        // Create an admin user
        $admin = User::factory()->create(['is_admin' => true]);

        // Set the acting user as the admin
        $this->actingAs($admin);

        // Create a comment by the regular user
        $comment = UserComments::factory()->create([
            'user_id' => $user->id,
            'comment' => 'Example comment',
        ]);

        // Act: Send a DELETE request to the 'deleteComment' route with the comment's ID
        $response = $this->delete(route('deleteComment', ['comment_id' => $comment->id]));

        // Assert: Verify that the comment no longer exists in the database
        $this->assertDatabaseMissing('user_comments', ['id' => $comment->id]);

        // Assert: Verify that the response is a redirect and has a success message in the session
        $response->assertRedirect()->assertSessionHas('success', 'Comment deleted successfully.');
    }

    public function testDeleteFavouriteAsAdmin()
    {
        // Create a regular user
        $user = User::factory()->create();

        // Create an admin user
        $admin = User::factory()->create(['is_admin' => true]);

        // Set the acting user as the admin
        $this->actingAs($admin);

        // Create a favourite by the regular user
        $favourite = UserFavourites::factory()->create([
            'user_id' => $user->id,
            'title' => 'Example Favourite',
            'description' => 'Example description',
            'newsURL' => 'http://example.com/news',
            'imageURL' => 'http://example.com/image.jpg',
        ]);

        // Act: Send a DELETE request to the 'deleteFavourite' route with the favourite's ID
        $response = $this->delete(route('deleteFavourite', ['favourite_id' => $favourite->id]));

        // Assert: Verify that the favourite no longer exists in the database
        $this->assertDatabaseMissing('user_favourites', ['id' => $favourite->id]);

        // Assert: Verify that the response is a redirect and has a success message in the session
        $response->assertRedirect()->assertSessionHas('success', 'Favourite deleted successfully.');
    }
}
