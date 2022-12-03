import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Center,
    Flex,
  } from '@chakra-ui/react'

import CardStacks from '../../card_stacks/CardStacks';
import { OpponentsStackModal_props } from '../../../interfaces/props'
import { violet_btn_styles } from '../../table_buttons/violet_btn/VioletBtnStyles';

const OpponentsStackModal = ({ children, _opponentsStack }: OpponentsStackModal_props) =>
{
    const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
        <span
            onClick={onOpen}
        >
            {
                children
            }
        </span>

        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            // size='lg'
        >

        <ModalOverlay/>

        <ModalContent
            background='#343343'
            maxH='70vh'
            maxW={{ base: '100vw', sm: '95vw', md: '90vw', lg: '80vw' }}
        >
          <ModalHeader
            color='white'
          >
            Opponent's Stack
          </ModalHeader>

          <ModalCloseButton
            color='white'
          />

          <ModalBody
          >
            <Flex
                justifyContent='center'
                alignItems='center'
            >
                <CardStacks
                    _cards={ _opponentsStack }
                    _isDraggable={false}
                    _isDropDisabled={true}
                />
            </Flex>
          </ModalBody>

          <ModalFooter
            marginTop='2rem'
          >
            <Button
                sx={violet_btn_styles}
                marginRight={2}
                onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default OpponentsStackModal