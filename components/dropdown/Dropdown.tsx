import style from "./Dropdown.module.css";
import type { FC, ReactNode } from "react";

type IProps = {
  content: string;
  children?: ReactNode;
};

const Dropdown: FC<IProps> = ({ content, children }) => {
  return (
    <div className={style.container}>
      <button className={style.dropdownButton}>{content}</button>
      <div className={style.dropdownContent}>{children}</div>
    </div>
  );
};

export default Dropdown;
