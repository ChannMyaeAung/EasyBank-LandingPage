import styles from "../../styles";

export default function NavLinks({ link }) {
  return (
    <ul>
      <li
        className={`${styles.cursorTransition} hover:tracking-[2px] hover:text-limeGreen text-White text-center md:text-left`}
      >
        <a href={link.linkTo}>{link.content}</a>
      </li>
    </ul>
  );
}
