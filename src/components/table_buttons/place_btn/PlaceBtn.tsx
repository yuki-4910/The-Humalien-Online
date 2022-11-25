import { Button } from "@chakra-ui/react"

import { place_btn_styles } from "./PlaceBtnStyles"

const PlaceBtn = () =>
{



  return (
    <>
        <Button
            as='div'
            sx={place_btn_styles}
        >
            Place
        </Button>
    </>
  )
}

export default PlaceBtn