import React from 'react';

function About() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8">
      <div className="md:w-1/3">
        <img src="/images/landing/levels.jfif" className="w-full rounded-lg" alt="" />
      </div>
      <div className="md:w-2/3">
        <div className="mb-4">
 
          <div className="text-sm  w-20 text-center  py-0.5 rounded-full text-white bg-[#5E9CEF] hover:bg-[#5e9defdf] ">About Us</div>
         </div>
        <h1 className="text-3xl font-bold mb-4">What are We</h1>
        <p className="text-gray-600 mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptas iure veritatis!
        </p>
          <button            className="bg-[#F48299] hover:bg-[#f48299da] text-white active:scale-95 rounded-md px-7 h-11 border-none cursor-pointer transition-all">
          Contactez nous
             </button>
         
                       
      </div>
    </div>
  );
}

export default About;