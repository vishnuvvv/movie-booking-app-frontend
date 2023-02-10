import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage.js";
import Admin from "./components/Admin/Admin.js";
import Auth from "./components/Auth/Auth.js";
import Movies from "./components/Movies/Movies.js";
import { useDispatch, useSelector } from "react-redux";
import { adminActions, userActions } from "./store";

const App = () => {
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log("isAdminLoggedIn:", isAdminLoggedIn);
  console.log("isUserLoggedIn:", isUserLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(userActions.login());
    } else if (localStorage.getItem("adminId")) {
      dispatch(adminActions.login());
    }
  }, []);
  return (
    <>
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </section>
    </>
  );
};

export default App;
