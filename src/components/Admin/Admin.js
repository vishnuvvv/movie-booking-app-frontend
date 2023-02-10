import React from "react";
import { useDispatch } from "react-redux";
import { sendAdminAuthRequest } from "../../api-helpers/api-helpers";
import { adminActions } from "../../store";
import AuthForm from "../Auth/AuthForm";

const Admin = () => {
  const dispatch = useDispatch()
  const onResponseRecieved = (data) =>{
    console.log(data);
    dispatch(adminActions.login())
    localStorage.setItem("adminId", data.id)
    localStorage.setItem("token", data.token)
  }
  const getData = (data) => {
    console.log("Admin", data);
    sendAdminAuthRequest(data.formInputs)
      .then(onResponseRecieved)
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </div>
  );
};

export default Admin;
