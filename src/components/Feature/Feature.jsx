import React from 'react'
import employee from "../Images/employeeImage.png";

const Feature = () => {
  return (
    <div className='bg-[#0B1020] text-white'>
        <section  className='p-4 pt-22'>
        <div className="grid grid-cols-1 xl:grid-cols-3 auto-rows-[150px] gap-6 p-3">

            <div
                className=" flex  rounded-xl xl:col-span-2 xl:row-span-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4">
                <div className="w-full lg:1/2">
                    <div>
                        <div className="size-15 flex justify-center items-center rounded-2xl bg-purple-400">🚀</div>
                        <h2 className="font-bold mt-3 text-2xl ">AI-Powered Automation</h2>
                        <p className="text-gray-400 mt-4"> AI handle repetitive tasks while you focus on what truly
                            matters. Smart integration, task automation, and real-time
                            workflows.
                        </p>
                        <div className="flex justify-center items-center gap-3 mt-14">
                            <div className="px-4 py-1 rounded-full bg-white/10 text-gray-200 border-2 border-gray-300">Smart
                                Animation</div>
                            <div className="px-4 py-1 rounded-full bg-white/10 text-gray-200 border-2 border-gray-300">AI
                                Process</div>
                            <div className="px-4 py-1 rounded-full bg-white/10 text-gray-200 border-2 border-gray-300">
                                Workflow</div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:1/2">

                    <img className="w-full h-full rounded-2xl size-5" src={employee} alt=""/>

                </div>
            </div>

            <div
                className="bg-[#111827] p-3 rounded-xl border border-white/10 hover:border-purple-500/60 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(139,92,246,0.2)] transition-all duration-300 ease-in-out">

                <div
                    className="size-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex justify-center items-center mb-2">
                    <i className="fa-solid fa-bolt text-orange-400"></i>
                </div>
                <h3 className="mb-1">Lightning Fast</h3>
                <p className="text-gray-400">Experience blazing-fast performance with optimized architecture and instant
                    response times</p>
            </div>

            <div
                className="bg-[#111827] p-3 rounded-xl border border-white/10 hover:border-blue-200/60 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(139,92,246,0.2)] transition-all duration-300 ease-in-out">

                <div
                    className="size-12 rounded-xl bg-gradient-to-br from-green-300/20 to-green-500/20 flex justify-center items-center mb-2">
                    <i className="fa-solid fa-shield-halved text-white"></i>
                </div>
                <h3 className="mb-1">Bank-level Security</h3>
                <p className="text-gray-400">Your Data is Protected with end-to-end encryption and enterprise-grade security
                    standard</p>

            </div>

            <div
                className="bg-[#111827] p-3 rounded-xl border border-white/10  hover:border-yellow-300/60 hover:-translate-y-2  hover:shadow-[0_15px_35px_rgba(139,92,246,0.2)] transition-all duration-300 ease-in-out">
                <div
                    className="size-12 rounded-xl bg-gradient-to-br from-orange-300/20 to-red-500/20 flex justify-center items-center mb-2">
                    <i className="fa-solid fa-users text-yellow-400"></i>
                </div>
                <h3 className="mb-1">Team collaboration</h3>
                <p className="text-gray-400">Built for teams to collaborate seamlessly with shared workspace and smart
                    communication</p>
            </div>

            <div
                className="bg-[#111827] p-3 rounded-xl border border-white/10 hover:border-red-500/60 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(139,92,246,0.2)] transition-all duration-300 ease-in-out">
                <div
                    className="size-12 rounded-xl bg-gradient-to-br from-blue-200/20 to-blue-500/20 flex justify-center items-center mb-2">
                    <i className="fa-solid fa-rotate text-white"></i>
                </div>
                <h3 className="mb-1">Real-time Sync</h3>
                <p className="text-gray-400">Teams stay aligned with real-time synchronication across all devices and
                    platforms </p>
            </div>

            <div
                className="bg-[#111827] p-3 rounded-xl border border-white/10 hover:border-green-500/60 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(139,92,246,0.2)] transition-all duration-300 ease-in-out">
                <div
                    className="size-12 rounded-xl bg-gradient-to-br from-pink-200/20 to-purple-500/20 flex justify-center items-center mb-2">
                    <i className="fa-solid fa-star text-white"></i>
                </div>
                <h3 className="mb-1">Advanced-Analytics </h3>
                <p className="text-gray-400">Get deep insights with Advanced-analytics and custom reports to make
                    date-driven decision </p>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Feature
