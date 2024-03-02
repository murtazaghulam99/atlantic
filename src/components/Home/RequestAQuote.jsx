import React from "react";
import { email, phone } from "../../assets/images";

const RequestAQuote = () => {
  return (
    <>
      <section className="mx-auto container pt-20 px-2">
        <h1 className="font-bold md:text-5xl text-3xl text-center text-[#28a745]">
          Request A Free Quote
        </h1>
        <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-5 py-12">
          <input
            className="border-4 border-[#a6a6a6] py-4 px-3 w-full font-normal shadow-xl"
            type="text"
            required
            placeholder="Name"
          />
          <input
            className="border-4 border-[#a6a6a6] py-4 px-3 w-full font-normal shadow-xl"
            type="email"
            required
            placeholder="Email"
          />
          <input
            className="border-4 border-[#a6a6a6] py-4 px-3 w-full font-normal shadow-xl"
            type="tel"
            required
            placeholder="Phone"
          />
        </div>
        <div className="flex justify-center items-center">
          <a
            href="#"
            className="inline-block bg-[#28a745] hover:bg-[#28a745]/90 transition-colors text-white py-2 px-36 rounded-full mr-4"
          >
            Submit
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-around py-20">
          <h1 className="text-4xl font-bold text-center md:text-left md:mr-10">
            Email Us
          </h1>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 pt-3">
            <img src={email} className="pt-8" alt="" />
            <div>
              <h1 className="font-bold text-2xl">
                For project inquiries only:
              </h1>
              <a
                href="mailto:support@bookwritingexperts.com"
                className="hover:text-[#28a745] transition-colors"
              >
                support@bookwritingexperts.com
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 pt-3">
            <img src={phone} className="pt-8" alt="" />
            <div>
              <h1 className="font-bold text-2xl">For other inquiries only:</h1>
              <a
                href="tel: +1-(315)-417-3330"
                className="hover:text-[#28a745] transition-colors"
              >
                +1-(315)-417-3330
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestAQuote;
