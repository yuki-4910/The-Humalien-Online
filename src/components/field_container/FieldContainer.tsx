import { IconButton, Flex } from "@chakra-ui/react"
import { Icon } from '@iconify/react';

import { FieldContainer_props } from "../../interfaces/props"
import { field_container_styles, stack_icon_styles } from "./FieldContainerStyles"

const FieldContainer = ({ children }: FieldContainer_props) =>
{
  return (
    <>
        <Flex
            sx={ field_container_styles }
        >
            <Flex
                flexWrap='wrap'
                alignItems='center'
                justifyContent='center'
                opacity='0'
            >
                <IconButton
                    sx={stack_icon_styles}
                    as='div'
                    isDisabled={true}
                    aria-label='opponents_stack_icon'
                    icon={<Icon icon='mdi:cards-outline' />}
                    borderRadius='50%'
                />
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
                <IconButton
                    sx={stack_icon_styles}
                    as='div'
                    aria-label='opponents_stack_icon'
                    icon={<Icon icon='mdi:cards-outline' />}
                    borderRadius='50%'
                />
            </Flex>
        </Flex>
    </>
  )
}

export default FieldContainer