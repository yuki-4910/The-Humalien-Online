import { Input as ChakraInput } from '@chakra-ui/react'

import { teal_input, violet_input } from "./InputStyles"
import { Input_props } from '../../interfaces/props'


const Input = ({ _color, _placeholder, _onTyping }:Input_props) => {
  return (
    <>
        <ChakraInput
            sx={ _color === 'teal' ? teal_input : violet_input}
            variant='unstyled'
            placeholder={_placeholder}
            onChange={ (e) => _onTyping( e.target.value ) }
        />
    </>
  )
}

export default Input