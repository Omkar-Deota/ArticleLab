import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";
// import { NavbarItem, Button} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
const img1='src/assets/logo1.png'
  const menuItems = [
    "Home",
    "Services",
    "About",
    "Contact us",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className=" bg-slate-100">
      <NavbarContent>

      <NavbarBrand>
        <img src={img1} alt="logo" className="h-24 w-24 "/>
          <p className="font-bold text-xl ml-5">COAL</p>
        </NavbarBrand>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className=""
        />
        
      </NavbarContent>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
      </NavbarContent> */} 

      <NavbarMenu className="w-1/5  left-auto right-0">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
