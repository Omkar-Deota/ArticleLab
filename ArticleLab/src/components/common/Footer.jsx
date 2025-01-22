import { Link } from "@nextui-org/react";

const Footer = () => {
  const menuItems = ["Home", "Services", "About", "Contact us", "Log Out"];
  return (
    <div className=" bg-neutral-500 h-auto ">
      <div className="grid md:grid-cols-3  mx-auto  text-center">
        <div className=" mb-5 flex-row items-center justify-center  ">
          <h1 className="text-2xl text-orange-600 font-extrabold ">ABOUT US</h1>
          <p className=" px-6 text-white">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="">
          <p className=" text-2xl font-extrabold text-orange-600">Fratures</p>
          {menuItems.map((item, index) => (
            <div key={`${item}-${index}`} className="text-xl">
              <Link
                className="hover:text-orange-500 text-white"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-2xl text-orange-600 font-extrabold mb-7">
          <span>Follow us</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
