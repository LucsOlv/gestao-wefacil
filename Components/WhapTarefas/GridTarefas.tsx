import { SimpleGrid, Box, Center } from "@chakra-ui/react";
import GridTarefasItens from "./WhapTarefasItens/GridTarefasItens";
import WhapTarefasItens from "./WhapTarefasItens/GridTarefasItens";

export default function WhapTarefas() {
  return (
    <SimpleGrid backgroundColor="#fff" columns={2} spacing="40px">
      <GridTarefasItens />
    </SimpleGrid>
  );
}
