import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const TableMovItens = () => {
  const dados = [
    {
      id: 1,
      Descricao: "Pagamento Mês",
      Data: "06/07/2021",
      Valor: 1500,
    },
    {
      id: 2,
      Descricao: "Estacio",
      Data: "07/07/ 2021",
      Valor: -256.95,
    },
    {
      id: 3,
      Descricao: "Comida",
      Data: "20 / 11 / 2021",
      Valor: -50.0,
    },
    {
      id: 4,
      Descricao: "Alugel",
      Data: "20 / 11 / 2021",
      Valor: -500,
    },
    {
      id: 5,
      Descricao: "Despesas Gerais",
      Data: "20 / 11 / 2021",
      Valor: -98.56,
    },
  ];

  return dados.map((m, index) => {
    return (
      <Tr
        onClick={() => {
          console.log(m.id);
        }}
        key={index}
      >
        <Td>{m.Data}</Td>
        <Td>{m.Descricao}</Td>
        <Td isNumeric>{m.Valor}</Td>
      </Tr>
    );
  });
};
export default TableMovItens;
