import React from "react";
import { values } from "../../constants";

const Value = () => {
  return (
    <>
      <section className="w-full bg-[#212529] py-14">
        <div className="container mx-auto flex md:flex-row flex-col items-center md:space-y-0 space-y-8 justify-center">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 space-y-4"
            >
              <img src={value.image} className="w-full max-w-[80px]" alt="" />
              <p className="text-white font-semibold text-center">
                {value.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Value;
