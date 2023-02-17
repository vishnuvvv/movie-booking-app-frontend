import React, { useEffect, useState } from "react";
import { getUserBookingById } from "../../api-helpers/api-helpers";

const UserProfile = () => {
  const [bookings, setBookings] = useState();
  useEffect(() => {
    getUserBookingById()
      .then((res) => setBookings(res.bookings))
      .catch((err) => console.log(err));
  }, []);
 console.log(bookings);
  return <div>UserProfile</div>;
};

export default UserProfile;
