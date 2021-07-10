import Chart from "../Components/GraficoHome/Chart";
import styles from "../styles/Home.module.css";
import { userData } from "../dummyData";
import CardResume from "../Components/CardResume/CardResume.Home";
import { Box, Flex } from "@chakra-ui/react";
import TableMov from "../Components/TableMov/TableMov";

export default function Home() {
  return (
    <Box flexDirection="row" flex="1" display="flex">
      <Box flex="1" >
        <CardResume />
      </Box>
      <Box flex="2.3">
        <Box>
          <Chart data={userData} title="Gastos" grid dataKey="Active User" />
        </Box>
        <Box>
          <TableMov />
        </Box>
      </Box>
    </Box>
  );
}
