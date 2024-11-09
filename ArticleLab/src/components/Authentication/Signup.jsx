import { useState } from "react";
import { Button } from "@nextui-org/react";
import Login from "./Login";
const Signup = () => {
  const [activeComponent, setActiveComponent] = useState("Signup");

  const handleClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      {activeComponent === "Signup" && (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <input
            className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="First Name"
            aria-label="First Name"
            name="firstName"
            required={true}
            pattern="[A-Za-z]+"
            title="First Name should contain only letters"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^a-zA-Z]/g, ""); // Allow only alphabetic input (A-Z, a-z)
            }}
          />
          <input
            className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Last Name"
            aria-label="Last Name"
            name="lastName"
            required
            pattern="[A-Za-z]+"
            title="Last Name should contain only letters"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^a-zA-Z]/g, ""); // Allow only alphabetic input (A-Z, a-z)
            }}
          />

          <div className="relative w-full">
            <input
              type="password"
              className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Create Password"
              aria-label="Create Password"
              name="password"
              required={true}
            />
             {/* Signup Button */}
             <div className="flex items-center justify-center mt-4">
                        <Button
                        size="lg"
                            type="submit"
                            className="bg-pink-500 text-gray-50 p-2 pe-3 rounded-full flex items-center justify-center font-bold hover:text-pink-500 hover:bg-white border-2 border-pink-500 transition duration-500 ease-out"
                        >
                            <span className="rounded-full bg-white text-pink-500 p-1 me-2 border-2 border-pink-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </span>
                            Sign up
                        </Button>
                    </div>

            <div className="flex justify-center mt-3">
              <p className="text-sm">
                Already have an account?{" "}
                <span
                  className="text-pink-500 cursor-pointer hover:text-black transition duration-300 ease-out font-semibold hover:underline"
                  onClick={() => handleClick("Login")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      {activeComponent === "Login" && <Login />}
    </div>
  );
};

export default Signup;
