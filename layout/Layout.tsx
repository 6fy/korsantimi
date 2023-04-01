import { Box } from "@mui/material";
import type { FC, ReactNode } from "react";

type IProps = {
  children: ReactNode;
};
const Layout: FC<IProps> = ({ children }) => {
  return (
    <Box marginTop="2.5%" marginLeft="2.5%" marginRight="2.5">
      {children}
    </Box>
  );
};

export default Layout;
