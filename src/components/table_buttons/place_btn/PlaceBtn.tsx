import { Button } from "@chakra-ui/react"

import { place_btn_styles } from "./PlaceBtnStyles"
import { PlaceBtn_props } from "../../../interfaces/props"

const PlaceBtn = ({ _clickedPlace }:PlaceBtn_props) =>
{



  return (
    <>
        <Button
            as='div'
            sx={place_btn_styles}
            onClick={_clickedPlace? () => _clickedPlace( 'place_btn' ) : ()=>{}}
        >
            Place
        </Button>
    </>
  )
}

export default PlaceBtn