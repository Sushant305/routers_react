import React from 'react'
import person1 from "../Images/person1.jpg";
import person2 from "../Images/person2.jpg";
import person3 from "../Images/person3.jpg";

const Reviews = () => {
  return (
    <div className='bg-[#0B1020] text-white'>
       <section className="p-4">
        <h4 className="text-pink-400 text-center text-2xl">TESTIMONIALS</h4>
        <h2 className="text-6xl font-bold text-center mt-10">Loved By Thousands </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10 p-10">

            <div
                className="bg-[#111827] p-3 rounded-2xl border-2 border-transparent hover:border-yellow-500 hover:shadow-[0_15px_35px_rgba(254,240,138,0.4)] hover:-translate-y-2   transition-all  duration-300 lasclassName-in-out p-10">
                <div className="mt-3">⭐⭐⭐⭐⭐</div>
                <div className="mt-6">
                    <p className="text-gray-400">
                        This Product transform our workflow. it's intuitive, powerful, and a must-have!
                    </p>
                </div>
                <div className="flex items-centere gap-4 mt-4 mt-12">
                    <img className="rounded-full size-20 object-cover" src={person1} alt=""/>
                    <div>
                        <h4 className="text-2xl font-bold">
                            Sarah Johnson
                        </h4>
                        <p className="text-gray-400">CEO, Innovatex</p>
                    </div>
                </div>
            </div>

            <div
                className="bg-[#111827] p-3 rounded-2xl border-2 border-transparent hover:border-yellow-500 hover:shadow-[0_15px_35px_rgba(254,240,138,0.4)] hover:-translate-y-2 transition-all  duration-300 lasclassName-in-out p-10">
                <div className="mt-3">⭐⭐⭐⭐⭐</div>
                <div className="mt-6">
                    <p className="text-gray-400">
                        Excellent Customer support and the best user Experience i've had so far
                    </p>
                </div>
                <div className="flex items-centere gap-4 mt-12">
                    <img className="rounded-full size-20 object-cover" src={person2} alt=""/>
                    <div>
                        <h4 className="text-2xl font-bold">
                            Mike Carter
                        </h4>
                        <p className="text-gray-400">CTO, DevStudio </p>
                    </div>
                </div>
            </div>

            <div
                className="bg-[#111827] p-3 rounded-2xl border-2 border-transparent  hover:border-yellow-500 hover:shadow-[0_15px_35px_rgba(254,240,138,0.4)] hover:-translate-y-2  transition-all  duration-300 lasclassName-in-out p-10">
                <div className="mt-3">⭐⭐⭐⭐⭐</div>
                <div className="mt-6">
                    <p className="text-gray-400">
                        Highly recommened to anyone looking to streaming their operations efficiently
                    </p>
                </div>
                <div className="flex items-centere gap-4 mt-12">
                    <img className="rounded-full size-20 object-cover" src={person3} alt=""/>
                    <div>
                        <h4 className="text-2xl font-bold">
                            Emily Davis
                        </h4>
                        <p className="text-gray-400">CoO, GrwthLab</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </div>
  )
}

export default Reviews
