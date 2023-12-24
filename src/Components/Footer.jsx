import LogoImage from "../img/logo.png";
import { FaWhatsapp , FaInstagram , FaGithub,    } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { PiLinkedinLogo } from "react-icons/pi";
import { TbBrandLinkedin } from "react-icons/tb";
function Footer() {
  return (
    <>
      {/* Main div */}
      <div className="flex justify-center flex-col align-middle  py-12   border-t-[1px] border-t-acent ">
        <div className="flex justify-center p-4 ">
          <a href="https://saeediqbal.dev/" target="_self">
        
            <img
              src={LogoImage}
              className="h-[50px] w-[150px] -mt-3"
              alt="Logo Image"
            />
          </a>
        </div>

        {/* logo ends here */}
        <div className="flex justify-center p-4">
          <h4 className=" text-center">
   
            Ignite your online success with <br />bespoke website solutions!
          </h4>
        </div>
        <div className="flex justify-center">
          

          {/* social icons */}

            <div className="flex justify-around ">
                <a href="https://www.instagram.com/saeediqbal.dev/" aria-label="Instagram" target="_blank">    <div className="mx-3 rounded-xs bg-acent  rounded-full text-secondary shadow-md shadow-black hover:scale-125 hover:duration-300  p-[10px] hover:shadow-md  hover:shadow-black  hover:text-secondary">    <FaInstagram  size={20}  /> </div> </a>
                <a href="https://www.linkedin.com/in/saeediqbaldev" aria-label="LinedIn" target="_blank">      <div className="mx-3 rounded-xs bg-acent  rounded-full text-secondary shadow-md shadow-black hover:scale-125 hover:duration-300  p-[10px] hover:shadow-md  hover:shadow-black  hover:text-secondary">    <TbBrandLinkedin size={20}  />   </div></a>
                <a href="mailto:saeediqbalofficial@gmail.com"       aria-label="Gmail" target="_blank">        <div className="mx-3 rounded-xs bg-acent  rounded-full text-secondary shadow-md shadow-black hover:scale-125 hover:duration-300  p-[10px] hover:shadow-md  hover:shadow-black  hover:text-secondary">    <MdOutlineMail size={20}  /></div></a>
                <a href="https://wa.me/923049297788"                aria-label="WhatsApp" target="_blank">     <div className="mx-3 rounded-xs bg-acent  rounded-full text-secondary shadow-md shadow-black hover:scale-125 hover:duration-300  p-[10px] hover:shadow-md  hover:shadow-black  hover:text-secondary">    <FaWhatsapp  size={20}  /></div></a>
                <a href="https://github.com/saeediqbaldev"          aria-label="Github" target="_blank">       <div className="mx-3 rounded-xs bg-acent  rounded-full text-secondary shadow-md shadow-black hover:scale-125 hover:duration-300  p-[10px] hover:shadow-md  hover:shadow-black  hover:text-secondary">    <FaGithub size={20}  /></div></a>
            </div>
        </div>
        <div className="flex justify-center p-4 text-sm text-para-color">
            
            <h6 className="text-center  "> Handcrafted by Me &#10084;&#65039;  &#169; twentytwentyfour - All rights reserved </h6>
        
        </div>
     
        
        {/* Main div end here */}
      </div>
    </>
  );
}

export default Footer;
