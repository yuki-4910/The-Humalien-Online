import { Flex } from "@chakra-ui/react"

import Rounds from "./rounds/Rounds"
import Points from "./points/Points"
import { header_props } from "../../interfaces/props"
import { header_styles } from "./HeaderStyles"

const Header = ({ children }:header_props) => {
  return (
    <>
    <Flex
        sx={header_styles}
    >
        <Flex
            flexWrap='wrap'
            alignItems='center'
            justifyContent='center'
            display='flex'
        >
            <Rounds/>
            <Points/>
        </Flex>
        {
            children
        }
        <Flex
            flexWrap='wrap'
            alignItems='center'
            justifyContent='center'
            opacity='0'
            display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}
        >
            <Rounds/>
            <Points/>
        </Flex>
    </Flex>
    </>
  )
}

export default Header