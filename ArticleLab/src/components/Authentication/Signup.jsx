import {
  Modal,
  ModalContent,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Login from "./Login";

import { useState } from "react";
import Registration from "./Registration";
const SignUp = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isChecked, setIsChecked] = useState(false);

  const toggleState = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <>
      <Button
        onPress={onOpen}
        size="sm"
        className="bg-orange-400 font-bold tracking-wide rounded-xl hidden md:block"
      >
        SignUp
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <div className="mt-3 mx-auto w-4/5">
                {isChecked ? (
                  <Login toggleState={toggleState} />
                ) : (
                  <Registration toggleState={toggleState} />
                )}
              </div>
              <ModalFooter className="p-2">
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
};

export default SignUp;
