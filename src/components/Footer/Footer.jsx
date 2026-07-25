import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" bg-black">
        <div className="grid grid-cols-1 xl:grid-cols-4 p-12">
          <div>
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-400 size-15 rounded-2xl flex justify-center items-center text-2xl">
                🚀
              </div>
              <h2 className="font-bold text-2xl text-white">FlowApp</h2>
            </div>
            <p className="mt-4 text-gray-500">
              Streamline Your Workflow and boost Productivity with FlowApp
            </p>

            <div className="flex justify-center items-center gap-3 p-3">
              <div className="size-12 bg-gray-50/10 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-blue-300 transition-all duration-300 ease-in-out">
                <i className="fa-brands fa-twitter"></i>
              </div>

              <div className="size-12 bg-gray-50/10 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 ease-in-out">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>

              <div className="size-12 bg-gray-50/10 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-purple-500 transition-all duration-300 ease-in-out">
                <i className="fa-brands fa-github"></i>
              </div>
            </div>
          </div>

          <div>
            <h2 className=" text-xl font-bold mb-3">Product</h2>
            <p className="text-gray-400">Feature</p>
            <p className="text-gray-400">Pricing</p>
            <p className="text-gray-400">Integrations</p>
            <p className="text-gray-400">Changlong</p>
            <p className="text-gray-400">Roadmap</p>
          </div>

          <div>
            <h2 className=" text-xl font-bold mb-3">Company</h2>
            <p className="text-gray-400">About Us</p>
            <p className="text-gray-400">Blog</p>
            <p className="text-gray-400">Careers</p>
            <p className="text-gray-400">Press</p>
            <p className="text-gray-400">Contact</p>
          </div>

          <div>
            <h2 className=" text-xl font-bold mb-3">Legal</h2>
            <p className="text-gray-400">Privacy</p>
            <p className="text-gray-400">Terms</p>
            <p className="text-gray-400">Cookies</p>
            <p className="text-gray-400">Licenses</p>
          </div>
        </div>
        <div className="text-gray-500 text-center p-5">
          &copy; 2026 FlowApp . All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
