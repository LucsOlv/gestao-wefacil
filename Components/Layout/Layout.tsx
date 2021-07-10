import SideBar from "../SideBar/SideBar";
import React from "react";
import { Box } from "@chakra-ui/react";

const layout: React.FC = ({ children }) => {
  return (
    <Box flexDirection="row" display="flex" flex="1">
      <SideBar />
      {children}
    </Box>
  );
};
export default layout;
