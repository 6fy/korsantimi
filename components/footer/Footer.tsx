import style from "./Footer.module.css";
import Link from "next/link";
import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.bottomNavigation}>
        <div className={style.logoContainer}>
          <h1>Logo</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>@logo</p>
        </div>
        <div className={style.bottomNavigationLinkContainer}>
          <h3>Navigation</h3>
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Korsantimi News</Link>
          <Link href="/">Download</Link>
          <Link href="/">Wiki</Link>
        </div>
        <div className={style.bottomNavigationContent}>
          <h3>Content us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>+49 000 000 000</p>
        </div>
        <div className={style.bottomNavigationSocialMedia}>
          <Link href="" className={style.socialMedia}>
            <FiFacebook />
          </Link>
          <Link href="" className={style.socialMedia}>
            <FiInstagram />
          </Link>
          <Link href="" className={style.socialMedia}>
            <FiTwitter />
          </Link>
          <Link href="" className={style.socialMedia}>
            <FiLinkedin />
          </Link>
        </div>
      </div>
      <p>Copyright ® 2023 mertsabinov</p>
    </div>
  );
};

export default Footer;
