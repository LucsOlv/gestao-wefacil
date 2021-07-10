import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useState } from "react";

const TarefasRapidasItens = ({ SubTarefas, TrocarMarcacao }: any) => {
  return SubTarefas.map((m: any, index: number) => {
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
