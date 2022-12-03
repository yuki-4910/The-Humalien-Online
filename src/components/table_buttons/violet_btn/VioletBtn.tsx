import { Button } from "@chakra-ui/react"
import { violet_btn_styles } from "./VioletBtnStyles"
import { PassBtn_props } from "../../../interfaces/props"

const VioletBtn = ({ _clickedPass }:PassBtn_props) =>
{
  return (
    <>
        <Button
            sx={violet_btn_styles}
            onClick={_clickedPass? () => _clickedPass( ) : ()=>{}}
        >
            Pass
        </Button>
    </>
  )
}

export default VioletBtn