import React from 'react'

export default function Registration() {
  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <h1 class="text-3xl font-bold mb-8">Registration</h1>
  <form class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="First Name"
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName">
        Last Name
      </label>
      <input
        type="text"
        id="lastName"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Last Name"
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="mobileNumber">
        Mobile Number
      </label>
      <input
        type="text"
        id="mobileNumber"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Mobile Number"
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Email"
        required
      />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="picture">
        Picture
      </label>
      <input
        type="file"
        id="picture"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Register
      </button>
    </div>
  </form>
</div>

  )
}
