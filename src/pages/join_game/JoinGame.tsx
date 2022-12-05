import { Button, Center, VStack } from '@chakra-ui/react';
import { useState } from 'react'

import Input from "../../components/inputs/Input"
import { teal_btn_styles } from '../../components/buttons/teal_btn/TealBtnStyles';
import Headline from '../../components/headline/Headline';

const JoinGame = () =>
{
    const [ gameID, setGameID ] = useState('');


  return (
    <>
        <Center
            width='100%'
            height='80%'
        >
            <VStack>
                <Headline>
                    Welcome Yuki
                </Headline>
                <Input
                    _color='teal'
                    _placeholder='Enter the game ID'
                    _onTyping={setGameID}
                />

            <Center
                marginTop='2rem'
                width='100%'
            >
                <Button
                    sx={teal_btn_styles}
                    width='50%'
                >
                    Search
                </Button>
            </Center>
            </VStack>
        </Center>
    </>
  )
}

export default JoinGame