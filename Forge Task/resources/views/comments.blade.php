<x-app-layout>

    <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <a href="{{ $news->newsURL }}" target="_blank" class="text-3xl font-bold">{{ $news->title }}</a>


        @if ($comments->count() > 0)
        <h2 class="mt-6 text-xl font-semibold">Comments:</h2>

        <ul class="mt-4">
            @foreach ($comments as $comment)
            <li class="py-4 border-b border-gray-300" x-data="{ editing: false, comment: '{{ $comment->comment }}' }">
                <strong>{{ $comment->user->name }}</strong>
                <p class="mt-2" x-show="!editing">{{ $comment->comment }}</p>
                @if($comment->user->id == auth()->user()->id && now()->diffInMinutes($comment->created_at) < 5)
                <div class="mt-2" x-show="editing">
                    <form action="{{ route('comments.update', $comment->id) }}" method="POST">
                        @csrf
                        @method('PUT')
                        <textarea name="comment" id="comment" cols="30" rows="5" x-model="comment"
                            class="w-full p-2 border border-gray-400"></textarea>
                        <div class="flex flex-row space-x-2"> <!-- changed flex direction to row -->
                            <button type="submit"
                                class="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">Save</button>
                            <button type="button" @click="editing = false"
                                class="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600">Cancel</button>
                        </div>
                    </form>
                </div>
                <div class="flex mt-2 space-x-2">
                    <button type="button" x-show="!editing" @click="editing = true"
                        class="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600">Edit</button>
                    <form action="{{ route('comments.destroy', $comment->id) }}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button type="submit"
                            class="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">Delete</button>
                    </form>
                </div>
                @endif
            </li>
            @endforeach
        </ul>
        @endif


        <form action="{{ route('comments.store') }}" method="POST" class="mt-6">
            @csrf
            <input type="hidden" name="news_id" value="{{ $news->id }}">
            <div class="mb-4">
                <label for="comment" class="block mb-2 font-bold text-gray-700">Comment:</label>
                <textarea name="comment" id="comment" cols="30" rows="5"
                    class="w-full p-2 border border-gray-400"></textarea>
            </div>
            <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Submit</button>
            <div class="items-center justify-end">
                {{ $comments->links() }}
            </div>
            @error('comment')
            <span class="text-red-500">{{ $message }}</span>
            @enderror
        </form>
    </div>
    </x-app-layout>
