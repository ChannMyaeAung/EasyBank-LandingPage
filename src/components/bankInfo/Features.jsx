import styles from "../../styles";

export default function Features({ info }) {
  return (
    <article
      className={`${styles.flexCenter} md:justify-start md:items-start flex-col gap-4`}
    >
      <div>
        <img src={info.img} alt={info.title} />
      </div>
      <h1 className={`${styles.heading2}`}>{info.title}</h1>
      <p
        className={`${styles.paragraph} text-[14px] lg:text-[16px] text-center md:text-left`}
      >
        {info.description}
      </p>
    </article>
  );
}
