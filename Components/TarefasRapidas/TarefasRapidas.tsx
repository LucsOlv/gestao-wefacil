import { Box, Checkbox, Divider, Stack } from "@chakra-ui/react";
import { useState } from "react";
import TarefasRapidasItens from "./TarefasRapidasItens/TarefasRapidasItens";

const TarefasRapidas = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const TrocarMarcacao = (Id: number, isCheck: boolean) => {
    console.log(Id, Boolean);
  };

  var dados = [
    {
      id: 1,
      Descricao: "Aprender C#",
      isCheck: false,
      SubTarefas: [
        {
          id: 1,
          Descricao: "Visual Studio",
          isCheck: true,
        },
        {
          id: 1,
          Descricao: "Visual Code",
          isCheck: false,
        },
      ],
    },
  ];

  return dados.map((m, index) => {
    return (
      <Box backgroundColor="#fff" margin="5" key={index}>
        <Checkbox
          isChecked={m.isCheck}
          isIndeterminate={isIndeterminate}
          onChange={e => setCheckedItems([e.target.checked, e.target.checked])}
        >
          {m.Descricao}
        </Checkbox>
        <TarefasRapidasItens
          SubTarefas={m.SubTarefas}
          TrocarMarcacao={TrocarMarcacao}
        />
        <Divider />
      </Box>
    );
  });
};
export default TarefasRapidas;
