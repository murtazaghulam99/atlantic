import React from "react";
import { booksOne } from "../../constants";

const OurExperts = () => {
  return (
    <>
      <section className="container mx-auto text-center px-2 py-20">
        <h1 className="md:text-[48px] text-3xl text-[#28a745] font-bold px-10 pb-4 leading-tight">
          Our Experts Have Helped Thousands Of Struggling Writers Come And Join
          The League!
        </h1>
        <p className="px-8 md:px-52 pb-8">
          Our experienced publishing service providers remove the hurdles of
          publishing books. From printing and publishing to distribution and
          marketing books on a global level, we take the writers through all.
        </p>
        <div className="flex flex-wrap justify-center w-full max-w-[1024px] gap-8 mx-auto">
          {booksOne.map((book, index) => (
            <img
              key={index}
              src={book}
              className="w-full max-w-[280px] md:w-auto"
              alt=""
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default OurExperts;
