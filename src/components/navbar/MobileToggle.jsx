import styles from "../../styles";

export default function MobileToggle({ toggleNavAndModal, isNavOpen }) {
  return (
    <button
      className={`${styles.cursorTransition} hover:scale-125 z-[999] ${
        isNavOpen ? "open" : ""
      } toggleMenu`}
      onClick={toggleNavAndModal}
    >
      <div className="toggleMenu__topBar"></div>
      <div className="toggleMenu__bottomBar"></div>
    </button>
  );
}
