import React from 'react'
import gridPattern from "../Images/grid-pattern.png";

const Login = () => {
  return (
    <div >
        <section
      style={{ backgroundImage: `url(${gridPattern})` }}
      className="relative min-h-screen overflow-hidden bg-[#0B1020] bg-cover bg-center flex items-center justify-center px-6 pt-25 p-25"
    >
      <div className="absolute w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] top-10 left-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">

        <div className="hidden lg:flex flex-col justify-center p-12">

          <div className="flex items-center gap-3 mb-8">
            <div className="size-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600"></div>

            <h1 className="text-4xl font-bold text-white">
              FlowApp
            </h1>
          </div>

          <h2 className="text-5xl font-bold leading-tight text-white">
            Welcome
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Back!
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-8">
            Sign in to continue managing your projects, collaborate with your
            team and build amazing products.
          </p>

          <div className="mt-10 flex gap-3">
            <div className="size-3 rounded-full bg-green-500 animate-pulse"></div>

            <p className="text-gray-300">
              Trusted by 2,000+ teams worldwide
            </p>
          </div>
        </div>

        <div className="p-10 lg:p-14">

          <h2 className="text-4xl font-bold text-white text-center">
            Login
          </h2>

          <p className="text-gray-400 mt-2 mb-8 text-center">
            Enter your credentials below
          </p>

   
          <div className="mb-5">
            <label className="text-gray-300 text-sm">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-blue-500"
            />
          </div>


          <div className="mb-3">
            <label className="text-gray-300 text-sm">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-between items-center text-sm mt-3">

            <label className="flex items-center gap-2 text-gray-400">

              <input
                type="checkbox"
                className="accent-blue-500"
              />

              Remember me
            </label>

            <a
              href="#"
              className="text-blue-400 hover:text-blue-300"
            >
              Forgot Password?
            </a>

          </div>

          <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-4 text-lg font-semibold text-white transition hover:scale-[1.02]">
            Login
          </button>

          <div className="relative my-8">
            <hr className="border-white/10" />

            <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111827] px-4 text-gray-500">
              OR
            </span>
          </div>


          <div className="grid grid-cols-2 gap-4">

            <button className="rounded-xl border border-white/20 bg-white/5 py-3 text-white hover:bg-white/10 transition">
              <i className="fa-brands fa-google mr-2"></i>
              Google
            </button>

            <button className="rounded-xl border border-white/20 bg-white/5 py-3 text-white hover:bg-white/10 transition">
              <i className="fa-brands fa-github mr-2"></i>
              GitHub
            </button>

          </div>

          <p className="mt-8 text-center text-gray-400">
            Don't have an account?
            <a
              href="#"
              className="ml-2 text-blue-400 hover:text-blue-300"
            >
              Sign Up
            </a>
          </p>

        </div>
      </div>
    </section>
    </div>
  )
}

export default Login
