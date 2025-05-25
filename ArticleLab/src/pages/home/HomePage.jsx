// #todo:
// change photos in ehat we offer section and their content;
// Content of demo content;
// margin padding of whole app

import { useEffect, useState } from "react";
import Footer from "../../components/common/Footer";
import Nav from "../../components/common/Nav";
const img1 = "/src/assets/picture/section1.png";
import axios from "axios";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import AboutUs from "./Aboutus";

const HomePage = () => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch(() => {});
  }, []);

  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const trackOrderId = (userId) => {
       alert(`User name is:${userId}`);
  };

  return (
    <>
      <Nav />
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center z-0 mb-5 md:mb-0"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        <div className="relative z-10 text-center p-8 rounded-full">
          <h2 className="text-5xl font-bold  tracking-wide mb-5 text-amber-400">
            Track your consignment
          </h2>

        
            <Autocomplete
              className="max-w-xs "
              placeholder="Track an order"
              onInputChange={(value) => setInputValue(value)}
              color="warning"
          
            >
              {inputValue.length &&
                users.map((user) => (
                  <AutocompleteItem
                    key={user.id}
                    onClick={() => trackOrderId(user.id)}
                  >
                    {user.name}
                  </AutocompleteItem>
                ))}
            </Autocomplete>
          </div>
        </div>
        <AboutUs/>

      

      <Footer />
    </>
  );
};

export default HomePage;
