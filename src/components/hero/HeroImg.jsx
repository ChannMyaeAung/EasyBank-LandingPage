import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation";
export default function HeroImg() {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="relative "
    >
      <img
        src="/bg-intro-mobile.svg"
        alt="intro-mobile"
        className="w-full md:hidden"
      />

      <img
        src="/bg-intro-desktop.svg"
        alt="intro-desktop"
        className="hidden md:block w-[40rem] relative top-0"
      />
      <img
        src="image-mockups.png"
        alt="mockup-img"
        className="absolute top-0 md:w-[40rem]"
      />
    </motion.div>
  );
}
