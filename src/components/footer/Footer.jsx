import React from "react";
import styles from "../../styles";
import { footerLinks } from "../../data";
import SocialLinks from "./socialLinks";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    <footer
      className={` bg-darkBlue ${styles.flexCenter}  flex-col md:flex-row md:justify-between md:px-8 gap-6 md:gap-5 py-10`}
    >
      <div className="items-center gap-5 lg:gap-6 md:flex md:justify-around">
        <div
          className={`${styles.flexCenter} flex-col gap-5 md:justify-start md:items-start`}
        >
          {/* logo */}
          <div className="relative text-transparent bg-white bg-clip-text">
            <img src="/logo.svg" alt="" />
            <span className="absolute top-[-8px] font-semibold text-[24px] right-0 text-White">
              easybank
            </span>
          </div>
          {/* social media icons/links */}
          <SocialLinks />
        </div>
        {/* footer navlinks */}
        <div
          className={`${styles.gridCenter} gap-3 grid-cols-1 pt-5 md:grid-cols-2 md:items-start md:justify-start md:gap-x-0 md:w-[18rem] lg:w-[20rem]`}
        >
          {footerLinks.map((link) => (
            <NavLinks key={link.id} link={link} />
          ))}
        </div>
      </div>
      {/* request button */}
      <div className="flex flex-col items-center justify-end gap-3 md:gap-0">
        <button
          className={`requestBtn ${styles.cursorTransition} py-3 px-6 md:mb-5 md:self-end`}
        >
          Request Invite
        </button>
        {/* copy right reserved */}
        <p
          className={`${styles.paragraph} text-center text-[13px] whitespace-nowrap`}
        >
          ©Easybank. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
