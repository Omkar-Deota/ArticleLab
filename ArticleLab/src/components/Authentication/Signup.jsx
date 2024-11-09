import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Login from "./Login";

import { Switch } from "@nextui-org/react";

import { useState } from "react";
import Registration from "./Registration";
export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked) => {
    setIsChecked(checked);
  };
  return (
    <>
      <Button onPress={onOpen} size="sm">
        SignUp
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="mb-4 flex justify-center">
                  <Switch
                    checked={isChecked}
                    onChange={(e) => handleChange(e.target.checked)}
                    size="lg"
                  />
                </div>
              </ModalHeader>
              <ModalBody></ModalBody>

              <div className="mt-6 mx-auto w-4/5">
                {isChecked ? <Login /> : <Registration />}
              </div>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  size="md"
                  onPress={onClose}
                >
                  Close
                </Button>

                <Button color="primary" size="md" onPress={onClose}>
                  {isChecked ? <p>Submit</p> : <p>Register</p>}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
