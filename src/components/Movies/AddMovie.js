import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React from "react";

const AddMovie = () => {
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
          <TextField name="title" variant="standard" margin="normal" />
          <FormLabel>Description</FormLabel>
          <TextField name="description" variant="standard" margin="normal" />
          <FormLabel>Release Date</FormLabel>
          <TextField name="releaseDate" variant="standard" margin="normal" />
          <FormLabel>Poster Url</FormLabel>
          <TextField name="posterUrl" variant="standard" margin="normal" />
          <FormLabel>Actors</FormLabel>
          <Box display={"flex"}>
            <TextField name="actor" variant="standard" margin="normal" />
            <Button>Add</Button>
          </Box>
          <FormLabel>Featured</FormLabel>
        </Box>
      </form>
    </div>
  );
};

export default AddMovie;
