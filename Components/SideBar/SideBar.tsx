import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import styles from "./SideBar.module.css";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { HiViewList } from "react-icons/hi";
import React from "react";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
const SideBar = () => {
  const [menu, setmenu] = useState(true);

  return (
    <Box minH="100vh" display="flex">
      <ProSidebar collapsed={menu}>
        <Menu>
          <MenuItem
            onClick={() => setmenu(!menu)}
            icon={<HiViewList />}
          ></MenuItem>
          <MenuItem icon={<AiFillHome />}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </MenuItem>
          <MenuItem icon={<BsListTask />}>
            <Link href="/Tarefas/">
              <a>Tarefas</a>
            </Link>
          </MenuItem>
          <MenuItem icon={<FaRegMoneyBillAlt />}>
            <Link href="/Financeiro/">
              <a>Finaceiro</a>
            </Link>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
