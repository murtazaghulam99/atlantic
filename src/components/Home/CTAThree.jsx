import React from "react";
import { ctabg } from "../../assets/images";

const CTAThree = () => {
  return (
    <>
      <section
        className="py-24 px-4 text-white bg-cover bg-no-repeat bg-left md:bg-top relative"
        style={{ backgroundImage: `url(${ctabg})` }}
      >
        <div className="max-w-7xl mx-auto container">
          <div className="flex items-center justify-center">
            {/* Content */}
            <div className="flex-1 w-full text-center items-center justify-center space-y-5">
              <h1 className="md:text-2xl text-lg">
                Stop worrying about publishing books!
              </h1>
              <h1 className="md:text-5xl text-2xl font-semibold leading-16">
                Let Our Best
                <span className="text-[#28a745] font-extrabold px-3">
                  Amazon Kindle Direct Publishing (KDP)
                </span>
                Service Providers Handle All Your Publishing Troubles!
              </h1>
              <p className="text-base mt-4">
                We understand being an author is a challenging yet respectable
                profession, but not everybody is lucky enough to become one.
              </p>
              <div className="mt-6 md:space-y-0 space-y-3">
                <a
                  href="#"
                  className="inline-block bg-[#28a745] text-white py-3 px-10 rounded-full mr-4"
                >
                  Talk To An Expert
                </a>
                <a
                  href="tel: +1-(315)-417-3330"
                  className="inline-block border-4 border-white text-white py-3 px-14 rounded-full"
                >
                  +1-(315)-417-3330
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTAThree;
