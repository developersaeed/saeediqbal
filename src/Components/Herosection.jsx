import LogoImage from "../img/logo.png";

function Herosection() {
  return (
    <>
      <div className=" container flex flex-row flex-wrap justify-between mt-2 mx-2 ">
        

<div className=" flex justify-center align-middle p-3">
  
   <a  href="https://saeediqbal.dev/" target="_self">   <img src={LogoImage} className="h-auto w-[170px] -mt-3" alt="Logo Image" /></a>

  </div>
<div className="w-[100vh] ">
  
  <ul className=" flex align-middle justify-evenly mt-1 ">
   
    <li className="text-white border-t-2 border-primary  hover:border-t-2 hover:border-secondary   pt-3">About</li>
    <li className="text-white border-t-2 border-primary  hover:border-t-2 hover:border-secondary pt-3">Experties</li>
    <li className="text-white border-t-2 border-primary  hover:border-t-2 hover:border-secondary pt-3">Work</li>
    <li className="text-white border-t-2 border-primary  hover:border-t-2 hover:border-secondary pt-3">Reviews</li>
    <li className="text-white border-t-2 border-primary  hover:border-t-2 hover:border-secondary pt-3">Contact</li>

  </ul>
  

  

</div>
<div className=" p-3" > 

<button className="bg-secondary text-white p-2 px-4 border-0 shadow-md shadow-primary">Download CV </button>

</div>



</div>
      
    </>
  );
}

export default Herosection;
