import { Button } from "@chakra-ui/react"

import { teal_btn_styles } from "./TealBtnStyles"
import { PlaceBtn_props } from "../../../interfaces/props"

const TealBtn = ({ _clickedPlace }:PlaceBtn_props) =>
{



  return (
    <>
        <Button
            sx={teal_btn_styles}
            onClick={_clickedPlace? () => _clickedPlace( ) : ()=>{}}
        >
            Place
        </Button>
    </>
  )
}

export default TealBtn