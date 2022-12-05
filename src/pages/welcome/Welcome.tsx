import { useState } from "react"
import { Button, Center, Heading, VStack } from "@chakra-ui/react"

import { welcome_text, welcome_input } from "./WelcomeStyles"
import { teal_btn_styles } from "../../components/buttons/teal_btn/TealBtnStyles"
import Input from "../../components/inputs/Input"

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
            <Heading
                sx={welcome_text}
                size={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
            >
                Welcome to
                <br/>
                the Humalien
            </Heading>

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