import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import {
  deleteBooking,
  getUserBookingById,
  getUserDetails,
} from "../../api-helpers/api-helpers";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const UserProfile = () => {
  const [bookings, setBookings] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    getUserBookingById()
      .then((res) => setBookings(res.bookings))
      .catch((err) => console.log(err));

    getUserDetails()
      .then((res) => setUser(res.user))
      .catch((err) => console.log(err));
  }, []);
  console.log(bookings);
  const handleDelete = (id) => {
    deleteBooking(id)
      .then((res) => {
        console.log(res);
        setBookings((prevBookings) =>
          prevBookings.filter((booking) => booking._id !== id)
        );
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box width={"100%"} display="flex">
      <Fragment>
        {" "}
        {user && (
          <Box
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"30%"}
            padding={3}
          >
            <AccountCircleIcon
              sx={{ fontSize: "10rem", textAlign: "center", ml: 3 }}
            />
            <Typography
              padding={1}
              width={"auto"}
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={6}
            >
              Name: {user.name}
            </Typography>
            <Typography
              mt={1}
              padding={1}
              width={"auto"}
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={6}
            >
              Email: {user.email}
            </Typography>
          </Box>
        )}
        {bookings && bookings.length > 0 && (
          <Box width={"70%"} display={"flex"} flexDirection={"column"}>
            <Typography
              variant="h3"
              fontFamily={"veranda"}
              textAlign={"center"}
              padding={2}
            >
              Bookings
            </Typography>
            <Box
              margin={"auto"}
              display={"flex"}
              flexDirection={"column"}
              width={"80%"}
            >
              <List>
                {bookings.map((booking, index) => (
                  <ListItem
                    sx={{
                      bgcolor: "#00d386",
                      color: "white",
                      textAlign: "center",
                      margin: 1,
                      borderRadius: 3,
                    }}
                  >
                    <ListItemText
                      sx={{ margin: 1, width: "auto", textAlign: "left" }}
                    >
                      Movie: {booking.movie.title}
                    </ListItemText>
                    <ListItemText
                      sx={{ margin: 1, width: "auto", textAlign: "left" }}
                    >
                      Seat Number: {booking.seatNumber}
                    </ListItemText>
                    <ListItemText
                      sx={{ margin: 1, width: "auto", textAlign: "left" }}
                    >
                      Date: {new Date(booking.date).toDateString()}
                    </ListItemText>
                    <IconButton onClick={() => handleDelete(booking._id)}>
                      <DeleteForeverIcon color="error" />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        )}
      </Fragment>
    </Box>
  );
};

export default UserProfile;
