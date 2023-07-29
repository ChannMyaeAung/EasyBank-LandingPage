import React from "react";
import { latestArticles } from "../data";
import styles from "../styles";
import { useInView } from "react-intersection-observer";

const LatestArticles = () => {
  const options = {
    rootMargin: "30px",
    threshold: 0,
    triggerOnce: true,
  };

  const { ref, inView } = useInView(options);
  return (
    <div className="pb-16 bg-white md:px-6 lg:px-10">
      {/* Title */}
      <h1 className={`${styles.heading} text-center py-10 md:text-left`}>
        Latest Articles
      </h1>

      {/* Content Boxes */}
      <div
        ref={ref}
        className={`${styles.gridCenter} ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px] "
        } grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 duration-1000 ease-in-out`}
      >
        {latestArticles.map((article) => {
          const { id, img, author, title, description } = article;

          return (
            <article
              key={id}
              className={`shadow-lg w-[90%] max-w-[400px] md:h-[500px] lg:h-full lg:w-full mx-auto rounded-lg ${styles.cursorTransition} hover:bg-[#eaeaea] hover:scale-105`}
            >
              <div>
                <img
                  src={img}
                  alt={img}
                  className="rounded-t-lg aspect-[4/3]"
                />
              </div>

              <div className="p-8">
                <span
                  className={`${styles.paragraph} text-[12px] tracking-[0.5px]`}
                >
                  By {author}
                </span>
                <h2 className={`${styles.heading2} text-[20px] my-2`}>
                  {title}
                </h2>
                <p className={`${styles.paragraph} text-[14px]`}>
                  {description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default LatestArticles;
