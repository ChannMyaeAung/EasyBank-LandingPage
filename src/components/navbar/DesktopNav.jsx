import { NavLinks } from "../../data";
import styles from "../../styles";
import NavLink from "./NavLink";

export default function DesktopNav() {
  return (
    <>
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>
      <ul className={`${styles.flexCenter} gap-5`}>
        {NavLinks.map((navLink) => {
          const { id, links, content } = navLink;

          return <NavLink key={id} id={id} links={links} content={content} />;
        })}
      </ul>

      <button className={`requestBtn ${styles.cursorTransition} `}>
        Request Invite
      </button>
    </>
  );
}
