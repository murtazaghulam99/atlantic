import React from "react";
import video from "../../assets/video/video.m4v";

const OurServicesVideo = () => {
  return (
    <section className="w-full h-screen">
      <video
        src={video}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      ></video>
    </section>
  );
};

export default OurServicesVideo;
