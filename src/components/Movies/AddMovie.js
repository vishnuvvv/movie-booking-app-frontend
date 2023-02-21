import { CheckBox } from "@mui/icons-material";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";

const AddMovie = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    releaseDate: "",
    posterUrl: "",
    actor: ""
  });
  const handleChange = (e) => {
    const {name,value} =e.target
    setInputs({...inputs,[name]:value})
  };

  console.log(inputs);

  return (
    <div>
      <form>
        <Box
          width={"50%"}
          padding={10}
          margin={"auto"}
          display={"flex"}
          flexDirection={"column"}
          boxShadow={"10px 10px 20px #ccc"}
        >
          <Typography
            textAlign={"center"}
            variant={"h5"}
            fontFamily={"veranda"}
            mb={6}
          >
            Add New Movie
          </Typography>
          <FormLabel>Title</FormLabel>
          <TextField
            name="title"
            variant="standard"
            margin="normal"
            onChange={handleChange}
          />
          <FormLabel>Description</FormLabel>
          <TextField
            name="description"
            variant="standard"
            margin="normal"
            onChange={handleChange}
          />
          <FormLabel>Release Date</FormLabel>
          <TextField
            name="releaseDate"
            variant="standard"
            margin="normal"
            onChange={handleChange}
          />
          <FormLabel>Poster Url</FormLabel>
          <TextField
            name="posterUrl"
            variant="standard"
            margin="normal"
            onChange={handleChange}
          />
          <FormLabel>Actors</FormLabel>
          <Box display={"flex"}>
            <TextField
              name="actor"
              variant="standard"
              margin="normal"
              onChange={handleChange}
            />
            <Button>Add</Button>
          </Box>
          <FormLabel>Featured</FormLabel>
          <CheckBox checked={false} sx={{ mr: "auto" }} />
          <Button
            variant="contained"
            sx={{
              width: "30%",
              bgcolor: "#2b2d42",
              margin: "auto",
              ":hover": {
                bgcolor: "#121217",
              },
            }}
          >
            Add New Movie
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddMovie;
