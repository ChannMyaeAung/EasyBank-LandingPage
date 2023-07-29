import React, { useEffect, useRef } from "react";
import styles from "../styles";
import { NavLinks } from "../data";
const Navbar = ({ isNavOpen, setIsNavOpen }) => {
  const navMenuRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navMenuRef.current && !navMenuRef.current.contains(e.target)) {
        setIsNavOpen(false);
      }
    };
    if (isNavOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isNavOpen]);

  const toggleNavAndModal = (e) => {
    e.stopPropagation(); // Prevent event propagation to the document
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="z-[999]">
      {/* NavBar Mobile */}
      <div
        className={`bg-white shadow-lg ${styles.flexBetween} z-[999] p-4 md:hidden`}
      >
        {/* Logo */}
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>

        {/* Mobile NavToggle */}
        <button
          className={`${styles.cursorTransition} hover:scale-125 z-[999]`}
          onClick={toggleNavAndModal}
        >
          {isNavOpen ? (
            <img src="/icon-close.svg" alt="nav-toggle-close" />
          ) : (
            <img
              src="/icon-hamburger.svg"
              alt="nav-toggle-open"
              className="w-[31px]"
            />
          )}
        </button>

        {/* Nav Links Mobile*/}
        <div
          ref={navMenuRef}
          className={`navLinksMobile ${isNavOpen ? "block" : "hidden"} z-20`}
        >
          <ul className={`${styles.flexCenter} flex-col gap-5 py-6`}>
            {NavLinks.map((navLink) => {
              const { id, links, content } = navLink;

              return (
                <li
                  key={id}
                  className={`${styles.cursorTransition} hover:text-limeGreen hover:tracking-[3px]`}
                >
                  <a href={links}>{content}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* NavBar Desktop */}
      <div
        className={`hidden md:flex ${styles.flexBetween} p-4 bg-white shadow-lg`}
      >
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>
        <ul className={`${styles.flexCenter} gap-5`}>
          {NavLinks.map((navLink) => {
            const { id, links, content } = navLink;

            return (
              <li
                key={id}
                className={`${styles.cursorTransition} pb-1 text-[14px] hover:text-limeGreen hover:tracking-[3px] hover:border-b-3 hover:border-b-2 hover:border-b-limeGreen`}
              >
                <a href={links}>{content}</a>
              </li>
            );
          })}
        </ul>

        <button className={`requestBtn ${styles.cursorTransition} `}>
          Request Invite
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
