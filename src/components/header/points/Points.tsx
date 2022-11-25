import { Box, Heading } from "@chakra-ui/react"

import { point_container, point_number } from "./PointsStyles"

const Points = () =>
{
  return (
    <>
        <Box
            sx={point_container}
        >
            <Heading
                sx={point_number}
            >
                666pt
            </Heading>
        </Box>
    </>
  )
}

export default Points