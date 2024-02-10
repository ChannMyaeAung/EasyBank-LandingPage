import React, { useState } from "react";
import styles from "../../styles";
import MobileToggle from "./MobileToggle";
import MobileNavLinks from "./MobileNavLinks";
import DesktopNav from "./DesktopNav";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavAndModal = () => {
    setIsNavOpen((s) => !s);
  };

  return (
    <nav className="z-[999]">
      {/* NavBar Mobile */}
      <div
        className={`bg-white shadow-lg ${styles.flexBetween} z-[9999] p-4 md:hidden`}
      >
        {/* Logo */}
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>

        {/* Mobile NavToggle */}
        <MobileToggle
          isNavOpen={isNavOpen}
          toggleNavAndModal={toggleNavAndModal}
        />

        {/* Nav Links Mobile*/}
        <MobileNavLinks isNavOpen={isNavOpen} />
      </div>

      {/* Overlay when navbar is open */}
      {isNavOpen && (
        <div className="absolute top-18 z-[2] w-full h-full bg-black/40 md:hidden" />
      )}

      {/* NavBar Desktop */}
      <div
        className={`hidden md:flex ${styles.flexBetween} p-4 bg-white shadow-lg`}
      >
        <DesktopNav />
      </div>
    </nav>
  );
};

export default Navbar;
