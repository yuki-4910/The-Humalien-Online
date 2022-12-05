import { Button, Center, Flex, VStack } from "@chakra-ui/react"
import { teal_btn_styles } from "../../components/buttons/teal_btn/TealBtnStyles"
import { violet_btn_styles } from "../../components/buttons/violet_btn/VioletBtnStyles"

import Headline from "../../components/headline/Headline"

const Landing = () => {
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