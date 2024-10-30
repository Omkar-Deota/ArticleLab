import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
// import { NavbarItem, Button} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const img1 = "src/assets/logo1.png";
  const menuItems = ["Home", "Services", "About", "Contact us", "Log Out"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="sticky top-0 z-50 backdrop-blur-md border-slate-700/10 "
    >
      <NavbarContent>
        <NavbarBrand className="flex gap-2">
          <img src={img1} alt="logo" className="h-12 w-28 my-1" />
          <p className="bg-gradient-to-r from-cyan-800 to-orange-600 text-transparent bg-clip-text text-2xl font-serif font-extrabold tracking-wider">
            ArticleLab
          </p>
        </NavbarBrand>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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

      <NavbarMenu className="w-1/5 left-auto right-0 items-center">
      
      <div className=" inline-block mt-12">
          <img src={img1} alt="logo" className="h-10 w-24 text-center ml-3  " />
          <p className="bg-gradient-to-r from-cyan-800 to-orange-600 text-transparent 
          bg-clip-text text-xl font-serif font-extrabold tracking-wider">
            ArticleLab
          </p>
          <hr />
          <hr />
        </div>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="text-3xl mt-5">
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
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
