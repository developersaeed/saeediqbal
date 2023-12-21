import LogoImage from "../img/logo.png";

function Maintenance() {
  return (
    <>
      <div className="flex flex-col justify-center  h-[100vh]">
        <div className="p-4 flex justify-center">
          <img src={LogoImage} className=" h-auto w-[200px]" alt="Image" />
        </div>
        <div className="p-4 flex justify-center">
          <p className="text-white font-sans text-center">
            This Website is Under Maintenance. Coming Soon... 
          </p>
         
        </div>

        <div className="flex justify-center">
            <p className="text-white font-sans text-sm">
              Contact at saeediqbaloffficial@gmail.com
            </p></div>
      </div>
    </>
  );
}

export default Maintenance;
