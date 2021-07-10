import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useState } from "react";

const TarefasRapidasItens = ({ SubTarefas, TrocarMarcacao }) => {
  return SubTarefas.map((m, index) => {
    return (
      <Box key={index}>
        <Stack pl={6} mt={1} spacing={1}>
          <Checkbox
            isChecked={m.isCheck}
            onChange={TrocarMarcacao(m.id, m.isCheck)}
          >
            {m.Descricao}
          </Checkbox>
        </Stack>
      </Box>
    );
  });
};
export default TarefasRapidasItens;
