import LogoImage from "../img/logo.png";

function Herosection() {
  return (
    <>
      <div className=" container flex flex-row flex-wrap justify-between mt-2 mx-2 ">
        

<div className=" flex justify-around align-middle p-3 ml-24">
  
   <a  href="https://saeediqbal.dev/" target="_self">   <img src={LogoImage} className=" h-[50px] w-[150px] -mt-3" alt="Logo Image" /></a>

  </div>
<div className="w-[100vh] ">
  
  <ul className=" flex align-middle justify-evenly mt-3 ">
   
    <li className="text-white border-b-2 border-b-transparent border-primary  hover:border-b pb-3  hover:border-secondary ">About</li>
    <li className="text-white border-b-2 border-b-transparent border-primary  hover:border-b pb-3  hover:border-secondary ">Experties</li>
    <li className="text-white border-b-2 border-b-transparent border-primary  hover:border-b pb-3  hover:border-secondary ">Work</li>
    <li className="text-white border-b-2 border-b-transparent border-primary  hover:border-b pb-3  hover:border-secondary ">Reviews</li>
    <li className="text-white border-b-2 border-b-transparent border-primary  hover:border-b pb-3  hover:border-secondary ">Contact</li>

  </ul>
  

  

</div>
{/* <div className=" p-3" > 

<button className="bg-acent text-secondary p-2 px-4 border-0 shadow-md shadow-primary">Download CV </button>

</div> */}



</div>
      
    </>
  );
}

export default Herosection;
