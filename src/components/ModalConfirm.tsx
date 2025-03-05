import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { Check, X } from "@phosphor-icons/react";
import React from "react";

export interface ModalProps {
  headerText: string;
  isOpen: boolean;
  onAction: () => void;
  setIsOpen: (arg0: boolean) => void;
}

const ModalConfirm: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  onAction,
  headerText,
}) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAction = () => {
    onAction();
    setIsOpen(false);
  };

  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onClose={closeModal}
        radius="lg"
        placement="center"
      >
        <ModalContent className="bg-gray-200 p-4 flex gap-4">
          <ModalHeader className="flex flex-col gap-8 text-center p-2">
            <p className="text-base text-start">{headerText}</p>
          </ModalHeader>
          <ModalFooter className="flex justify-end p-1">
            <Button
              color="danger"
              onClick={closeModal}
              variant="flat"
              size="sm"
              endContent={<X weight="bold" />}
              aria-label="Cancelar"
            >
              CANCELAR
            </Button>
            <Button
              color="secondary"
              onClick={handleAction}
              endContent={<Check weight="bold" />}
              aria-label="Confirmar"
              size="sm"
            >
              CONFIRMAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalConfirm;
