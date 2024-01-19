import React from "react";
import Navbar from "./Navbar";
import myImage from "../img/portfolioheroimage.png";

const HeroSection = () => {
  return (
    <>
      {/* Main div */}
      <div className="h-screen w-full flex flex-col bg-[#080B09] pb-[4rem] ">
        <Navbar />

        <div className="flex justify-between gap-2 md:flex-row flex-col  md:gap-28 px-[1rem] md:px-52  mt-[2rem]">
          <div className="md:w-[50%] w-[100%] order-1 md:order-first pt-8">
            
            <div className="text-[12px] text-secondary ">Hello, I'm</div>
            <div className="text-[54px] font-semibold ">Saeed Iqbal</div>
            <div className="text-[22px] font-semibold ">Website Developer</div>
            <div className="text-[14px] py-4  ">I help businesses grow online & make their online presence stand out from the crowd. I will make a professional website for you in wordperss, shopify or React.</div>
            <div className="mt-2  "> 
              <button className=" bg-[#013309] border-[1px] border-secondary px-3 py-[05px] rounded-sm text-[14px] md:w-[30%] w-[40%] ">View Projects</button>
              
            <button className=" border-[1px] border-secondary px-3  ml-6 py-[05px] rounded-sm text-[14px] md:w-[30%] w-[40%] ">Contact Me</button>
            
            </div>
          </div>
          <div className="md:w-[50%] w-[100%] px-[1rem] md:m-8 ">
            <img src={myImage} className="h-[90%] w-[90%] md:w-[80%] md:h-[90%] "/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
