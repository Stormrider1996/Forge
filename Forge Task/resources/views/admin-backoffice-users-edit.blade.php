<x-app-layout>
    <h1 class="mb-8 text-3xl font-bold">Edit User Information</h1>

    <form method="POST" action="{{ route('users.update', $user->id) }}" class="max-w-lg mx-auto">
        @csrf

        <div class="mb-4">
            <label class="block mb-2 font-bold text-gray-700" for="favorite_articles">Name</label>
            <input class="form-input" id="name" type="text" name="name" value="{{ $user->name }}">
        </div>

        <div class="mb-4">
            <label class="block mb-2 font-bold text-gray-700" for="favorite_comments">Email</label>
            <input class="form-input" id="email" type="text" name="email" value="{{ $user->email }}">
        </div>

        <div class="mb-4">
            <label class="block mb-2 font-bold text-gray-700" for="favorite_comments">Password</label>
            <input class="form-input" id="password" type="password" name="password">
        </div>

        <div class="flex items-center justify-end mt-4">
            <button
                class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit">Update</button>
        </div>
    </form>

    <div class="mt-8">
        <h2 class="mb-4 text-2xl font-bold">Favorites</h2>
        <ul>
            @foreach ($user->userFavourites as $favourite)
            <li class="pb-4 mb-4 border-b border-black">
                <h3 class="mb-2 text-xl font-bold">{{ $favourite->title }}</h3>
                <div class="flex items-center justify-between">
                    <a href="{{ $favourite->newsURL }}" target="_blank"
                        class="mr-4 text-blue-500 hover:underline">View</a>
                    <form method="POST" action="{{ route('deleteFavourite', $favourite->id) }}">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="text-red-500 hover:underline">Delete</button>
                    </form>
                </div>
                <div>
                </div>
            </li>
            @endforeach
        </ul>
    </div>

    <div class="mt-8">
        <h2 class="mb-4 text-2xl font-bold">Comments</h2>
        <ul>
            @foreach ($user->comments as $comment)
            <li class="pb-4 mb-4 border-b border-black">
                <p class="mb-2">{{ $comment->comment }}</p>
                <div class="flex items-center justify-end">
                    <form method="POST" action="{{ route('deleteComment', $comment->id) }}">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="text-red-500 hover:underline">Delete</button>
                    </form>
                </div>
            </li>
            @endforeach
        </ul>
    </div>


</x-app-layout>