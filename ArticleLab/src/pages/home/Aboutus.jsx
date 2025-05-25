import { ABOUT_US, FEATURE_DATA, PROPERTIES_DATA } from "../../utils/constant";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* what we offer */}
      <div className="bg-slate-100 ">
        <div className="text-center mb-5 my-5">
          <h1 className="md:text-5xl text-4xl text-orange-500 font-extrabold ">
            WHAT WE OFFER
          </h1>
          <p className="mt-2 w-1/2 text-center justify-center mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="flex max-md:flex-col justify-center items-center gap-3">
          {FEATURE_DATA.map((item) => (
            <div
              key={item.id}
              className="  mb-5 shadow-2xl hover:shadow-slate-400  rounded-2xl bg-white "
            >
              <img src={item.image} alt="" className="rounded-2xl h-40 w-60" />
              <p className="text-black text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* About us */}
      <div className="flex justify-center items-center gap-4 flex-col px-10 ">
        <h1 className="md:text-5xl text-4xl text-orange-500 font-extrabold">
          ABOUT US
        </h1>
        {ABOUT_US}
      </div>

      {/* Card 1 */}
      <div className="grid max-md:grid-cols-2 grid-cols-4 gap-6 p-8 ">
        {PROPERTIES_DATA.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center"
          >
            <div className={`${item.color} size-20 rounded-xl `}> </div>
            <p className=" mt-5 text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
