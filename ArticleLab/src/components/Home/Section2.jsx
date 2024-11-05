const img1 = "src/assets/section1.jpg";
import {Image} from "@nextui-org/react";

const Section2=()=> {
  return (
    <>
      <div className="grid grid-cols-3 gap-1 -mt-5 px-4 mb-8 ">
        <div className="z-10">
          <div className="max-w-sm  overflow-hidden hover:border-orange-500 shadow-2xl hover:shadow-orange-500/100 rounded-lg  ">
          <Image
      
      alt="img1"
      src={img1}
    />
            <p className="text-center">hfjghdfgh</p>
          </div>
        </div>
        <div className="z-10">
          <div className="max-w-sm overflow-hidden hover:border-orange-500 shadow-2xl hover:shadow-orange-500/100 rounded-lg">
          <Image
  
      alt="img1"
      src={img1}
    />
            <p className="text-center">hfjghdfgh</p>
          </div>
        </div>
        <div className="z-10">
          <div className="max-w-sm overflow-hidden  hover:border-orange-500 shadow-2xl hover:shadow-orange-500/100 rounded-lg">
          <Image
      alt="img1"
      src={img1}
    />
            <p className="text-center">hfjghdfgh</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
