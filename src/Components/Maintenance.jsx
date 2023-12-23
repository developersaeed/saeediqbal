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
            Website Under Maintenance. Coming Soon...
          </p>
        </div>

        <div className="flex justify-center">
          <p className="text-white font-sans text-sm">
            Contact at saeediqbalofficial@gmail.com
           
          </p>
        </div>
        <div className="container bg-slate-500">

<div className="bg-green-300">01 Logo</div>
<div className="bg-blue-300">02 Menu </div>
<div className="bg-red-300"> Icons</div>



</div>
      </div>
    </>
  );
}

export default Maintenance;
