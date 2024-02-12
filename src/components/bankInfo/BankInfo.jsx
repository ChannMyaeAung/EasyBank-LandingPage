import React from "react";
import { BankInfos } from "../../data.js";
import styles from "../../styles.js";
import Features from "./Features.jsx";

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
          return <Features key={info.id} info={info} />;
        })}
      </div>
    </div>
  );
};

export default BankInfo;
