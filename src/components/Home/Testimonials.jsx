import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clientone, star, stars } from "../../assets/images";
import { testimonialsData } from "../../constants";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="container mx-auto py-20 px-10 relative">
        <Slider ref={sliderRef} {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="py-8">
              <p className="font-bold md:text-lg text-md text-[#28a745]">
                Client Testimonials
              </p>
              <h1 className="font-bold md:text-5xl text-2xl pt-3 pb-7">
                The Stamp of Approval for Our Services
              </h1>
              <p className="md:text-2xl text-lg">
                {testimonial.testimonialText}
              </p>
              <div className="flex items-center space-x-3 py-8">
                <img
                  src={testimonial.clientImage}
                  className="w-full max-w-[120px]"
                  alt=""
                />
                <div className="space-y-2">
                  <p className="font-bold text-lg text-[#28a745]">
                    {testimonial.clientName}
                  </p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <img key={i} src={star} className="star" alt="" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Testimonials;
