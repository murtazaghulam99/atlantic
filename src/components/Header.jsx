import React, { useState } from "react";
import { arrowdown, logo } from "../assets/images";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <header className="w-full absolute z-10 py-5">
        <nav className="max-w-7xl mx-auto container px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img className="w-full max-w-[200px]" src={logo} alt="Logo" />
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={() => setToggle(!toggle)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      toggle ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div
              className="hidden md:block w-full max-w-[700px]"
              onMouseEnter={() => setToggle(true)}
              onMouseLeave={() => setToggle(false)}
            >
              <ul className="flex justify-end items-center space-x-3">
                <li className="text-white">
                  <a
                    href="#"
                    className="hover:text-[#28a745] cursor-pointer transition-colors text-sm font-medium"
                  >
                    Home
                  </a>
                </li>
                <li
                  className={`text-white relative ${
                    hovered ? "hover:text-white" : ""
                  }`}
                >
                  <div className="flex justify-center items-center px-4 gap-2">
                    <a
                      href="#"
                      className="hover:text-[#28a745] cursor-pointer transition-colors text-sm font-medium"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                    >
                      Services
                      {/* Add arrow icon */}
                    </a>
                    <img
                      src={arrowdown}
                      className="w-full max-w-[10px] invert"
                      alt=""
                    />
                  </div>
                  {/* Dropdown */}
                  {toggle && (
                    <ul className="bg-gray-800 absolute mt-1 shadow-lg rounded-md w-48">
                      <li className="py-3 px-4">
                        <a
                          href="#"
                          className="text-white block hover:text-[#28a745] cursor-pointer transition-colors "
                        >
                          Publishing
                        </a>
                      </li>
                      <li className="py-3 px-4">
                        <a
                          href="#"
                          className="text-white block hover:text-[#28a745] cursor-pointer transition-colors "
                        >
                          Book Illustration
                        </a>
                      </li>
                      <li className="py-3 px-4">
                        <a
                          href="#"
                          className="text-white block  hover:text-[#28a745] cursor-pointer transition-colors"
                        >
                          Ghostwriting
                        </a>
                      </li>
                      <li className="py-3 px-4">
                        <a
                          href="#"
                          className="text-white block   hover:text-[#28a745] cursor-pointer transition-colors"
                        >
                          Book Marketing
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="text-white">
                  <a
                    href="#"
                    className="hover:text-[#28a745] cursor-pointer transition-colors  px-3 py-2 text-sm font-medium"
                  >
                    Pricing
                  </a>
                </li>
                <li className="text-white">
                  <a
                    href="#"
                    className="hover:text-[#28a745] cursor-pointer transition-colors px-3 py-2 text-sm font-medium"
                  >
                    Our Portfolio
                  </a>
                </li>
                <li className="text-white">
                  <a
                    href="#"
                    className="hover:text-[#28a745] cursor-pointer transition-colors px-3 py-2 text-sm font-medium"
                  >
                    Blogs
                  </a>
                </li>
                <li className="text-white">
                  <a
                    href="#"
                    className="hover:text-[#28a745] cursor-pointer transition-colors px-3 py-2 text-sm font-medium"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* Buttons */}
            <div className="lg:flex items-center hidden">
              <a
                href="tel:+1-(315)-417-3330"
                className="inline-block bg-[#28a745] transition-colors hover:bg-gray-700 text-white py-2 px-4 rounded-full mr-4"
              >
                +1-(315)-417-3330{" "}
              </a>
              <button className="inline-block border-2 border-[#28a745] transition-colors hover:bg-[#28a745] text-white py-2 px-4 rounded-full">
                GET A QUOTE
              </button>
            </div>
          </div>
          {/* Dropdown Menu (Mobile) */}
          {toggle && (
            <div className="md:hidden">
              <ul className="bg-gray-800 mt-2 shadow-lg rounded-md">
                <li className="py-2 px-4">
                  <a
                    href="#"
                    className="text-white block hover:bg-gray-700 rounded-md hover:text-[#28a745] cursor-pointer transition-colors px-2 py-2"
                  >
                    Publishing
                  </a>
                </li>
                <li className="py-2 px-4">
                  <a
                    href="#"
                    className="text-white block hover:bg-gray-700 hover:text-[#28a745] cursor-pointer transition-colors rounded-md px-2 py-2"
                  >
                    Book Illustration
                  </a>
                </li>
                <li className="py-2 px-4">
                  <a
                    href="#"
                    className="text-white block hover:bg-gray-700 hover:text-[#28a745] cursor-pointer transition-colors rounded-md px-2 py-2"
                  >
                    Ghostwriting
                  </a>
                </li>
                <li className="py-2 px-4">
                  <a
                    href="#"
                    className="text-white block hover:bg-gray-700 hover:text-[#28a745] cursor-pointer transition-colors rounded-md px-2 py-2"
                  >
                    Book Marketing
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
