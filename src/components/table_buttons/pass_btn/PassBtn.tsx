import { Button } from "@chakra-ui/react"
import { pass_btn_styles } from "./PassBtnStyles"

const PassBtn = () =>
{
  return (
    <>
        <Button
            as='div'
            sx={pass_btn_styles}
        >
            Pass
        </Button>
    </>
  )
}

export default PassBtn