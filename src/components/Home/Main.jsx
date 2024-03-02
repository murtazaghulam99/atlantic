import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Banner from "./Banner";
import Client from "./Client";
import CTAOne from "./CTAOne";
import CTATwo from "./CTATwo";
import CTAThree from "./CTAThree";
import OurExperts from "./OurExperts";
import OurServices from "./OurServices";
import OurServicesVideo from "./OurServicesVideo";
import Value from "./Value";
import WhyChooseUs from "./WhyChooseUs";
import OneStopSolution from "./OneStopSolution";
import Testimonials from "./Testimonials";
import RequestAQuote from "./RequestAQuote";

const Main = () => {
  return (
    <>
      <Header />
      <Banner />
      <Client />
      <CTAOne />
      <CTATwo />
      <OurExperts />
      <CTAThree />
      <OurServices />
      <Value />
      <WhyChooseUs />
      <OneStopSolution />
      <CTAThree />
      <Testimonials />
      <OurServicesVideo />
      <RequestAQuote />
      <Footer />
    </>
  );
};

export default Main;
