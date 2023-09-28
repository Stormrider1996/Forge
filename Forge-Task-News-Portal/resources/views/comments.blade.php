<x-app-layout>

    <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <a href="{{ $news->newsURL }}" target="_blank" class="text-3xl font-bold">{{ $news->title }}</a>


        @if ($comments->count() > 0)
        <h2 class="mt-6 text-xl font-semibold">Comments:</h2>

        <ul class="mt-4">
            @foreach ($comments as $comment)
            <li class="py-4 border-b border-gray-300">
                <strong>{{ $comment->user->name }}</strong>
                <p class="mt-2">{{ $comment->comment }}</p>
                @if($comment->user->id == auth()->user()->id)
                <form action="{{ route('comments.destroy', $comment->id) }}" method="POST" class="mt-2">
                    @csrf
                    @method('DELETE')
                    <button type="submit"
                        class="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">Delete</button>
                </form>
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
            @error('comment')
            <span class="text-red-500">{{ $message }}</span>
            @enderror
        </form>
    </div>

</x-app-layout>