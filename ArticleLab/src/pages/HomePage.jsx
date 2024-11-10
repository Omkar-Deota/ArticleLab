import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
const img1 = "/src/assets/picture/section1.jpg";
import features from "../utils/constant";

import { Button, Input } from "@nextui-org/react";
import { Search } from "../assets/icons/Search";

const HomePage = () => {
  return (
    <>
      <Nav />
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        <div className="relative z-10 text-center p-8 rounded-full">
          <h2 className="text-4xl text-white font-bold font-sans tracking-widest ">
            {" "}
            Track your consignment
          </h2>
          <div className="flex my-6 justify-center relative">
            <Input
              type="text"
              placeholder="Enter order number"
              className="h-16 w-3/4 placeholder:text-center text-lg placeholder:font-bold "
              endContent={<Search className="absolute right-4" />}
            />

            <Button radius="lg" className=" bg-yellow-400 font-bold ml-4">
              Track Order
            </Button>
          </div>
        </div>
      </div>
      {/* cards */}

      <section className="flex justify-center items-center">
        {features.map((item, index) => (
          <div
            key={index}
            className="-mt-20 z-20 mb-5 shadow-2xl hover:shadow-slate-400 mx-4 rounded-2xl bg-white h-64"
          >
            <img src={item.image} alt="image" className="rounded-2xl h-56" />
            <div className="text-center">{item.title}</div>
          </div>
        ))}
      </section>

      {/* what we offer */}
      <div className="bg-slate-100 mb-10">
        <div className="text-center mb-5 my-5">
          <h1 className="text-5xl text-orange-500 font-extrabold">
            WHAT WE OFFER
          </h1>
          <p className="mt-2 w-1/2 text-center justify-center mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto mt-20 h-60 ">
          {/* Card 1 */}
          <div className="bg-white p-4 mx-2 shadow-2xl hover:shadow-slate-500 rounded-lg">
            <h1>hello</h1>
            <p>jhfjdfjdgfjfbhjbjhbgfjukgbjukgbg</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-4 mx-2  shadow-2xl hover:shadow-slate-500 rounded-lg">
            <h1>hello</h1>
            <p>jhfjdfjdgfjfbhjbjhbgfjukgbjukgbg</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-4 mx-2  shadow-2xl hover:shadow-slate-500 rounded-lg">
            <h1>hello</h1>
            <p>jhfjdfjdgfjfbhjbjhbgfjukgbjukgbg</p>
          </div>
        </div>
      </div>
      <div className="mb-10  ">
        <div className="text-center mb-5 ">
          <h1 className="text-5xl text-orange-500 font-extrabold">ABOUT US</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <img src={img1} alt="section4" />
        <div className="my-8 w-4/5 mx-auto">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 mx-auto h-40">
              {/* Card 1 */}
              <div className="bg-white  flex-row-reverse justify-items-center ">
                <div className="bg-slate-100 h-20 w-20 rounded-xl "></div>
                <p className="text-center mt-5 ">
                  Reach 99.5% of Indian population across 18,500 pin codes
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white  flex-row-reverse justify-items-center ">
                <div className="bg-yellow-100 h-20 w-20 rounded-xl "></div>
                <p className="text-center mt-5 ">
                  Reach 99.5% of Indian population across 18,500 pin codes
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white  flex-row-reverse justify-items-center ">
                <div className="bg-green-100 h-20 w-20 rounded-xl "></div>
                <p className="text-center mt-5 ">
                  Reach 99.5% of Indian population across 18,500 pin codes
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-white  flex-row-reverse justify-items-center ">
                <div className="bg-blue-100 h-20 w-20 rounded-xl "></div>
                <p className="text-center mt-5 ">
                  Reach 99.5% of Indian population across 18,500 pin codes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
