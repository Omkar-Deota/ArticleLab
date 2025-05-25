import { useState } from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import SignUp from "../Authentication/SignUp";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const img1 = "/src/assets/picture/logo1.png";

  // Define paths corresponding to menu items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/sample" },
    { name: "About", path: "/about" },
    { name: "Contact us", path: "/contact" },
    { name: "SignUp", path: "/signup" },
  ];

  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="sticky top-0 z-50 backdrop-blur-md border-slate-700/10 w-full"
    >
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center">
          <img
            src={img1}
            alt="logo"
            className="md:h-12 h-10 w-24 md:w-28 my-1"
          />
          <p className="bg-gradient-to-r from-cyan-800 ml-4 to-orange-600 text-transparent bg-clip-text md:text-2xl text-xl font-serif font-extrabold tracking-wider">
            ArticleLab
          </p>
        </div>

        <div className="flex space-x-5 items-center absolute right-10">
          <SignUp className="" setOpen={handleChange} />

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </div>
      </div>

      <NavbarMenu className="w-1/5 left-auto right-0 items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`} className="my-7">
            <Link
              to={item.path}
              className="w-full text-black hover:text-orange-500 text-3xl"
            >
              {item.name}
            </Link>
            <hr />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
