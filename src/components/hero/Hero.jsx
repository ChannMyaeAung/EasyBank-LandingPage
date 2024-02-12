import React from "react";
import styles from "../../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation";
import Description from "./Description";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <div
      className={`z-[1]  shadow-lg  md:flex-row-reverse md:flex md:items-start md:justify-between md:gap-10 md:px-3 md:h-[30rem] lg:px-10 lg:h-[40rem]`}
    >
      {/* Background and mockup images */}
      <HeroImg />

      {/* Intro title, description & a button */}
      <Description />
    </div>
  );
};

export default Hero;
