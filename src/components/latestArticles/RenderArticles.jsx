import styles from "../../styles";

export default function RenderArticles({
  id,
  img,
  title,
  author,
  description,
}) {
  return (
    <article
      key={id}
      className={`shadow-lg w-[90%] max-w-[400px] md:h-[500px] lg:h-full lg:w-full mx-auto rounded-lg ${styles.cursorTransition} hover:bg-[#eaeaea] hover:scale-105`}
    >
      <div>
        <img src={img} alt={img} className="rounded-t-lg aspect-[4/3]" />
      </div>

      <div className="p-8">
        <span className={`${styles.paragraph} text-[12px] tracking-[0.5px]`}>
          By {author}
        </span>
        <h2 className={`${styles.heading2} text-[20px] my-2`}>{title}</h2>
        <p className={`${styles.paragraph} text-[14px]`}>{description}</p>
      </div>
    </article>
  );
}
