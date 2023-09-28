<x-app-layout>

    <head>
        <title>All News</title>
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css">
    </head>

    @if (session('success'))
        <div class="relative px-4 py-3 text-center text-green-700 bg-green-100 border border-green-400 rounded"
            role="alert">
            <strong class="font-bold">Success!</strong>
            <span class="block sm:inline">{{ session('success') }}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
        </div>
    @elseif(session('error'))
        <div class="relative px-4 py-3 text-center text-red-700 bg-red-100 border border-red-400 rounded" role="alert">
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">{{ session('error') }}</span>
        </div>
    @endif

    <body class="bg-gray-100">
        <div class="flex justify-center mt-3 mb-3">
            <form action="{{ route('everything') }}" method="GET">
                <div class="flex items-center">
                    <label for="from" class="mr-1 font-semibold text-gray-900">From:</label>
                    <input type="datetime-local" id="from" name="from" class="px-2 py-1 border rounded-md mr-2">
                    <label for="to" class="mr-1 font-semibold text-gray-900">To:</label>
                    <input type="datetime-local" id="to" name="to" class="px-2 py-1 border rounded-md mr-2">
                    @if ($params['source'] == null)
                        <input type="hidden" name="country" value="{{ $params['country'] }}">
                    @else
                        <input type="hidden" name="source" value="{{ $params['source'] }}">
                    @endif
                    <input type="hidden" name="q" value="{{ $params['q'] }}">
                    <input type="hidden" name="language" value="{{ $params['language'] }}">
                    @if ($params['sort_by'] != null)
                        <input type="hidden" name="sort_by" value="{{ $params['sort_by'] }}">
                    @endif
                    <button type="submit"
                        class="px-4 py-2 font-semibold text-gray-900 bg-gray-200 rounded-md">Apply</button>
                </div>
            </form>
        </div>

        <form action="{{ route('everything') }}" method="GET">
            <div class="flex items-center justify-center mb-4">
                <label for="sort_by" class="mr-2 text-sm font-medium">Sort by:</label>
                <select id="sort_by" name="sort_by" class="border border-gray-300 rounded-md px-8 py-1">
                    @foreach ($sortParms as $sortParm)
                        <option value="{{ $sortParm }}"
                            {{ $sortParm == request()->get('sort_by') ? 'selected' : '' }}>{{ ucfirst($sortParm) }}
                        </option>
                    @endforeach
                </select>
                @if ($params['source'] == null)
                    <input type="hidden" name="country" value="{{ $params['country'] }}">
                @else
                    <input type="hidden" name="source" value="{{ $params['source'] }}">
                @endif
                <input type="hidden" name="q" value="{{ $params['q'] }}">
                <input type="hidden" name="language" value="{{ $params['language'] }}">
                @if ($params['from'] != null && $params['to'] != null)
                    <input type="hidden" name="from" value="{{ $params['from'] }}">
                    <input type="hidden" name="from" value="{{ $params['to'] }}">
                @endif
                <button type="submit"
                    class="ml-2 px-4 py-2 font-semibold text-gray-900 bg-gray-200 rounded-md">Apply</button>
            </div>
        </form>

        <div class="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
            @foreach ($_articles as $article)
                <div class="overflow-hidden bg-white rounded-lg shadow-md">
                    <img src="{{ $article->urlToImage }}" alt="{{ $article->title }}"
                        class="object-cover w-full h-56">
                    <div class="p-6">
                        <h2 class="mb-2 text-xl font-bold"><a href="{{ $article->url }}"
                                target="_blank">{{ $article->title }}</a></h2>
                        <p class="text-base text-gray-700">{{ $article->description }}</p>
                        <p class="mt-4 text-sm text-gray-500">Published: {{ $article->publishedAt }}</p>
                        <div class="flex align-items-center justify-content-center">
                            <form action="{{ route('favourites.store') }}" method="POST" class="mt-4">
                                @csrf
                                <input type="hidden" name="title" value="{{ $article->title }}">
                                <input type="hidden" name="description" value="{{ $article->description }}">
                                <input type="hidden" name="newsURL" value="{{ $article->url }}">
                                <input type="hidden" name="imageURL" value="{{ $article->urlToImage }}">
                                <button type="submit"
                                    class="px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-600">
                                    <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M10 3.22l-.61-.6a5.5 5.5 0 00-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 00-7.78-7.77l-.61.61z" />
                                    </svg>
                                </button>
                            </form>
                            <form action="{{ route('comments.index') }}" class="inline-block mt-1">
                                @csrf
                                <input type="hidden" name="title" value="{{ $article->title }}">
                                <input type="hidden" name="description" value="{{ $article->description }}">
                                <input type="hidden" name="newsURL" value="{{ $article->url }}">
                                <input type="hidden" name="imageURL" value="{{ $article->urlToImage }}">
                                <button type="submit"
                                    class="px-4 py-2 mx-2 my-3 text-white bg-blue-500 rounded-full hover:bg-blue-600">
                                    <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M18 13v1a2 2 0 01-2 2H4l-2 2V4a2 2 0 012-2h12a2 2 0 012 2v9zm-3-8H5v1h10V5zm0 3H5v1h10V8zm0 3H5v1h10v-1z" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                        </form>
                    </div>
                </div>
            @endforeach
        </div>

        <div class="flex justify-center mt-8">

            <a href="{{ route('everything', array_merge($params, ['page' => 1])) }}"
                class="px-4 py-2 mr-2 font-semibold text-gray-900 bg-gray-200 rounded-md">First</a>


            @foreach ($pagination_links as $link)
                @if ($link['page'] <= 16)
                    <a href="{{ route('everything', array_merge($params, ['page' => $link['page']])) }}"
                        class="px-4 py-2 mx-1 font-semibold text-gray-900 bg-gray-200 rounded-md {{ $link['active'] ? 'bg-blue-500 text-white' : '' }}">
                        {{ $link['page'] }}</a>
                @endif
            @endforeach

            @if (ceil($totalPages / 6) >= 16)
                <a href="{{ route('everything', array_merge($params, ['page' => 16])) }}"
                    class="px-4 py-2 ml-2 font-semibold text-gray-900 bg-gray-200 rounded-md">Last</a>
            @else
                <a href="{{ route('everything', array_merge($params, ['page' => ceil($totalPages / 6)])) }}"
                    class="px-4 py-2 ml-2 font-semibold text-gray-900 bg-gray-200 rounded-md">Last</a>
            @endif

        </div>
    </body>
</x-app-layout>
