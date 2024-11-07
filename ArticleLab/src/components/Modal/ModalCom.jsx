import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Signup from "../Signup";

const ModalCom = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const sizes = ["md"];
  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <Button size="sm" key={size} onPress={() => handleOpen(size)}>
            signup
          </Button>
        ))}
      </div>
      <Modal size={size} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 my-5">
                <Signup/>
              </ModalHeader>
            
              
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalCom;
