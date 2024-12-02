import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row h-full bg-black text-white py-10 md:pl-52">

      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-extrabold pt-10 md:pt-32">
          I am Ali Yousuf
        </h1>
        <p className="text-xl md:text-3xl pt-6 md:pt-12">
          A Frontend Developer
        </p>
        <div className="py-4 mt-6 bg-slate-500 rounded-md px-6 md:mx-16">
          <a href="https://github.com/muhammadali304?tab=repositories" target="_blank" rel="noopener noreferrer">
            <button className="text-white font-medium">View Github Repos</button>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 ">
        <img
          className="rounded-full border-4 border-solid border-orange-500 md:mb-20"
          src="Profile Picture.jpg"
          alt="Profile Picture"
          width={300}
          height={300}
        />
      </div>

    </div>
  );
};

export default Hero;
