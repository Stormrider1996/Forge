<x-app-layout>
    <h1 class="mb-8 text-3xl font-bold">Registered Users</h1>
    <table class="w-full border border-collapse">
        <thead>
            <tr>
                <th class="px-6 py-3 text-sm font-semibold text-left uppercase bg-gray-200 border-b border-gray-300">
                    Id</th>
                <th class="px-6 py-3 text-sm font-semibold text-left uppercase bg-gray-200 border-b border-gray-300">
                    Name</th>
                <th class="px-6 py-3 text-sm font-semibold text-left uppercase bg-gray-200 border-b border-gray-300">
                    Email</th>
                <th class="px-6 py-3 text-sm font-semibold text-left uppercase bg-gray-200 border-b border-gray-300">
                    Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($users as $user)
            <tr class="hover:bg-gray-100">
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{{ $user->id }}</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{{ $user->name }}</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{{ $user->email }}</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    <a href="{{ route('users.edit', $user->id) }}"
                        class="mr-4 text-blue-500 hover:text-blue-700">Edit</a>
                    <a href="{{ route('users.delete', $user->id) }}" class="text-red-500 hover:text-red-700">Delete</a>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
    {{ $users->links() }}
</x-app-layout>