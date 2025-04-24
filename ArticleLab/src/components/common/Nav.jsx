import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import SignUp from "../Authentication/SignUp";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [showModal, setShowModal] = useState(false);

  const img1 = "/src/assets/picture/logo1.png";
  const menuItems = ["Home", "Services", "About", "Contact us", "SignUp"];
  const handleChange = () => {
    setOpen(!open);
  };
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="sticky top-0 z-50 backdrop-blur-md border-slate-700/10"
    >
      <NavbarContent className="flex">
        <NavbarBrand className="flex">
          <img
            src={img1}
            alt="logo"
            className="md:h-12 h-10 w-24 md:w-28 my-1 "
          />
          <p className="bg-gradient-to-r from-cyan-800 ml-4 to-orange-600 text-transparent bg-clip-text md:text-2xl text-xl font-serif font-extrabold tracking-wider">
            ArticleLab
          </p>
        </NavbarBrand>

        <SignUp className="" setOpen={handleChange} />

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu className="w-1/5 left-auto right-0 items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className=" my-7 ">
            <Link
              className="w-full text-black hover:text-orange-500 text-3xl"
              href="#"
              size="lg"
            >
              {item}
            </Link>
            <hr />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
