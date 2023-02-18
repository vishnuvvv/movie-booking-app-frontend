import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUserBookingById } from "../../api-helpers/api-helpers";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
      <Box
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"30%"}
      >
        <AccountCircleIcon/>
      </Box>
    </Box>
  );
};

export default UserProfile;
