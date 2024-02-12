import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles";
import { fadeIn } from "../../animation";
export default function Description() {
  return (
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
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>

      <button
        className={`requestBtn ${styles.cursorTransition} py-3 px-6 md:mb-5`}
      >
        Request Invite
      </button>
    </motion.div>
  );
}
