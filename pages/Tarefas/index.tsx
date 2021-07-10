import { Heading, Box, Center, Text, Divider, Button } from "@chakra-ui/react";
import ModalProjetos from "../../Components/ModalProjetos/ModalProjetos";
import TarefasRapidas from "../../Components/TarefasRapidas/TarefasRapidas";
import WhapTarefas from "../../Components/WhapTarefas/GridTarefas";

export default function Tarefas() {
  return (
    <Box flex="1" flexDirection="row" display="flex">
      <Box
        flex="1"
        margin="5"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Heading margin="5" mb="0" as="h4" size="md">
            Projetos
          </Heading>
          <Box margin="1">
            <ModalProjetos />
          </Box>
        </Box>
        <Divider />
        <WhapTarefas />
      </Box>
      <Box
        flex="1"
        margin="5"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Heading m="5" mb="0" as="h4" size="md">
          Tarefas Rapidas
        </Heading>
        <Divider />
        <TarefasRapidas />
      </Box>
    </Box>
  );
}
