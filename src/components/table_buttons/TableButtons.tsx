import { Flex } from '@chakra-ui/react'

import { tableButtons_props } from '../../interfaces/props'
import PassBtn from './pass_btn/PassBtn'
import PlaceBtn from './place_btn/PlaceBtn'
import { table_buttons_styles } from './TableButtonsStyles'

const TableButtons = ({ children }:tableButtons_props) =>
{



  return (
    <>
    <Flex
        sx={ table_buttons_styles }
    >
        <Flex
            flexWrap='wrap'
            alignItems='center'
            justifyContent='center'
            opacity='0'
            display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}
        >
            <PassBtn/>
            <PlaceBtn/>
        </Flex>
        {
            children
        }

        <Flex
            flexWrap='wrap'
            alignItems='center'
            justifyContent='center'
            display='flex'
        >
            <PassBtn/>
            <PlaceBtn/>
        </Flex>

    </Flex>
    </>
  )
}

export default TableButtons