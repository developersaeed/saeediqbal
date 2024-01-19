import LogoImage from "./Assets/Logo/logo.png";

function Maintenance() {
  return (
    <>
      <div className="flex flex-col justify-center  h-[100vh] bg-[#1B1F24]">
        <div className="p-4 flex justify-center">
          <img src={LogoImage} className=" h-auto lg:w-[15%] w-[50%]"  alt="Image" />
        
        </div>

        <div className="text-center text-white/70"> <p>Site Under Maintenance</p></div>
      </div>
    </>
  );
}

export default Maintenance;
