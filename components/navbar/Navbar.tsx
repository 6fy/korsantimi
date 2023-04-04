import style from "./Navbar.module.css";
import NavbarItem from "@/components/navbarItem/NavbarItem";
import Dropdown from "@/components/dropdown/Dropdown";
import { useRouter } from "next/router";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
const Navbar = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hamburgerMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <>
      {isOpen ? (
        <FiX onClick={hamburgerMenu} className={style.menuIcon} />
      ) : (
        <FiMenu onClick={hamburgerMenu} className={style.menuIcon} />
      )}
      <div className={isOpen ? style.containerActive : style.container}>
        <div className={style.navbarLeft}>
          <NavbarItem href="" content="Home" active={router.pathname === "/"} />
          <NavbarItem href="" content="Shop" />
          <NavbarItem href="" content="Korsantimi News" />
          <NavbarItem href="" content="Download" />
          <Dropdown content="Language">
            <NavbarItem href="" content="English" />
            <NavbarItem href="" content="French" />
          </Dropdown>
        </div>
        <div className={style.navbarRight}>
          <NavbarItem href="" content="wiki" />
        </div>
      </div>
    </>
  );
};
export default Navbar;
