import React from "react";
import styles from "../../styles";

export default function NavLink({ id, links, content }) {
  return (
    <li
      key={id}
      className={`${styles.cursorTransition} hover:text-limeGreen hover:tracking-[3px]`}
    >
      <a href={links}>{content}</a>
    </li>
  );
}
