<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="font-sans antialiased">
    <div class="min-h-screen bg-gray-100">
        @include('layouts.navigation')

        <!-- Page Heading -->
        @if (isset($header))
        <header class="bg-white shadow">
            <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {{ $header }}
            </div>
        </header>
        @endif

        <!-- Page Content -->
        <main>
            {{ $slot }}
        </main>
    </div>
</body>

</html>

<script>
    // Get all the form elements
    var forms = document.querySelectorAll('form');
    // Loop through each form element
    forms.forEach(function(form) {
    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Get the submit button of the form
        var submitButton = form.querySelector('[type="submit"]');
        // Disable the submit button
        submitButton.setAttribute('disabled', 'disabled');
        // The rest of your code
        // ...
        // Set a timeout to enable the submit button after 2 seconds
        setTimeout(function() {
        submitButton.removeAttribute('disabled');
        }, 2000);
    });
    });
</script>


