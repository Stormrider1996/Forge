<x-app-layout>
    <x-slot name="header">
        <h2 class="text-xl font-semibold leading-tight text-gray-800">
            {{ __('All news') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    {{ __("Choose your news!") }}
                </div>
            </div>
        </div>
    </div>


    <form action="{{ route('sources') }}" class="p-8 bg-gray-100 rounded-lg shadow-lg">
        <label for="country" class="block mb-2 font-bold text-gray-700">Choose a country:</label>
        <select name="country" id="country"
            class="block w-full px-4 py-2 mb-4 bg-white border border-gray-300 rounded-md">
            @foreach($countries as $initial => $name)
            <option value="{{ $initial }}">{{ $name }}</option>
            @endforeach
        </select>
        <label for="language" class="block mb-2 font-bold text-gray-700">Choose a language:</label>
        <select name="language" id="language"
            class="block w-full px-4 py-2 mb-4 bg-white border border-gray-300 rounded-md">
            @foreach($languages as $initial => $name)
            <option value="{{ $initial }}">{{ $name }}</option>
            @endforeach
        </select>
        <label for="category" class="block mb-2 font-bold text-gray-700">Choose a category:</label>
        <select name="category" id="category"
            class="block w-full px-4 py-2 mb-4 bg-white border border-gray-300 rounded-md">
            @foreach($categories as $category)
            <option value="{{ $category }}">{{ $category }}</option>
            @endforeach
        </select>
        <input type="submit" value="Submit"
            class="block w-full py-2 font-bold text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600">
    </form>
</x-app-layout>
