import Sidebar from "@/components/Sidebar"
import { Button, Stack } from "@mui/material"

const home=()=>{
    return(
        <Stack sx={{ overflowY: "scroll", height: "100vh" }}>
            <Sidebar />
        </Stack>
    )
}
export default home