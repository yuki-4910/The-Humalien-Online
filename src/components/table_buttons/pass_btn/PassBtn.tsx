import { Button } from "@chakra-ui/react"
import { pass_btn_styles } from "./PassBtnStyles"
import { PassBtn_props } from "../../../interfaces/props"

const PassBtn = ({ _clickedPass }:PassBtn_props) =>
{
  return (
    <>
        <Button
            sx={pass_btn_styles}
            onClick={_clickedPass? () => _clickedPass( 'pass_btn' ) : ()=>{}}
        >
            Pass
        </Button>
    </>
  )
}

export default PassBtn