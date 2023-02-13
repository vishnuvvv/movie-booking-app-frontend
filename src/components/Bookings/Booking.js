import { Box, FormLabel, TextField, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../api-helpers/api-helpers";

const Booking = () => {
  const [movie, setMovie] = useState();
  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res.movie))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(movie);

  return (
    <div>
      {movie && (
        <Fragment>
          <Typography
            padding={3}
            fontFamily="fantasy"
            variant="h4"
            textAlign={"center"}
          >
            Book Tickets Of Movie : {movie.title}
          </Typography>
          <Box display={"flex"} justifyContent={"center"} >
            <Box
              display={"flex"}
              flexDirection="cloumn"
              justifyContent={"column"}
              paddingTop={3}
              width="50%"
              marginRight={"auto"}
            >
              <img
                width={"80%"}
                height="300px"
                src={movie.posterUrl}
                alt={movie.title}
              />
              <Box width={"80%"} marginTop={3} padding={2}>
                <Typography paddingTop={2}>{movie.description}</Typography>
                <Typography fontWeight={"bold"} marginTop={1}>
                  Starrer:{movie.actors.map((actor) =>" "+ actor + ", ")}
                </Typography>
                <Typography fontWeight={"bold"} marginTop={1}>
                  Release Date : { new Date( movie.releaseDate).toDateString()}
                </Typography>
              </Box>

              <Box width={"50%"} paddingTop={3}>
                <form>
                  <Box padding={5}
                  margin={"auto"}
                  display={"flex"}
                  flexDirection={"column"}
                  >
                    <FormLabel>Seat Number</FormLabel>
                    <TextField name="seatNumber"  type={"number"} margin="normal" />
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Fragment>
      )}
    </div>
  );
};

export default Booking;
