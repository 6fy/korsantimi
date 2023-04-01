import type { FC, ReactNode } from "react";

type IProps = {
  children: ReactNode;
};
const Layout: FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
