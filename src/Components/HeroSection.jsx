import React from "react";
import Navbar from "./Navbar";
import myImage from "../img/portfolioheroimage.png";

const HeroSection = () => {
  return (
    <>
      {/* Main div */}
      <div className="h-screen w-full flex flex-col bg-[#080B09]">
        <Navbar />

        <div className="flex justify-between gap-2 md:flex-row flex-col  md:gap-28 px-[1rem] md:px-52 mt-[5rem] ">
          <div className="md:w-[50%] w-[100%] order-1 md:order-first">
            
            <div className="text-[12px] text-secondary ">Hello, I'm</div>
            <div className="text-[24px] font-semibold">Saeed Iqbal</div>
            <div className="text-[16px] font-semibold">Website Developer</div>
            <div>I help businesses grow online and make their online presence stand out from the crowd. I will make professional website for you in wordperss, shopify or react js</div>
            <div > <button className="bg-secondary px-3 py-1 rounded-sm">Contact Now</button></div>
          </div>
          <div className="md:w-[50%] w-[100%] px-[1rem]  ">
            <img src={myImage} className="h-[90%] w-[90%] md:w-[80%] md:h-[100%] "/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
