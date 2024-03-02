import React from "react";
import {
  awardfour,
  awardone,
  cards,
  email,
  fb,
  insta,
  linkedin,
  location,
  logo,
  phone,
  protectedimg,
  twitter,
  youtube,
} from "../assets/images";

const Footer = () => {
  return (
    <>
      <footer className="w-full mx-auto bg-[#171C22] h-50">
        <div className="flex flex-col lg:flex-row justify-between container mx-auto py-20 px-5">
          {/* col1 */}
          <div className="space-y-3 mb-10 lg:mb-0 lg:mr-20">
            <img src={logo} className="w-full max-w-[200px] pb-5" alt="" />
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <img src={email} className="invert" alt="" />
                <p className="text-white">info@atlanticbookpublisher.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={phone} className="invert" alt="" />
                <p className="text-white">Toll Free: (855) 500-0057</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={phone} className="invert" alt="" />
                <p className="text-white">For Sales Inquiry: (213) 549-9870</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={email} className="invert" alt="" />
                <p className="text-white">
                  For Project Inquiry: (213) 549-9850
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={email} className="invert" alt="" />
                <p className="text-white">
                  200 Vesey Street, 24th Floor, New York, New York, 10281,
                  United States of America
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={location} className="invert" alt="" />
                <p className="text-white">
                  5250 Old Orchard Rd, Suite 300 Skokie, 60077
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <img src={fb} className="invert" alt="" />
              <img src={twitter} className="invert" alt="" />
              <img src={insta} className="invert" alt="" />
              <img src={youtube} className="invert" alt="" />
              <img src={linkedin} className="invert" alt="" />
            </div>
            <img src={protectedimg} className="pt-5" alt="" />
          </div>
          {/* col2 */}
          <div className="space-y-3 w-full max-w-[260px] lg:w-auto">
            <h1 className="font-semibold pb-5 text-white text-xl border-b border-white">
              Useful Links
            </h1>
            <p className="text-white">Home</p>
            <p className="text-white">Pricing</p>
            <p className="text-white">Contact</p>
            <p className="text-white">Faq's</p>
            <p className="text-white">Let's Get Started</p>
          </div>
          {/* col3 */}
          <div className="space-y-3 w-full max-w-[260px] lg:w-auto">
            <h1 className="font-semibold pb-5 text-white text-xl border-b border-white">
              Services
            </h1>
            <p className="text-white">Publishing</p>
            <p className="text-white">Book Illustration</p>
            <p className="text-white">Ghostwriting</p>
            <p className="text-white">Faq's</p>
            <p className="text-white">Book Marketing</p>
          </div>
          {/* col4 */}
          <div className="space-y-3 w-full max-w-[180px] lg:w-auto">
            <h1 className="font-semibold pb-5 text-white text-xl border-b border-white">
              Awards
            </h1>
            <img src={awardone} className="w-full max-w-[120px] py-5" alt="" />
            <img src={awardfour} alt="" />
          </div>
        </div>
        {/* bottom */}
        <div className="border mx-auto container mb-4"></div>
        <div className="flex flex-col lg:flex-row justify-between items-center mx-auto container">
          <img
            src={cards}
            className="w-full max-w-[250px] mb-4 lg:mb-0 lg:w-auto"
            alt=""
          />
          <div className="text-white text-center lg:text-left">
            <p>© 2024 - All Rights Reserved - Atlantic</p>
          </div>
          <div className="text-white text-center lg:text-left">
            <p>Terms of Use | Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
