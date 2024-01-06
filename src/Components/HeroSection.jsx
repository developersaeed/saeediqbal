import React from "react";
import Navbar from "./Navbar";
import myImage from "../img/portfolioheroimage.png";

const HeroSection = () => {
  return (
    <>
      {/* Main div */}
      <div className="h-screen w-full flex flex-col bg-[#080B09]">
        <Navbar />

        <div className="flex justify-between gap-2 md:flex-row flex-col  md:gap-28 px-[1rem] md:px-52  mt-[2rem]">
          <div className="md:w-[50%] w-[100%] order-1 md:order-first pt-[4rem]">
            
            <div className="text-[12px] text-secondary ">Hello, I'm</div>
            <div className="text-[54px] font-semibold ">Saeed Iqbal</div>
            <div className="text-[22px] font-semibold ">Website Developer</div>
            <div className="text-[14px] py-4  ">I help businesses grow online and make their online presence stand out from the crowd. I will make professional website for you in wordperss, shopify or react js. So, what's holding you back? let's build your dream website together</div>
            <div className="mt-4"> 
              <button className=" bg-secondary border-[1px] border-secondary px-3 py-[08px] rounded-sm text-[14px] md:w-[30%] w-[40%] ">View Projects</button>
              
            <button className=" border-[1px] border-secondary px-3  ml-6 py-[08px] rounded-sm text-[14px] md:w-[30%] w-[40%] ">Contact Me</button>
            
            </div>
          </div>
          <div className="md:w-[50%] w-[100%] px-[1rem] md:m-8 ">
            <img src={myImage} className="h-[100%] w-[90%] md:w-[100%] md:h-[100%] "/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
