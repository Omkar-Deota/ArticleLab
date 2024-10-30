import { Link } from "@nextui-org/react";

function Footer() {
  const menuItems = ["Home", "Services", "About", "Contact us", "Log Out"];
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-1 mx-auto mt-20 text-center ">
        <div className="block">
          <div className="text-center mb-5 ">
            <h1 className="text-5xl text-orange-500 font-extrabold">
              ABOUT US
            </h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>

        <div>
          <p className="text-left">Fratures</p>
          {menuItems.map((item, index) => (
            <div key={`${item}-${index}`} className="text-xl mt-2 text-center">
              <Link className="w-full" href="#" size="lg">
                {item}
              </Link>
            </div>
          ))}
        </div>

        <div>
          <span>Follow us</span>
          <div> </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
