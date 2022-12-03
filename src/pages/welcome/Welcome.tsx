import { Button, Center, Heading, Input, VStack } from "@chakra-ui/react"

import { welcome_text, welcome_input } from "./WelcomeStyles"
import { teal_btn_styles } from "../../components/table_buttons/teal_btn/TealBtnStyles"

const Welcome = () =>
{
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
                sx={welcome_input}
                variant='unstyled'
                placeholder="Enter you user name"

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