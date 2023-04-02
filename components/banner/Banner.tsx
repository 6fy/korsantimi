import type { FC } from "react";
import style from "./Banner.module.css";

type IPorps = {
  title: string;
};
const Banner: FC<IPorps> = ({ title }) => {
  return <h1 className={style.h1}>{title}</h1>;
};

export default Banner;
