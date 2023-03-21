import {
  Badge,
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  useMediaQuery,
} from "@mui/material";
import Data from "./Data";
import Leftmenu from "./Leftmenu";

const responsivePaper = {
  border: "1px solid gray",
  margin: 1,
  flex: { xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
  backgroundColor: { xs: "blue", sm: "red", md: "yellow" },
  fontSize: { xs: 16, md: 32 },
};

const responsiveBadge = {
  maxWidth: "max-content",
  "& .MuiBadge-badge": {
    backgroundColor: "gray",
    color: { xs: "yellow", sm: "blue" },
  },
};

const buttonStyleXs = {
  borderColor: "primary.main",
};

const buttonStyleSm = {
  borderColor: "secondary.main",
};

const sidebar = () => {
  // const isXs = useMediaQuery("(max-width:600px)");

  return (
    <Grid
      container
      spacing={0}
      sx={{ display: "flex"}}
      p={1}
    >
      <Grid item xs={12} md={4} sx={{width:'100px'}}>
        <Paper sx={{ height: "100%", border: "1px solid" }}>
          <Stack flexDirection={"column"} sx={{}}>
            
            <Leftmenu />
          </Stack>
        </Paper>
      </Grid>

      <Grid item xs={12} sx={{}} p={1} md={8}>
        <Paper sx={{ backgroundColor: "orange", height: "100%" }}>
          <Stack flexDirection={"column"} sx={{}}>
            <Data />
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default sidebar;
