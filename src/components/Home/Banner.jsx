import React, { useState, useEffect } from "react";
import { client, homebanner } from "../../assets/images";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change 768 to your desired breakpoint
    };
    handleResize(); // Call the function to set initial state
    window.addEventListener("resize", handleResize); // Add event listener for window resize
    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    };
  }, []);

  return (
    <section
      className="pt-40 px-4 text-white bg-cover h-screen bg-no-repeat bg-left md:bg-center relative"
      style={{ backgroundImage: `url(${homebanner})` }}
    >
      <div className="max-w-7xl mx-auto container">
        <div className="flex items-start">
          {/* Content */}
          <div className="flex-1 max-w-[500px] w-full">
            <h1 className="text-5xl font-semibold leading-16">
              Your ONE-STOP <br />
              <span className="text-[#28a745] font-bold">
                Ghostwriting, Editing And Publishing Service
              </span>
              <br />
              Provider!
            </h1>
            <p className="text-base mt-4">
              We understand being an author is a challenging yet respectable
              profession, but not everybody is lucky enough to become one.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className={`inline-block border-4 border-[#28a745] hover:bg-[#28a745] text-white py-2 px-5 rounded-full mr-4 ${
                  isMobile ? "block mb-4" : "inline-block"
                }`}
              >
                LET'S DISCUSS
              </a>
              <a
                href="tel:8555000057"
                className={`inline-block bg-[#28a745] hover:bg-gray-700 text-white py-2 px-5 rounded-full ${
                  isMobile ? "block" : "inline-block"
                }`}
              >
                (855) 500 0057
              </a>
            </div>
            {/* Client Image */}
            {!isMobile && (
              <div className="hidden md:block my-10 invert ml-2">
                <img
                  src={client}
                  alt="Client"
                  className="w-full max-w-[800px]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
