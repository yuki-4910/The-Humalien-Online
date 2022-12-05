import { ReactNode } from 'react';
import { Heading } from "@chakra-ui/react";

import { headline_text } from './HeadlineStyles'

interface Props {
    children: ReactNode;
}

const Headline = ({children}:Props) => {
  return (
    <>
    <Heading
        sx={headline_text}
        size={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
    >
        {
            children
        }
    </Heading>
    </>
  )
}

export default Headline