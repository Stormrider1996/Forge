<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css">
</head>

<body class="bg-gray-100">
    <div class="container px-4 py-8 mx-auto">
        <form action="{{ route('everything') }}" class="p-8 bg-gray-100 rounded-lg shadow-lg">
            @if($sources != null)
            <label for="source" class="block mb-2 font-bold text-gray-700">Choose a source:</label>
            @foreach($sources as $source)
            <div class="mb-4">
                <input type="checkbox" name="source" id="{{ $source->id }}" value="{{ $source->id }}"
                    class="mr-2 leading-tight">
                <label for="{{ $source->name }}" class="text-sm">{{ $source->name }}</label>
            </div>
            @endforeach
            @endif
            <!-- added a search input with a label -->
            <label for="q" class="block mb-2 font-bold text-gray-700">Enter a search term*:</label>
            <input type="text" name="q" id="q"
                class="block w-full px-4 py-2 mb-4 bg-white border border-gray-300 rounded-md"
                placeholder="Type something...">
            <input type="hidden" name="language" id="language" value="{{ $language }}">
            <input type="submit" value="Submit"
                class="block w-full py-2 font-bold text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600">
        </form>
    </div>
</body>

</html>
