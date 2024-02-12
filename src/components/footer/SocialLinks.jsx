import styles from "../../styles";

export default function SocialLinks() {
  return (
    <div className={`${styles.flexCenter} gap-5 `}>
      <img
        src="/icon-facebook.svg"
        alt="facebook-icon"
        className={`${styles.cursorTransition} hover:scale-125`}
      />
      <img
        src="/icon-youtube.svg"
        alt="youtube-icon"
        className={`${styles.cursorTransition} hover:scale-125`}
      />
      <img
        src="/icon-twitter.svg"
        alt="twitter-icon"
        className={`${styles.cursorTransition} hover:scale-125`}
      />
      <img
        src="/icon-pinterest.svg"
        alt="pinterest-icon"
        className={`${styles.cursorTransition} hover:scale-125`}
      />
      <img
        src="/icon-instagram.svg"
        alt="instagram-icon"
        className={`${styles.cursorTransition} hover:scale-125`}
      />
    </div>
  );
}
