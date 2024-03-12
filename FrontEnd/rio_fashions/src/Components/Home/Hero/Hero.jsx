import React from "react";
import Hero1 from "../../../assets/Hero/H 1.png";
import Hero2 from "../../../assets/Hero/H 2.png";

const Hero = () => {
  return (
    <section className="mb-16">
      <div className="hidden md:block relative">
        <img src={Hero1} alt="Slogan" className="" />
        <h2 className="absolute top-[25%] lg:top-[27%] left-[27%] text-white font-[cookie,cursive] text-[3rem] ">
          Digital Shop for Clothings.
        </h2>
      </div>
      <div className="md:hidden relative">
        <img src={Hero2} alt="Slogan" />
        <h2 className="absolute top-[24%]  left-[23%] text-white font-[cookie,cursive] text-[1.7rem] ">
          Digital Shop for Clothings.
        </h2>
      </div>
    </section>
  );
};

export default Hero;
