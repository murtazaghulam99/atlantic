import React from "react";
import { bookone } from "../../assets/images";

const OneStopSolution = () => {
  return (
    <>
      <section className="container mx-auto py-20 px-2">
        <h1 className="font-semibold md:text-5xl text-3xl text-black text-center">
          Our{" "}
          <span className="font-bold text-[#28a745]">
            Book Illustration Services
          </span>{" "}
          Are A <br />
          One Stop Solution For Your Books
        </h1>
        <div className="mx-auto flex justify-center gap-x-14 items-center flex-wrap my-16">
          <div className="w-full max-w-[300px] space-y-5">
            <h1 className="font-bold text-[#28a745] text-[28px] text-center">
              Fiction
            </h1>
            <p className="text-gray-500 pb-10">
              Fiction is something which everyone loves and enjoys while
              reading, so we at Book Writing Experts make sure that we create
              perfect illustrations for your fiction books.
            </p>
            <img src={bookone} alt="" />
          </div>
          <div className="w-full max-w-[300px] space-y-5">
            <h1 className="font-bold text-[#28a745] text-[28px] text-center">
              Fiction
            </h1>
            <p className="text-gray-500 pb-10">
              Fiction is something which everyone loves and enjoys while
              reading, so we at Book Writing Experts make sure that we create
              perfect illustrations for your fiction books.
            </p>
            <img src={bookone} alt="" />
          </div>
          <div className="w-full max-w-[300px] space-y-5">
            <h1 className="font-bold text-[#28a745] text-[28px] text-center">
              Fiction
            </h1>
            <p className="text-gray-500 pb-10">
              Fiction is something which everyone loves and enjoys while
              reading, so we at Book Writing Experts make sure that we create
              perfect illustrations for your fiction books.
            </p>
            <img src={bookone} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default OneStopSolution;
