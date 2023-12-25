import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router"
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
import { AUTH_ACTIONS } from "../../store/auth/actions";

const Login = () => {
  //   const { login } = useAuth();
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInput] = useState({ email: "", password: "" });

  const inputChange = (e: any) => {
    setInput({ ...inputs, [e.target.name]: e.target.value });
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!inputs.email || !inputs.password) return;
    dispatch({ type: AUTH_ACTIONS.LOGIN_USER });
    history.push("/");
    // const data = new FormData(event.currentTarget);
    // login({
    //   email: data.get("email"),
    //   password: data.get("password")
    // });    
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            onChange={inputChange}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={inputChange}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login In
          </Button>
          <Grid container>
            <Grid item>
              {/* <RouterLink to="/register"> */}
              <Link onClick={() => { }} variant="body2" >
                {"Don't have an account? Sign Up"}
              </Link>
              {/* </RouterLink> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};


export default Login;