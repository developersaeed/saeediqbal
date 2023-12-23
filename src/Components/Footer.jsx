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
              className="h-auto w-[250px] -mt-3"
              alt="Logo Image"
            />
          </a>
        </div>

        {/* logo ends here */}
        <div className="flex justify-center p-4">
          <span className=" text-para-color text-lg font-bold capitalize text-center">
   
            Ignite your online success with <br />bespoke website solutions!
          </span>
        </div>
        <div className="flex justify-center p-4">
          

          {/* social icons */}

            <div className="flex justify-around">
                <a href="https://www.instagram.com/saeediqbal.dev/" aria-label="Instagram" target="_blank">    <div className="mx-3 rounded-xs bg-transparent border-[1px] border-white  p-[07px] hover:shadow-lg  hover:shadow-secondary  hover:border-secondary hover:text-secondary">    <FaInstagram  size={30}  /> </div> </a>
                <a href="https://www.linkedin.com/in/saeediqbaldev" aria-label="LinedIn" target="_blank">    <div className="mx-3 rounded-xs bg-transparent border-[1px] border-white  p-[07px] hover:shadow-lg  hover:shadow-secondary  hover:border-secondary hover:text-secondary">    <TbBrandLinkedin size={30}  />   </div></a>
                <a href="mailto:saeediqbalofficial@gmail.com"       aria-label="Gmail" target="_blank">    <div className="mx-3 rounded-xs bg-transparent border-[1px] border-white  p-[07px] hover:shadow-lg  hover:shadow-secondary  hover:border-secondary hover:text-secondary">    <MdOutlineMail size={30}  /></div></a>
                <a href="https://wa.me/923049297788"                aria-label="WhatsApp" target="_blank">    <div className="mx-3 rounded-xs bg-transparent border-[1px] border-white  p-[07px] hover:shadow-lg  hover:shadow-secondary  hover:border-secondary hover:text-secondary">    <FaWhatsapp  size={30}  /></div></a>
                <a href="https://github.com/saeediqbaldev"          aria-label="Github" target="_blank">    <div className="mx-3 rounded-xs bg-transparent border-[1px] border-white  p-[07px] hover:shadow-lg  hover:shadow-secondary  hover:border-secondary hover:text-secondary">    <FaGithub size={30}  /></div></a>
            </div>
        </div>
        <div className="flex justify-center p-4 text-sm text-para-color">
            
            <div className="text-center  "> Handicrafted by Me &#10084;&#65039;  &#169; twentytwentyfour - All rights reserved </div>
        
        </div>
        <div className="flex justify-center p-4 text-sm text-para-color"><div> </div>
        
        </div>
        
        {/* Main div end here */}
      </div>
    </>
  );
}

export default Footer;
