import {
  Box,
  Button,
  Dialog,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import { Link } from "react-router-dom";
const labelStyle = { mt: 1, mb: 1 };

const AuthForm = ({ onSubmit, isAdmin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({formInputs , signup: isAdmin? false : isSignUp});
  };

  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
      <Box sx={{ ml: "auto", padding: 1 }}>
        <IconButton LinkComponent={Link} to="/">
          <DisabledByDefaultRoundedIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign={"center"}>
        {isSignUp ? "Signup" : "Login"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          padding={6}
          display={"flex"}
          justifyContent="center"
          flexDirection={"column"}
          width={400}
          margin="auto"
          alignContent={"center"}
        >
          { !isAdmin && isSignUp && (
            <>
              <FormLabel sx={labelStyle}>Name</FormLabel>
              <TextField
                variant="standard"
                margin="normal"
                name={"name"}
                onChange={handleChange}
              />
            </>
          )}
          <FormLabel sx={labelStyle}>Email</FormLabel>
          <TextField
            variant="standard"
            margin="normal"
            type={"email"}
            name={"email"}
            onChange={handleChange}
          />
          <FormLabel sx={labelStyle}>Password</FormLabel>
          <TextField
            variant="standard"
            margin="normal"
            type={"password"}
            name={"password"}
            onChange={handleChange}
          />

          <Button
            type="submit"
            sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
            variant="contained"
            fullWidth
          >
            {isSignUp ? "Signup" : "Login"}
          </Button>
          {!isAdmin &&<Button
            onClick={() => {
              setIsSignUp(!isSignUp);
            }}
            sx={{ mt: 2, borderRadius: 10 }}
            fullWidth
          >
            Switch to {isSignUp ? "Login" : "Signup"}
          </Button>}
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
