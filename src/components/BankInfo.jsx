import React from "react";
import { BankInfos } from "../data.js";
import styles from "../styles.js";

const BankInfo = () => {
  return (
    <div className=" bg-veryLightGray md:px-6 lg:px-10">
      {/* Intro heading & description */}
      <div
        className={`${styles.flexCenter} flex-col gap-3 pt-16 mb-10 md:justify-start md:items-start`}
      >
        <h1 className={`${styles.heading}`}>
          Why choose <br /> Easybank?
        </h1>
        <p className={`${styles.paragraph}`}>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      {/* All features */}
      <div
        className={`${styles.flexCenter} md:items-start md:justify-start flex-col md:flex-row gap-5 py-10`}
      >
        {BankInfos.map((info) => {
          //destructuring info
          const { id, img, title, description } = info;

          return (
            <article
              key={id}
              className={`${styles.flexCenter} md:justify-start md:items-start flex-col gap-4`}
            >
              <div>
                <img src={img} alt={img} />
              </div>
              <h1 className={`${styles.heading2}`}>{title}</h1>
              <p
                className={`${styles.paragraph} text-[14px] lg:text-[16px] text-center md:text-left`}
              >
                {description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default BankInfo;
