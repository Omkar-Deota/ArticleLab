import { useState } from "react";
import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
const img1 = "/src/assets/picture/section1.jpg";
import Card from "../utils/constant";
import axios from "axios";
import {
  Button,
  Input,
  Modal,
  ModalContent,
  Skeleton,
} from "@nextui-org/react";
import { Search } from "../assets/icons/Search";

const HomePage = () => {
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUsers = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const filteredUsers = Users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <Button
              radius="lg"
              className={`bg-yellow-400 font-bold ml-4 text-xs md:text-sm ${
                searchQuery ? `cursor-pointer` : `cursor-not-allowed`
              }`}
              onClick={() => {
                setIsTrackingModalOpen(true);
                fetchUsers();
              }}
              disabled={loading || !searchQuery}
            >
              Track Order
            </Button>
          </div>
        </div>
      </div>

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
          <h1 className="md:text-5xl text-4xl  text-orange-500 font-extrabold">
            ABOUT US
          </h1>
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

      <Footer />
      {isTrackingModalOpen && (
        <Modal
          isOpen={isTrackingModalOpen}
          onClose={() => setIsTrackingModalOpen(false)}
        >
          <ModalContent className="overflow-y-auto p-6">
            <h2 className="text-2xl font-semibold text-center">
              Order Tracking
            </h2>

            {loading ? (
              <Skeleton className="h-10 w-full rounded-lg mb-6" />
            ) : (
              <div className="h-96 overflow-y-auto">
                {filteredUsers?.map((user) => (
                  <div
                    key={user.id}
                    className="md:flex-row bg-gray-50 shadow-sm p-3 mb-2 rounded-lg"
                  >
                    <p className="md:w-1/5 font-bold text-xs">
                      User Id:{user.id}
                    </p>
                    <div className="">
                      <strong>{user.name}</strong>
                    </div>
                    <p className="md:w-1/5 w-full">{user.email}</p>
                    <p className="w-full">{user.address.city}</p>
                  </div>
                ))}
              </div>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default HomePage;
