import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
} from "@chakra-ui/react";

import TableMovItens from "./TableMovItens/TableMovItens";

const TableMov = () => {
  return (
    <Box
      backgroundColor="#fff"
      minH="98%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Table size="sm" variant="striped" colorScheme="gray">
        <TableCaption>Ultimas Movimentações</TableCaption>
        <Thead>
          <Tr>
            <Th>Data</Th>
            <Th>Descrição</Th>
            <Th isNumeric>Valor</Th>
          </Tr>
        </Thead>
        <Tbody>
          <TableMovItens />
        </Tbody>
      </Table>
    </Box>
  );
};
export default TableMov;
