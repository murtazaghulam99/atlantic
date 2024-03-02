import React from "react";
import { tick } from "../../assets/images";

const CTAOne = () => {
  return (
    <>
      <section className="mx-auto container py-10 px-2">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="w-full max-w-[600px] space-y-8 mb-8 md:mb-0 md:mr-8">
            <h1 className="text-[#28a745] md:text-5xl text-2xl font-bold leading-16">
              Are You Struggling to give Words to your Ideas?
            </h1>
            <p className="text-base mt-4">
              You may be a victim of the following nuisances
            </p>
            <div className="flex flex-col md:flex-row justify-between w-full max-w-[500px]">
              <ul className="list-disc flex flex-col space-y-4 md:w-1/2">
                <li className="flex space-x-1">
                  <img src={tick} alt="" />
                  <span>Slow Productivity</span>
                </li>
                <li className="flex space-x-1">
                  <img src={tick} alt="" />
                  <span>Lack of Resources</span>
                </li>
                <li className="flex space-x-1">
                  <img src={tick} alt="" />
                  <span>Mismanaged Time Schedules</span>
                </li>
                <li className="flex space-x-1">
                  <img src={tick} alt="" />
                  <span>Financial Constraints</span>
                </li>
              </ul>
              <ul className="list-disc flex flex-col space-y-4 md:w-1/2">
                <li className="flex space-x-1">
                  <img src={tick} alt="" />
                  <span>Demotivation</span>
                </li>
                <li className="flex space-x-1">
                  <img src={tick} alt="" />
                  <span>Delayed Creativity Process</span>
                </li>
                <li className="flex space-x-1">
                  <img src={tick} alt="" />
                  <span>Delayed Writing Process</span>
                </li>
                <li className="flex space-x-1">
                  <img src={tick} alt="" />
                  <span>Continuous Revisions</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 space-x-3 flex flex-col sm:flex-row items-center">
              <a
                href="#"
                className="inline-block bg-[#28a745] text-white py-3 px-5 rounded-full mb-3 sm:mb-0"
              >
                Get a Free Proposal
              </a>
              <a
                href="#"
                className="inline-block hover:bg-[#28a745] border-gray-700 hover:border-none text-gray-700 border-2 transition-colors hover:text-white py-3 px-5 rounded-full mb-3 sm:mb-0"
              >
                Talk To An Expert
              </a>
              <a
                href="tel:8555000057"
                className="inline-block hover:bg-[#28a745] border-gray-700 hover:border-none text-gray-700 border-2 transition-colors hover:text-white py-3 px-5 rounded-full"
              >
                (855) 500 0057
              </a>
            </div>
          </div>
          <div className="border border-[#28a745] shadow-xl rounded-lg px-10 pt-6">
            <h1 className="text-2xl text-[#28a745] italic font-bold text-center">
              Can't Reach Us?
            </h1>
            <p className="text-base italic text-center">
              Drop your details, and we'll soon respond to your inquiry!
            </p>
            <form action="#" className="space-y-8 py-10">
              <div className="border-b py-3">
                <input
                  type="text"
                  required
                  className="outline-none w-full font-normal"
                  placeholder="Full Name:"
                />
              </div>
              <div className="border-b py-3">
                <input
                  type="email"
                  required
                  className="outline-none w-full font-normal"
                  placeholder="Email Address:"
                />
              </div>
              <div className="border-b py-3">
                <input
                  type="tel"
                  required
                  className="outline-none w-full font-normal"
                  placeholder="Phone Number:"
                />
              </div>
              <div className="border-b pt-3 pb-14">
                <input
                  type="text"
                  className="outline-none w-full font-normal"
                  required
                  placeholder="Your project brief:"
                />
              </div>
              <a
                href="tel:#"
                className="inline-block bg-[#28a745] font-semibold text-center text-white py-2 px-5 w-full rounded-full"
              >
                Best time to jump on a quick call:
              </a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTAOne;
