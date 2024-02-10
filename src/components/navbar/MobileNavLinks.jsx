import styles from "../../styles";
import { NavLinks } from "../../data";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

export default function MobileNavLinks({ isNavOpen }) {
  const variants = {
    open: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.4 } },
    closed: { opacity: 0, x: "100%", transition: { duration: 0.4 } },
  };
  return (
    <motion.div
      variants={variants}
      animate={isNavOpen ? "open" : "closed"}
      className={`navLinksMobile ${isNavOpen ? "block" : "hidden"} z-20`}
    >
      <ul className={`${styles.flexCenter} flex-col gap-5 py-6`}>
        {NavLinks.map((navLink) => {
          const { id, links, content } = navLink;

          return <NavLink key={id} id={id} links={links} content={content} />;
        })}
      </ul>
    </motion.div>
  );
}
