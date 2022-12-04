import { Button, Center, Flex, Heading, VStack } from "@chakra-ui/react"
import { teal_btn_styles } from "../../components/table_buttons/teal_btn/TealBtnStyles"
import { violet_btn_styles } from "../../components/table_buttons/violet_btn/VioletBtnStyles"

import { landing_text } from "./LandingStyles"

const Landing = () => {
  return (
    <>
        <Center
            width='100%'
            height='80%'
        >
            <VStack>
                <Heading
                    sx={landing_text}
                    size={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
                >
                    Welcome Yuki
                </Heading>

                <Center
                marginTop='2rem'
                width='100%'
                >
                    <Flex
                        flexDirection={{ base: 'column', sm: 'row', md: 'row', lg: 'row' }}
                    >
                        <Button
                            sx={violet_btn_styles}
                            width={{ base: '100%', sm: '50%', md: '50%', lg: '50%' }}
                        >
                            Create Room
                        </Button>

                        <Button
                            sx={teal_btn_styles}
                            width={{ base: '100%', sm: '50%', md: '50%', lg: '50%' }}
                        >
                            Join Game
                        </Button>
                    </Flex>
            </Center>
            </VStack>
        </Center>
    </>
  )
}

export default Landing