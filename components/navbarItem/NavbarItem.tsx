import style from "./NavbarItem.module.css";
import Link from "next/link";
import type { FC } from "react";

type IProps = {
  href: string;
  content: string;
  active?: boolean;
  onClick?: () => void;
};
const NavbarItem: FC<IProps> = ({ content, href, active, onClick }) => {
  return (
    <Link
      onClick={onClick}
      className={active ? style.linkActive : style.link}
      href={href}
    >
      {content}
    </Link>
  );
};

export default NavbarItem;
