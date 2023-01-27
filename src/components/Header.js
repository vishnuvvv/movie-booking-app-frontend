import {
  AppBar,
  Toolbar,
  Box,
  Autocomplete,
  TextField,
  Tabs,
  Tab,
} from "@mui/material";
import TheatersIcon from "@mui/icons-material/Theaters";
import { useState } from "react";

const dummyArray = ["memmory", "bahubali", "kashmirfiles", "kathi"];

const Header = () => {
  const [value, setValue] = useState(0);
  return (
    <AppBar sx={{ bgcolor: "#2b2d42" }}>
      <Toolbar>
        <Box>
          <TheatersIcon />
        </Box>
        <Box width="35%" margin="auto">
          <Autocomplete
            freeSolo
            options={dummyArray.map((option) => option)}
            renderInput={(params) => (
              <TextField
                sx={{ input : {color: "white"} }}
                variant="standard"
                {...params}
                placeholder   ="Search across movies"
              />
            )}
          />
        </Box>
        <Box display="flex">
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="Movies" />
            <Tab label="Admin" />
            <Tab label="Auth" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
