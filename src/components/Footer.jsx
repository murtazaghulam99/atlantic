import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import { awardsOne, awardsTwo } from "../constants";

const Footer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <footer className="w-full mx-auto bg-[#171C22] h-50">
        <div className="flex flex-col lg:flex-row justify-between container mx-auto py-20 px-5">
          {/* col1 */}
          <div className="space-y-3 mb-10 w-full max-w-[350px] lg:mb-0">
            <img src={logo} className="w-full max-w-[200px] pb-5" alt="" />
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <img src={email} className="invert" alt="" />
                <p className="text-white text-sm">
                  info@atlanticbookpublisher.com
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={phone} className="invert" alt="" />
                <p className="text-white text-sm">Toll Free: (855) 500-0057</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={phone} className="invert" alt="" />
                <p className="text-white text-sm">
                  For Sales Inquiry: (213) 549-9870
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={phone} className="invert" alt="" />
                <p className="text-white text-sm">
                  For Project Inquiry: (213) 549-9850
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={location} className="invert" alt="" />
                <p className="text-white text-sm">
                  200 Vesey Street, 24th Floor, New York, New York, 10281,
                  United States of America
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={location} className="invert" alt="" />
                <p className="text-white text-sm">
                  5250 Old Orchard Rd, Suite 300 Skokie, 60077
                </p>
              </div>
            </div>
            <div className="flex space-x-2 pt-4">
              <div className="bg-[#28a745] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#28a745]/80 transition-colors cursor-pointer">
                <img src={fb} className="invert" alt="" />
              </div>
              <div className="bg-[#28a745] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#28a745]/80 transition-colors cursor-pointer">
                <img src={twitter} className="invert" alt="" />
              </div>
              <div className="bg-[#28a745] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#28a745]/80 transition-colors cursor-pointer">
                <img src={insta} className="invert" alt="" />
              </div>
              <div className="bg-[#28a745] rounded-full w-8 h-8 hover:bg-[#28a745]/80 transition-colors cursor-pointer flex items-center justify-center">
                <img src={youtube} className="invert" alt="" />
              </div>
              <div className="bg-[#28a745] rounded-full w-8 h-8 hover:bg-[#28a745]/80 transition-colors cursor-pointer flex items-center justify-center">
                <img src={linkedin} className="invert" alt="" />
              </div>
            </div>

            <img src={protectedimg} className="pt-5" alt="" />
          </div>
          {/* col2 */}
          <div className="space-y-3 w-full max-w-[300px]">
            <h1 className="font-semibold pb-5 text-white text-xl border-b border-white">
              Useful Links
            </h1>
            <p className="text-white hover:text-[#28a745] transition-colors cursor-pointer">
              Home
            </p>
            <p className="text-white hover:text-[#28a745] transition-colors cursor-pointer">
              Pricing
            </p>
            <p className="text-white hover:text-[#28a745] transition-colors cursor-pointer">
              Contact
            </p>
            <p className="text-white hover:text-[#28a745] transition-colors cursor-pointer">
              Faq's
            </p>
            <p className="text-white hover:text-[#28a745] transition-colors cursor-pointer">
              Let's Get Started
            </p>
          </div>
          {/* col3 */}
          <div className="space-y-3  w-full max-w-[300px]">
            <h1 className="font-semibold pb-5 text-white text-xl border-b border-white">
              Services
            </h1>
            <p className="text-white hover:text-[#28a745] transition-colors cursor-pointer">
              Publishing
            </p>
            <p className="text-white hover:text-[#28a745] transition-colors cursor-pointer">
              Book Illustration
            </p>
            <p className="text-white hover:text-[#28a745] transition-colors cursor-pointer">
              Ghostwriting
            </p>
            <p className="text-white hover:text-[#28a745] transition-colors cursor-pointer">
              Faq's
            </p>
            <p className="text-white hover:text-[#28a745] transition-colors cursor-pointer">
              Book Marketing
            </p>
          </div>
          {/* col4 */}
          <div className="space-y-3 w-full max-w-[180px] lg:w-auto">
            <h1 className="font-semibold pb-5 text-white text-xl border-b border-white">
              Awards
            </h1>
            <Slider {...settings}>
              <div></div>
              {awardsOne.map((award, index) => (
                <img src={award} className="w-full max-w-[120px] py-2" alt="" />
              ))}
            </Slider>
            <Slider {...settings}>
              <div></div>
              {awardsTwo.map((award, index) => (
                <img src={award} className="w-full max-w-[120px] py-2" alt="" />
              ))}
            </Slider>
          </div>
        </div>
        {/* bottom */}
        <div className="border mx-auto container mb-4"></div>
        <div className="flex flex-col lg:flex-row pb-4 justify-between items-center mx-auto container">
          <img
            src={cards}
            className="w-full max-w-[250px] mb-4 lg:mb-0 lg:w-auto"
            alt=""
          />
          <div className="text-white text-center lg:text-left">
            <p>© 2024 - All Rights Reserved - Atlantic</p>
          </div>
          <div className="text-white text-center lg:text-left">
            <div>
              <span className="hover:text-[#28a745] transition-colors cursor-pointer">
                Terms of Use
              </span>{" "}
              |{" "}
              <span className="hover:text-[#28a745] transition-colors cursor-pointer">
                Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
