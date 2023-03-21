import { Button, Grid, Paper, Stack, styled, TextField } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router";

const login_page=()=>{
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
      }));
    //   xs, sm, md, lg, ...
    //j
    const router = useRouter()
    const handleClick=()=>{
        console.log('lam')
        router.push("/")
    }
      return (
        <Stack sx={{ width: {xs: "100%"}, alignItems: "center"}}>
          <Stack sx={{ width: "20%", mt: "15%" }}>
            <Grid container spacing={8} columns={1}>
              <Grid item xs={8} sx={{}}>
                <Item>
                  <TextField
                    id="filled-basic"
                    label="Username"
                    variant="filled"
                    sx={{ width: "350px" }}
                  />
                </Item>
              </Grid>
    
              <Grid item xs={8}>
                <Item>
                  <TextField
                    id="filled-basic"
                    label="Password"
                    variant="filled"
                    sx={{ width: "350px" }}
                  />
                </Item>
              </Grid>
    
              <Grid item xs={8}>
                <Item>
                    <Button sx={{ backgroundColor: "black", width: "350px" }}
                    onClick={handleClick}
                    >
                        Login
                    </Button>
                </Item>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      );
    };
export default login_page