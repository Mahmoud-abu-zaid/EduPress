"use client";

export default function Auth() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Email or username*" className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <div className="relative">
              <input type="password" placeholder="Password*" className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="accent-orange-500" /> Remember me
            </label>
            <button type="button" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full py-3">
              Login
            </button>
            <a href="#" className="text-sm text-black hover:underline">
              Lost your password?
            </a>
          </form>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Email*" className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="Username*" className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <div className="relative">
              <input type="password" placeholder="Password*" className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="relative">
              <input type="password" placeholder="Confirm Password*" className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <button type="button" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full py-3">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
