import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../animation";

const Hero = () => {
  return (
    <div
      className={`z-[1]  shadow-lg  md:flex-row-reverse md:flex md:items-start md:justify-between md:gap-10 md:px-3 md:h-[30rem] lg:px-10 lg:h-[40rem]`}
    >
      {/* Background and mockup images */}
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

      {/* Intro title, description & a button */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className={`py-16 md:py-0 md:my-0 md:self-center mt-10 ${styles.flexCenter} md:items-start md:justify-start flex-col gap-3`}
      >
        <h1 className={`${styles.heading} text-justify md:text-left`}>
          Next generation <br /> digital banking
        </h1>

        <p className={`mb-3 text-justify ${styles.paragraph}`}>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <button
          className={`requestBtn ${styles.cursorTransition} py-3 px-6 md:mb-5`}
        >
          Request Invite
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
