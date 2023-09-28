<x-app-layout>
    <x-slot name="header">
        <h2 class="text-xl font-semibold leading-tight text-gray-800">
            {{ __('Favourites Section') }}
        </h2>
    </x-slot>

    @if(session('success'))
    <div class="relative px-4 py-3 text-center text-green-700 bg-green-100 border border-green-400 rounded"
        role="alert">
        <strong class="font-bold">Success!</strong>
        <span class="block sm:inline">{{ session('success') }}</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg class="w-6 h-6 text-green-500 fill-current" role="button" viewBox="0 0 20 20">
                <title>Close</title>
                <path
                    d="M14.348 5.652a1 1 0 00-1.414 0L10 8.586 7.066 5.652a1 1 0 00-1.414 1.414L8.586 10l-2.934 2.934a1 1 0 000 1.414 1 1 0 001.414 0L10 11.414l2.934 2.934a1 1 0 001.414-1.414L11.414 10l2.934-2.934a1 1 0 000-1.414z"
                    clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
        </span>
    </div>
    @endif

    <div style="text-align: center;">
        <form method="POST" action="{{ route('categories.update', auth()->user()->id) }}">
            @csrf
            @method('PUT')
            <div>
                <x-input-label for="category" :value="__('Favourite category')" />
                <select name="category" id="category" class="mt-1" style="width: 50%;">
                    @foreach ($categories as $category)
                    <option value={{ $category }} {{ old('category', auth()->user()->favourite_category) === $category ?
                        'selected' : '' }}>
                        {{ $category }}</option>
                    @endforeach
                </select>
            </div>
            <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded">Save</button>
        </form>
    </div>

    <div class="py-12">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="overflow-hidden bg-white shadow-xl sm:rounded-lg">
                <div class="p-6">
                    <h3 class="mb-6 text-lg font-semibold text-gray-900">My Favourite Items</h3>
                    @if ($userFavourites->count() > 0)
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        @foreach ($userFavourites as $favourite)
                        <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <img src="{{ $favourite->imageURL }}" alt="{{ $favourite->imageURL }}"
                                class="object-cover w-full h-56">
                            <div class="p-6">
                                <h4 class="mb-2 text-lg font-semibold text-gray-900">
                                    <a href="{{ $favourite->newsURL }}" target="_blank">{{ $favourite->newsURL }}</a>
                                </h4>
                                <p class="text-base text-gray-700">{{ $favourite->description }}</p>
                                <p class="mt-4 text-sm text-gray-500">{{ $favourite->created_at->format('F j, Y, g:i a')
                                    }}</p>
                                <form action="{{ route('favourites.destroy', $favourite->id) }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="mt-4 text-sm text-red-500">Delete</button>
                                </form>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    @else
                    <p>You haven't added any favourite items yet.</p>
                    @endif
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
