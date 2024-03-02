import React from "react";

const CTATwo = () => {
  return (
    <>
      <section className="w-full bg-[#24303e] py-16">
        <div className="container mx-auto text-center">
          <h1 className="md:text-[50px] text-2xl text-[#28a745] font-bold leading-tight">
            Book Writing Experts
            <span className="text-white font-semibold pl-3">
              Is waiting for you to Ask for a
            </span>
            <br />
            Professional Ghostwriter
          </h1>
          <p className="font-medium text-white pt-3">
            Hit us a message, or give us a call, and make the most of our
            Professional Ghostwriters.
          </p>
          <div className="flex flex-col items-center space-y-5 my-5">
            <a href="tel:#" className="text-white font-semibold">
              +1-(315)-417-3330
            </a>
            <a
              href="#"
              className="bg-white hover:bg-[#28a745] transition-colors text-black hover:text-white py-2 px-6 rounded-full"
            >
              LET'S DISCUSS
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTATwo;
