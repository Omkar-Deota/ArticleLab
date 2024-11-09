/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Signup from "./Signup";


const Login = () => {
  const [activeComponent, setActiveComponent] = useState("Login");
    
  const handleClick = (componentName) => {
    setActiveComponent(componentName)
}

  return (
    <>
      {activeComponent === 'Login' && (
      <div className="w-full max-w-md sm:max-w-md md:max-w-lg py-6 sm:p-6 md:p-8 space-y-6 bg-white mx-auto">
        {/* User Avatar Section */}
        <form>
          <div className="flex justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden mb-5">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="User avatar"
              />
            </div>
          </div>

          {/* Input Fields Section */}
          <div className="mx-auto w-[70%]">
            <input
              type="tel"
              name="mobile_number"
              className="p-2 border border-gray-300 rounded w-full mb-4"
              placeholder="Mobile No."
              aria-label="Mobile Number"
              required
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, ""); // Allow only numeric input
              }}
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
              maxLength={10}
            />
            <span className="relative">
              <input
                name="password"
                className="p-2 border border-gray-300 rounded w-full"
                placeholder="Password"
                aria-label="Password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
              ></button>
            </span>
          </div>

          {/* Login Button */}

          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="bg-pink-500 text-gray-50 p-2 pe-3 rounded-full flex items-center justify-center font-bold hover:text-pink-500 hover:bg-white border-2 border-pink-500 transition duration-500 ease-out"
            >
              <span className="rounded-full bg-white text-pink-500 p-1 me-2 border-2 border-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
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
              LOG IN
            </button>
          </div>

          {/* Additional Links */}
          <div className="text-center mt-4">
            <p className="text-sm mt-2">
              Don't Have an Account?
              <a
                href="#signup"
                className="text-pink-500 mx-2 hover:underline"
                onClick={() => handleClick('Signup')}
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
)}
        {activeComponent === 'Signup' && <Signup />}
    </>
  );
};

export default Login;
