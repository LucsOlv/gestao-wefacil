import { Box, Heading, Text } from "@chakra-ui/react";
import CardResumeItens from "./CardResumeItens/CardResumeItens";

function CardResume() {
  return (
    <Box
      backgroundColor="#fff"
      maxW="sm"
      minH="98%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Heading m="5" mb="0" as="h4" size="md">
        Projetos
      </Heading>
      <CardResumeItens />
    </Box>
  );
}
export default CardResume;
