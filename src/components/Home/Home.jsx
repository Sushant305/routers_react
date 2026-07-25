import React from "react";
import employee from "../Images/employeeImage.png";
import gridPattern from "../Images/grid-pattern.png";
const Home = () => {
  return (
    <div className="bg-[#0B1020] text-white ">
      <section
        style={{ backgroundImage: `url(${gridPattern})` }}
        className="relative overflow-hidden min-h-screen bg-[#0B1020] bg-[url{grid-pattern}] bg-cover bg-center bg-no-repeat "
      >
        <div className="absolute  w-[650px] h-[650px] rounded-full bg-blue-700/20 blur-[120px] left-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg-1/2">
              <div className="bg-white/5 p-3 backdrop-blur-2xl border border-white/20 rounded-2xl">
                <span className="inline-block size-3 bg-green-500 rounded-full animate-pulse mr-3 "></span>
                <span> Now with ai powered Features</span>
                <span className="bg-gradie bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl py-1 px-2 ml-2">
                  NEW
                </span>
              </div>

              <h2 className="font-bold text-6xl mt-20 tracking-[2px]">
                Build Products
                <span className=" tracking-[2px] block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600">
                  Users love
                </span>
              </h2>

              <p className="text-gray-400 mt-6">
                The all-in-one platform for team to collaborate, design and ship
                amazing products 10x Faster
              </p>

              <div className="flex flex-col lg:flex-row gap-5 mt-8 justify-center lg:justify-start ">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-8 py-3 ">
                  Start Free Trial
                </button>

                <button className="flex justify-center items-center gap-3 border-2 border-white/50 rounded-full px-8 py-3 hover:bg-white hover:text-black ">
                  <span>
                    <i className="fa-solid fa-play"></i>
                  </span>
                  <p>Watch Demo</p>
                </button>
              </div>

              <div className="flex mt-10">
                <div className="flex -space-x-2">
                  <img
                    className="h-10 w-10 rounded-full border-[#0B1020]"
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="User"
                  />

                  <img
                    className="h-10 w-10 rounded-full border-[#0B1020]"
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt="User"
                  />

                  <img
                    className="h-10 w-10 rounded-full border-[#0B1020]"
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt="User"
                  />

                  <div className="size-10 rounded-full bg-purple-500 flex justify-center items-center">
                    +12
                  </div>
                </div>

                <div className="flex flex-col ml-3">
                  <span>⭐⭐⭐⭐</span>
                  <span className="">Trusted by 2,000+ teams worldwide</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:1/2 relative flex justify-center items-center">
              <div>
                <img
                  className="rounded-2xl max-w-xl object-cover"
                  src={employee}
                  alt=""
                />
              </div>

              <div className="absolute -bottom-6 -left-8  flex justify-center items-center gap-3 bg-white/10 backdrop-blur-xl border-2 border-white px-4 py-3 rounded-2xl animate-pulse">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <i className="fa-solid fa-check text-white text-sm"></i>
                </div>

                <div>
                  <p>Task completed</p>
                  <p className=" text-sm">Project submitted</p>
                </div>
              </div>

              <div className="absolute top-1/2 -right-30  flex justify-center items-center gap-3 bg-white/10 backdrop-blur-xl border-2 border-white px-4 py-3 rounded-2xl animate-bounce">
                <div className="flex -space-x-2">
                  <div className="size-6 bg-purple-600 rounded-full"></div>
                  <div className="size-6 bg-pink-600 rounded-full"></div>
                  <div className="size-6 bg-blue-600 rounded-full"></div>
                </div>

                <div>
                  <p>Task completed</p>
                  <p className=" text-sm">Project submitted</p>
                </div>
              </div>

              <div className="absolute -top-6 -right-8  flex justify-center items-center gap-3 bg-white/10 backdrop-blur-xl border-2 border-white px-4 py-3 rounded-2xl animate-pulse">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
                  <i className="fa-solid fa-arrow-trend-up text-white text-xl"></i>
                </div>

                <div>
                  <p>+127%</p>
                  <p className=" text-sm">Productivity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
