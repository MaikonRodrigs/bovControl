import React from 'react'

import {
  Modal as ModalComponent,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

interface CustomModalProps {
  isOpen?: boolean
  onClose?: () => void
  handleConfirmed: () => void
  title: string
  children: React.ReactNode
  confirmedtext: string
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen = false,
  onClose,
  handleConfirmed,
  title,
  children,
  confirmedtext,
}) => {
  const { isOpen: isModalOpen, onOpen, onClose: closeModal } = useDisclosure()

  const handleClose = () => {
    if (onClose) {
      onClose()
    } else {
      closeModal()
    }
  }

  return (
    <>
      <ModalComponent
        isOpen={isOpen || isModalOpen}
        onClose={handleClose}
        isCentered
      >
        <ModalOverlay bg={'blackAlpha.300'} backdropFilter={'blur(10px)'} />

        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button onClick={handleClose} size={'lg'} width={'full'} mr={3}>
              Fechar
            </Button>
            <Button
              onClick={handleConfirmed}
              size={'lg'}
              width={'full'}
              variant={'solid'}
              colorScheme='teal'
            >
              {confirmedtext}
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalComponent>
    </>
  )
}

export default CustomModal
