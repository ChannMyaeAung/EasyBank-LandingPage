import React from "react";
import { latestArticles } from "../../data";
import styles from "../../styles";
import { useInView } from "react-intersection-observer";
import RenderArticles from "./RenderArticles";

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
            <RenderArticles
              key={id}
              id={id}
              img={img}
              author={author}
              title={title}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestArticles;
