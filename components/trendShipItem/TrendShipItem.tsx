import type { FC } from "react";
import style from "./TrendShipItem.module.css";

type IProps = {
  image: string;
  name: string;
};

const TrendShipItem: FC<IProps> = ({ name, image }) => {
  return (
    <div className={style.container}>
      <img src={image} alt={name} className={style.image} />
      <p className={style.name}>{name}</p>
    </div>
  );
};
export default TrendShipItem;
