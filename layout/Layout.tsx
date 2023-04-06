import type { FC, ReactNode } from "react";
import styles from "./Layout.module.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

type IProps = {
  children: ReactNode;
};
const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
