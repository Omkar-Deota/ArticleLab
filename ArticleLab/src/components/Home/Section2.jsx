const img1 = "src/assets/section1.jpg";
import { Image } from "@nextui-org/react";

const Section2 = () => {
  return (
    <section className="flex justify-center items-center ">
      <div className="grid grid-cols-3 gap-10 -mt-5 px-4 mb-20">
        <div className="z-10">
          <div className="max-w-sm  overflow-hidden shadow-2xl hover:shadow-slate-400 rounded-lg  ">
            <Image alt="img1" src={img1} />
            <p className="text-center">hfjghdfgh</p>
          </div>
        </div>
        <div className="z-10">
          <div className="max-w-sm overflow-hidden  shadow-2xl hover:shadow-slate-400 rounded-lg">
            <Image alt="img1" src={img1} />
            <p className="text-center">hfjghdfgh</p>
          </div>
        </div>
        <div className="z-10">
          <div className="max-w-sm overflow-hidden   shadow-2xl hover:shadow-slate-400 rounded-lg">
            <Image alt="img1" src={img1} />
            <p className="text-center">hfjghdfgh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
