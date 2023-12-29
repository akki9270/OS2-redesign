import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Navigate, Link as RouterLink } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Toast from '../../components/Toast';
import { Login as LoginModel } from '../../models';
import { LoginAPI } from '../../services';

import { AUTH_ACTIONS } from "../../store/auth/actions";
import CustomSnackbar from "../../components/SnackBar/Snackbar";

const Login = () => {
  const isAuthenticated = useSelector((store: any) => store.auth.auth?.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const [loginState, setLoginState] = useState<LoginModel>({
    username: '',
    password: ''
  });

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const inputChange = (e: any) => {
    const value = e.target.value;
    setLoginState({
      ...loginState,
      [e.target.name]: value
    });
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!loginState.username || !loginState.password) return;

    const login: LoginModel = { ...loginState };
    LoginAPI.createLogin(login)
      .then((res) => {
        if (res?.name) {
          // const updatedUser: any = {
          //   userName: loginState.username,
          //   walletId: 0,
          //   userType: 'owner',
          //   token: res.Value
          // };
          // dispatch({ type: 'UPDATE_CURRENT_ACCOUNT', data: updatedUser });
          dispatch({ type: AUTH_ACTIONS.LOGIN_USER, data: res });
          setLoginState({
            username: '',
            password: ''
          });
          Toast({ title: '', message: 'Login Successfully!', type: 'success' });                    
          navigate(state?.path || "/");
        }
      })
      .catch((error) => {
        console.log('Error while logging ' + error);
        setLoginState({
          username: '',
          password: ''
        });
      });
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
            id="username"
            type="text"
            label="UserName"
            name="username"
            value={loginState.username}
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
            value={loginState.password}
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
              <RouterLink to="/register">
                <Link onClick={() => { }} variant="body2" >
                  {"Don't have an account? Sign Up"}
                </Link>
              </RouterLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};


export default Login;