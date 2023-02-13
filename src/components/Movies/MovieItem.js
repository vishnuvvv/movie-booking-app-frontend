import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ title, realeaseDate, posterUrl,id }) => {
  return (
    <Card
      sx={{
        margin: 2,
        width: 250,
        height: 320,
        borderRadius: 3,
        ":hover": { boxShadow: "10px 10px 20px #ccc" },
      }}
    >
      <img height={"50%"} width="100%" src={posterUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(realeaseDate).toDateString() }
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          LinkComponent={Link}
          to={`/booking/${id}`}
          size="small"
          sx={{
            margin: "auto",
            ":hover": { boxShadow: "10px 10px 20px #ccc" },
          }}
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItem;
