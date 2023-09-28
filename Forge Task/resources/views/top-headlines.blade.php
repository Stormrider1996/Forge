<x-app-layout>

    <head>
        <title>Top Headlines</title>
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
        <div class="bg-gray-100">
            <div class="flex justify-center">
                <form action="{{ route('top-headlines') }}" class="mt-8 flex items-center">
                    <label class="mr-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="input-value">
                        SEARCH TOP HEADLINES
                    </label>
                    <input
                        class="px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                        id="input-value" name="q" type="text" placeholder="Enter your search terms">
                    @if ($params['category'] != null)
                        <input type="hidden" name="category" value="{{ $params['category'] }}">
                    @endif
                    <button
                        class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        type="submit">
                        Search
                    </button>
                </form>
            </div>

            <div class="flex justify-center">
                <form action="{{ route('top-headlines', $params['q']) }}" class="mt-8 flex items-center">
                    <label class="mr-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="select-category">
                        CHOOSE:
                    </label>
                    <select
                        class="px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                        id="select-category" name="category">
                        <option value="">Category</option>
                        @foreach ($categories as $category)
                            <option value="{{ $category }}">{{ $category }}</option>
                        @endforeach
                    </select>
                    @if ($params['q'] != null)
                        <input type="hidden" name="q" value="{{ $params['q'] }}">
                    @endif
                    <button
                        class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        type="submit">
                        Filter
                    </button>
                </form>
            </div>
        </div>

        <div class="container px-4 py-8 mx-auto">
            <h1 class="mb-8 text-3xl font-bold">Top Headlines</h1>
            <div class="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
                @foreach ($topHeadlines->articles as $article)
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
                        </div>
                    </div>
                @endforeach
            </div>
        </div>

        @php
            $totalPages = ceil($topHeadlines->totalResults / 6);
            $currentPage = $_GET['page'] ?? 1;
            $startPage = max($currentPage - 1, 1);
            $endPage = min($startPage + 2, $totalPages);
            $q = isset($params['q']) ? $params['q'] : '';
        @endphp

        <div class="flex justify-center mt-8">
            <div class="inline-flex rounded-md shadow">
                <div class="flex justify-center space-x-2">
                    <a href="{{ $currentPage > 1 ? '?page=' . ($currentPage - 1) . '&q=' . $q : '#' }}"
                        class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50{{ $currentPage == 1 ? ' cursor-not-allowed opacity-50' : '' }}">
                        Previous
                    </a>

                    @if ($currentPage > 2)
                        <a href="?page=1{{ $q ? '&q=' . $q : '' }}"
                            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                            1
                        </a>
                    @endif
                    @if ($currentPage > 3)
                        <span class="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300">...</span>
                    @endif

                    @for ($i = $startPage; $i <= $endPage; $i++)
                        <a href="?page={{ $i }}{{ $q ? '&q=' . $q : '' }}"
                            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white{{ $i == $currentPage ? ' font-bold bg-blue-500 text-white hover:bg-blue-700' : ' hover:bg-gray-50' }}">
                            {{ $i }}
                        </a>
                    @endfor

                    @if ($currentPage < $totalPages - 1)
                        @if ($currentPage < $totalPages - 2)
                            <span class="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300">...</span>
                        @endif
                        <a href="?page={{ $totalPages }}{{ $q ? '&q=' . $q : '' }}"
                            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                            {{ $totalPages }}
                        </a>
                    @endif

                    <a href="{{ $currentPage < $totalPages ? '?page=' . ($currentPage + 1) . '&q=' . $q : '#' }}"
                        class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50{{ $currentPage == $totalPages ? ' cursor-not-allowed opacity-50' : '' }}">
                        Next
                    </a>
                </div>
            </div>
        </div>
    </body>
</x-app-layout>
