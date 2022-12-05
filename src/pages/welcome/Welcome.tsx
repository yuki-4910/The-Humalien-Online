import { useState } from "react"
import { Button, Center, VStack } from "@chakra-ui/react"

import { teal_btn_styles } from "../../components/buttons/teal_btn/TealBtnStyles"
import Input from "../../components/inputs/Input"
import Headline from "../../components/headline/Headline"

const Welcome = () =>
{
    const [ userName, setUserName ] = useState('')

    console.log(userName);

  return (
    <>
    <Center
        width='100%'
        height='80%'
    >
        <VStack>
            <Headline>
                Welcome to
                <br/>
                the Humalien
            </Headline>

            <Input
                _color='teal'
                _placeholder='Enter your use name'
                _onTyping={setUserName}
            />

            <Center
                marginTop='2rem'
                width='100%'
            >
                <Button
                    sx={teal_btn_styles}
                    width='50%'
                >
                    Play
                </Button>
            </Center>
        </VStack>
    </Center>
    </>
  )
}

export default Welcome