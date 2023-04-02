import style from "./TrendShip.module.css";
import type { FC } from "react";
import TrendShipItem from "@/components/trendShipItem/TrendShipItem";

const TrendShip = () => {
  return (
    <div className={style.container}>
      <div className={style.stackRow}>
        <h1>Currently Trending Ships</h1>
        <button className={style.button}>SEE ALL</button>
      </div>
      <div className={style.trendShipContainer}>
        <TrendShipItem
          image="https://board-tr.seafight.com/attachments/sea-hawk-png.858/"
          name="Seahawk"
        />
        <TrendShipItem
          image="https://board-tr.seafight.com/attachments/apricum-png.845/"
          name="Apricum"
        />
        <TrendShipItem
          image="https://board-tr.seafight.com/attachments/abaddon-png.851/"
          name="Brute"
        />
        <TrendShipItem
          image="https://board-tr.seafight.com/attachments/conqueror-png.882/"
          name="Conqueror"
        />
      </div>
    </div>
  );
};
export default TrendShip;
