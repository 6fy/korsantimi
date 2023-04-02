import style from "./Navbar.module.css";
import NavbarItem from "@/components/navbarItem/NavbarItem";
import Dropdown from "@/components/dropdown/Dropdown";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();

  return (
    <div className={style.container}>
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
  );
};
export default Navbar;
