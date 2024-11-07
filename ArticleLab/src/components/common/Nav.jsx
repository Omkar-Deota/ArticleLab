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

import ModelCom from "../Modal/ModalCom";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const img1 = "src/assets/logo1.png";
  const menuItems = ["Home", "Services", "About", "Contact us", "Log Out"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="sticky top-0 z-50 backdrop-blur-md border-slate-700/10"
    >
      <NavbarContent className="flex justify-start ">
        <NavbarBrand className="flex items-center ">
          <img src={img1} alt="logo" className="h-12 w-28 my-1" />
          <p className="bg-gradient-to-r from-cyan-800 ml-4 to-orange-600 text-transparent bg-clip-text text-2xl font-serif font-extrabold tracking-wider">
            ArticleLab
          </p>
        </NavbarBrand>
        {/* modal */}
        <ModelCom
          className="hover: border hover:bg-orange-500 border-orange-600 mx-4"
          size="md"
          variant="light"
        />

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

{
  /* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */
}
