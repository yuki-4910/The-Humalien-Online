import { useState } from 'react'
import { Button, Center, VStack } from '@chakra-ui/react'

import Headline from '../../components/headline/Headline'
import Input from '../../components/inputs/Input'
import { violet_btn_styles } from '../../components/buttons/violet_btn/VioletBtnStyles'

const CreateGame = () =>
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
                    _color='violet'
                    _placeholder='Enter the game ID'
                    _onTyping={setGameID}
                />

            <Center
                marginTop='2rem'
                width='100%'
            >
                <Button
                    sx={ violet_btn_styles }
                    width='50%'
                >
                    Create
                </Button>
            </Center>
            </VStack>
        </Center>
    </>
  )
}

export default CreateGame