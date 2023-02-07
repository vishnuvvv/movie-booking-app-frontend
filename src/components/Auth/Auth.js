import React from "react";
import { sendUserAuthRequest } from "../../api-helpers/api-helpers";
import AuthForm from "./AuthForm";

const Auth = () => {
  const getData = (data) => {
    console.log(data);
    sendUserAuthRequest(data.formInputs, data.signup)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  );
};

export default Auth;
