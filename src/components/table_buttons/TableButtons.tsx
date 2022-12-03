import { Flex } from '@chakra-ui/react'

import { tableButtons_props } from '../../interfaces/props'
import VioletBtn from './violet_btn/VioletBtn'
import PlaceBtn from './teal_btn/TealBtn'
import { table_buttons_styles } from './TableButtonsStyles'

const TableButtons = ({ children, _clickedPlace, _clickedPass }:tableButtons_props) =>
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
            <VioletBtn/>
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
            <VioletBtn
                _clickedPass={() => _clickedPass( 'pass_btn' ) }
            />
            <PlaceBtn
                _clickedPlace={ () => _clickedPlace( 'place_btn' ) }
            />
        </Flex>
    </Flex>
    </>
  )
}

export default TableButtons