import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";

const ModalProjetos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  return (
    <>
      <Button onClick={onOpen}>Novo Projeto</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Criar Um Novo Projeto</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Heading marginBottom="5" as="h4" size="sm">
                Descrição
              </Heading>
              <Input placeholder="Descrição" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Salvar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalProjetos;
