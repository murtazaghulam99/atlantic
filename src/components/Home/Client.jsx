import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { partnerLogos } from "../../constants";

const Client = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <section className="w-full bg-[#212529] py-14 relative">
        <div className="container mx-auto">
          <Slider ref={sliderRef} {...settings}>
            {partnerLogos.map((logo, index) => (
              <div key={index} className="mx-2">
                <img src={logo} alt={`Partner Logo ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Client;
