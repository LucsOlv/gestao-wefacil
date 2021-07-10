import { Wrap, WrapItem, Box, Center, Heading, Text } from "@chakra-ui/react";
import CardResumeItens from "../../CardResume/CardResumeItens/CardResumeItens";
import { useRouter } from "next/router";

const GridTarefasItens = () => {
  const router = useRouter();

  let dados = [
    {
      id: 1,
      Descricao: "React.js FrontEnd",
      DataCadastro: "06/07/2021",
      QtdSubTarefas: 5,
      QtdSubConcluidas: 3,
      DataTermino: "22/07/2021",
    },
    {
      id: 2,
      Descricao: "Node.Js BackEnd",
      DataCadastro: "06/07/2021",
      QtdSubTarefas: 10,
      QtdSubConcluidas: 3,
      DataTermino: "22/07/2021",
    },
  ];
  return dados.map((m, index) => {
    return (
      <Box
        key={index}
        maxW="sm"
        maxH="sm"
        borderWidth="1px"
        margin="3"
        borderRadius="lg"
        overflow="hidden"
        onClick={() => router.push(`/Tarefas/Projeto/${m.id}`)}
      >
        <Box>
          <Heading m="5" mb="0" as="h4" size="md">
            {m.Descricao}
          </Heading>
          <Text m="5" mt="0">
            Tarefas {m.QtdSubConcluidas}/{m.QtdSubTarefas}
          </Text>
        </Box>
      </Box>
    );
  });
};
export default GridTarefasItens;
