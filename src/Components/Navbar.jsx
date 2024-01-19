import React, {useState} from "react";
import LogoImage from "../img/logo.png";
import MyImage from "../img/saeediqbal.png";
import { FaWhatsapp , FaGithub,    } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav =()=> {

        setNav(!nav);
    }

    

  return (
    <>

  
      <div className="  w-full h-16 shadow-sm z-[100] ">
        <div className=" flex justify-between items-center w-full h-full px-4 md:px-10 2xl:px-16">
          <a href="https://saeediqbal.dev/" target="_self">
            <img
              src={LogoImage}
              className=" sm:h-[50px] sm:w-[160px] h-10 w-70 "
              alt="Logo Image"
            />

          </a>

          {/* Menu div */}
          <div>
            <ul className="hidden md:flex  pb-2 mt-3">
              <li className=" ml-10 text-md  hover:border-b hover:border-secondary pb-2">
               Home
              </li>
              <li className=" ml-10 text-md  hover:border-b hover:border-secondary pb-2">
                About
              </li>
              <li className=" ml-10 text-md  hover:border-b hover:border-secondary pb-2">
                Services
              </li>
              <li className=" ml-10 text-md  hover:border-b hover:border-secondary pb-2 ">
                Projects
              </li>
              <li className=" ml-10 text-md  hover:border-b hover:border-secondary pb-2 ">
                Reviews
              </li>
              <Link to="Contact-me" spy={true} smooth={true} offset={100} duration={1000} >
              <li className=" ml-10 text-md  hover:border-b hover:border-secondary pb-2">
                Contact
              </li>
              </Link >
            </ul>
            <div onClick={handleNav} className="md:hidden">
              <RiMenu3Fill size={25} className="text-white" />
            </div>
          </div>

          {/* Mobile and tablet menu */}

          {/* flex div main for menu */}
        </div>

        {/* overlay */}
        <div onClick={handleNav} className={nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/80    " : ''}>
          {/* menu div container */}

          <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%]  h-screen bg-black shadow-sm shadow-[#013309] p-6 ease-in duration-500" :
        
                'fixed left-[-100%] top-0 h-screen bg-[#013309] p-6 ease-in duration-500 '}>
            {/* Menu logo and close button div */}
            <div className=" flex justify-between w-full items-center">
              <div>
                <a href="https://saeediqbal.dev/" target="_self">
                  {/* <img
                    src={MyImage}
                    className=" h-[70px] w-[70px] rounded-full shadow-md shadow-white "
                    alt="Logo Image"
                  /> */}
                  
            <span>Saeediqbal.dev</span>
                </a>
              </div>
              <div>
              <div onClick={handleNav} className=" shadow-md rounded-full shadow-[#02510E] p-1 cursor-pointer">
                <MdOutlineClose size={25} className="text-white" />
              </div>
              </div>
            </div>

            {/* para */}

            <div className="border-b border-gray-400 my-4">
              <p className="text-sm capitalize w-[90%] md:w-[90%] py-3 text-para-color">
                Let's build your dream website
              </p>
            </div>
            <div>
              <ul className="text-white  uppercase tracking-wider py-4 flex flex-col">
                <li className="text-sm py-3">Home </li>
                <li className="text-sm py-3">About </li>
                <li className="text-sm py-3">Skills </li>
                <li className="text-sm py-3">Work </li>
                <li className="text-sm py-3">Contact </li>
              </ul>


              {/* icons */}

              <div className="pt-20">
                <p className=" uppercase tracking-wideer text-para-color"> Get In Touch</p>

                <div>

                <div className="flex justify-between items-center w-[85%] mt-4 px-0 ">
                {/* <a href="https://www.instagram.com/saeediqbal.dev/" aria-label="Instagram" target="_blank">    <div className=" rounded-xs bg-acent mx-1  rounded-full text-white shadow-md shadow-white hover:scale-110 hover:duration-200  p-[08px] hover:shadow-lg  hover:shadow-gray-800  hover:text-secondary">    <FaInstagram  size={ 20}  /> </div> </a> */}
                <a href="https://www.linkedin.com/in/saeediqbaldev" aria-label="LinedIn" target="_blank">      <div className=" rounded-xs  mx-1  rounded-full text-white bg-[#02510E]  hover:scale-110 hover:duration-200  p-[08px] hover:shadow-lg  hover:shadow-secondary hover:bg-black  hover:text-secondary">    <TbBrandLinkedin size={ 20}  />   </div></a>
                <a href="mailto:saeediqbalofficial@gmail.com"       aria-label="Gmail" target="_blank">        <div className=" rounded-xs  mx-1  rounded-full text-white bg-[#02510E]  hover:scale-110 hover:duration-200  p-[08px] hover:shadow-lg  hover:shadow-secondary hover:bg-black  hover:text-secondary">    <MdOutlineMail size={ 20}  /></div></a>
                <a href="https://wa.me/923049297788"                aria-label="WhatsApp" target="_blank">     <div className=" rounded-xs  mx-1  rounded-full text-white bg-[#02510E]  hover:scale-110 hover:duration-200  p-[08px] hover:shadow-lg  hover:shadow-secondary hover:bg-black  hover:text-secondary">    <FaWhatsapp  size={ 20}  /></div></a>
                <a href="https://github.com/saeediqbaldev"          aria-label="Github" target="_blank">       <div className=" rounded-xs  mx-1  rounded-full text-white bg-[#02510E]  hover:scale-110 hover:duration-200  p-[08px] hover:shadow-lg  hover:shadow-secondary hover:bg-black  hover:text-secondary">    <FaGithub size={ 20}  /></div></a>
            </div>
                </div>



              </div>
            </div>
          </div>

          {/* Mob Menu */}
        </div>

        {/* main div ends here */}
      </div>
    </>
  );
};

export default Navbar;
