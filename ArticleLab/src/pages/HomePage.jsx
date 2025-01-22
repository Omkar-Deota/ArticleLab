import React, { useState } from "react";
import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
const img1 = "/src/assets/picture/section1.jpg";
import features from "../utils/constant";
import Card from "../utils/constant";

import axios from "axios";

import { Button, Input} from "@nextui-org/react";
import { Search } from "../assets/icons/Search";
import { Skeleton } from "@nextui-org/react";


const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [Users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [invalidSearch, setInvalidSearch] = useState(false);

  // Function to handle opening and closing of the modal
  const handleTrackOrderClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //API Call

  const fetchUsers = () => {
    setLoading(true);
    setError(null);
    setInvalidSearch(false);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
        setInvalidSearch(false); 
        
      })
      .catch(() => {
        setError("Error fetching data");
        setLoading(false);
      });
  };

  // Filter users based on the search query

  const filteredUsers = Users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Update invalid search state
  React.useEffect(() => {
    if (searchQuery && filteredUsers.length === 0) {
      setInvalidSearch(true); // Set to true if no results are found
    } else {
      setInvalidSearch(false); // Reset if results are found
    }
  }, [searchQuery, filteredUsers]);

  return (
    <>
      <Nav />
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center z-0 mb-5 md:mb-0"
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
              required
              type="text"
              placeholder="Enter order number"
              className="md:h-16 h-12 md:w-3/4 w-[95%] placeholder:text-start md:text-lg placeholder:font-semibold "
              endContent={<Search className="absolute right-4" />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
            />

            <Button
              radius="lg"
              className=" bg-yellow-400 font-bold ml-4 "
              onClick={() => {
                handleTrackOrderClick();
                fetchUsers();
              }}
              disabled={loading}
            >
              Track Order
            </Button>
          </div>
        </div>
      </div>
      {/* cards */}

      <section className="flex justify-center items-center mx-auto w-[90%] flex-col md:flex-row gap-3">
        {features.map((item, index) => (
          <div
            key={index}
            className="md:-mt-20  z-20 mb-5 shadow-2xl hover:shadow-slate-400  rounded-2xl bg-white "
          >
            <img src={img1} alt="image" className="rounded-2xl h-auto" />
            <div className="text-center">{item.title}</div>
          </div>
        ))}
      </section>

      {/* what we offer */}
      <div className="bg-slate-100 mb-10">
        <div className="text-center mb-5 my-5">
          <h1 className="md:text-5xl text-4xl text-orange-500 font-extrabold ">
            WHAT WE OFFER
          </h1>
          <p className="mt-2 w-1/2 text-center justify-center mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        
        <div className="flex h-auto justify-center items-center mx-auto w-[90%] flex-col md:flex-row gap-3">
          {Card.map((item, index) => (
            <div
              key={index}
              className="  mb-5 shadow-2xl hover:shadow-slate-400  rounded-2xl bg-white "
            >
              <img src={img1} alt="" className="rounded-2xl h-auto" />
              <div className="text-black text-center">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    {/* About us */}
      <div className="mb-10 h-auto  ">
        <div className="text-center mb-5 ">
          <h1 className="md:text-5xl text-4xl  text-orange-500 font-extrabold">ABOUT US</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <img src={img1} alt="section4" />

        <div className="my-8 w-4/5 mx-auto flex flex-wrap">
          <div>
            <div className="grid grid-cols-2 s md:grid-cols-4 gap-10 md:gap-20 mx-auto ">
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
                <div className="bg-yellow-100 h-20 w-20 rounded-xl "></div>
                <p className="text-center mt-5 ">
                  Reach 99.5% of Indian population across 18,500 pin codes
                </p>
              </div>
               {/* Card 4 */}
               <div className="bg-white  flex-row-reverse justify-items-center ">
                <div className="bg-yellow-100 h-20 w-20 rounded-xl "></div>
                <p className="text-center mt-5 ">
                  Reach 99.5% of Indian population across 18,500 pin codes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 ">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold text-center">Order Tracking</h2>

          {/* Error and invalid result */}
          {error && <div className="text-red-500">{error}</div>}
        
          {/* Loading state */}
          {loading ? (
             <div className="max-w-[300px] w-full flex items-center gap-3">
                 
                  <div className="w-full flex flex-col gap-2">
                    <Skeleton className="h-10 w-4/5 rounded-lg mb-6" />
                    <Skeleton className="h-10 w-4/5 rounded-lg" />
                  </div>
                </div> // You may want to customize the skeleton size
          ) : (
            <div>
             
              {filteredUsers.length > 0 ? (
                <ul className="">
                  {filteredUsers.map((user) => (
                    <li key={user.id} className="md:flex-row bg-gray-50 shadow-sm p-3 mb-2 rounded-lg">
                      <div className="md:w-1/5 font-bold text-xs">{user.id}:</div>
                      <div className="">
                        <strong>{user.name}</strong>
                      </div>
                      <div className="md:w-1/5 w-full">{user.email}</div>
                      <div className="w-full">{user.address.city}</div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center text-gray-500">No users found</div>
              )}

              {/* Close button */}
              <div className="flex justify-center">
                <button
                  className="mt-4 bg-red-500 text-white px-3 py-2 rounded-lg"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )}
    
      <Footer />
    </>
  );
};

export default HomePage;
