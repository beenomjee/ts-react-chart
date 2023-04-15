import React, { FC } from "react";
import styles from "./Home.module.css";
import { BottomCard, LeftCard, LineChart } from "../../components";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <LeftCard />
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <LineChart />
        </div>
        <div className={styles.bottom}>
          <BottomCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
