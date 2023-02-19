import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { getUserBookingById } from "../../api-helpers/api-helpers";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { textAlign } from "@mui/system";

const UserProfile = () => {
  const [bookings, setBookings] = useState();
  useEffect(() => {
    getUserBookingById()
      .then((res) => setBookings(res.bookings))
      .catch((err) => console.log(err));
  }, []);
  console.log(bookings);
  return (
    <Box width={"100%"} display="flex">
      {bookings && bookings.length > 0 && (
        <Fragment>
          {" "}
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
              Name: {bookings[0].user.name}
            </Typography>
            <Typography
              mt={1}
              padding={1}
              width={"auto"}
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={6}
            >
              Email: {bookings[0].user.email}
            </Typography>
          </Box>
          <Box width={"70%"} display={"flex"} flexDirection={"column"}>
            <Typography
              variant="h3"
              fontFamily={"veranda"}
              textAlign={"center"}
              padding={2}
            >
              Bookings
            </Typography>
            <Box>
              <List>
                {bookings.map((booking,index)=>(
                  <ListItem>
                    <ListItemText>Movie:{booking.movie.title}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Fragment>
      )}
    </Box>
  );
};

export default UserProfile;
