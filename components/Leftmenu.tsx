import { Box, Button, TextField } from "@mui/material"
import { Stack } from "@mui/system"
import { useRouter } from "next/router"

const styles = {
    button: {
        borderRadius: '8px',
        color: 'black',
        backgroundColor: 'gray',
        width: '130px',
        fontSize:'12px',
        "&:hover": {
            backgroundColor: 'blue'
        } 
    },
    title: {
        color: 'black',
        fontSize: '16px',
        fontWeight:'bold'
    }
}

const leftmenu = () => {
    const router = useRouter()
    const handleClick=()=>{
        console.log('lam')
        router.push("/login")
    }
    return (
        <Stack flexDirection={'column'} sx={{
            m: '5px 5px'
            }}>
            <Stack flexDirection={'row'} sx={{height:'270px',backgroundColor:'gray'}}></Stack>
                
            <Stack flexDirection={'column'} sx={{
                rowGap: '5px',
                m: '10px 50px',
                
                // backgroundColor:'red'
            }}>
                <Stack flexDirection={'column'} sx={{
                    color: 'white',
                    alignItems: 'center',
                    rowGap:'10px'}}>
                    <Stack sx={styles.title}>Mode</Stack>
                    <Button sx={styles.button}>Register</Button>
                    <Button sx={styles.button}>Auto lock</Button>
                    <Button sx={styles.button}>Manual Lock</Button>
                </Stack>

                <Stack flexDirection={'column'} sx={{
                    color: 'white',
                    rowGap: '10px',
                    alignItems: 'center',
                            }}>
                    
                    <Stack sx={styles.title}>Door Lock Control</Stack>
                    <Stack flexDirection={'row'} sx={{
                        columnGap: '30px',
                        
                        }}>
                        <Button sx={styles.button}>Open</Button>
                        <Button sx={styles.button}>Close</Button>
                    </Stack>
                </Stack>

                <Stack flexDirection={'column'} sx={{
                    alignItems: 'center',
                    rowGap: '8px'}}>
                    <Stack sx={styles.title}>Register Face</Stack>
                    <Stack sx={{ alignItems: 'center', }}>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '30ch' },
                                color:'red'
                            }}
                            noValidate
                            autoComplete="off"

                        >
                            <TextField id="filled-basic" label="Type the person's name here" variant="filled"
                            sx={{color:'red'}}
                            />
                        </Box>
                            <Button sx={styles.button} >
                                Register</Button>
                        </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
export default leftmenu