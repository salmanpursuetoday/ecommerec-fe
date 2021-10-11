import React, { useState, useContext } from "react";
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useForm, Controller } from "react-hook-form";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Typography } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import clsx from "clsx";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";
import _get from "lodash/get";

import UserContext from "../../../utils/userContext/context";

import { StyledHelperText } from './styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(8),
  },
  textField: {
    width: "100%",
  },
}));

const Login = (props) => {
  const { handleLogin } = props;
  const { user } = useContext(UserContext);
  const classes = useStyles();
  const { handleSubmit, control, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = async (data) => {
    await handleLogin(data);
  };

  switch (_get(user, 'role', '')) {
    case 'customer':
      return <Redirect to={'/'} />
    case 'admin':
      return <Redirect to={'/admin'} />
    case 'vendor':
      return <Redirect to={'/vendor'} />

    default:
      break;
  }

  return (
    <>
      <Container className={classes.container} maxWidth="xs">
        <Paper elevation={7} component={Box} p={3}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="h5">Login</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: 'Invalid email' }}
                  render={({ field }) => <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
                    <OutlinedInput
                      fullWidth
                      name="email"
                      id="outlined-adornment-email"
                      type="text"
                      color="primary"
                      label="Email"
                      {...field}
                      endAdornment={
                        <InputAdornment position="end">
                          <AccountCircle />
                        </InputAdornment>
                      }
                      labelWidth={70}
                      error={!!errors?.email}
                    />
                  </FormControl>}
                />
                <StyledHelperText>
                  {_get(errors, "email") && _get(errors, "email.message")}
                </StyledHelperText>
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: 'Please enter your password' }}
                  render={({ field }) => <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="filled-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      name="password"
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      color=" primary"
                      labelWidth={70}
                      {...field}
                      error={!!errors?.password}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>}
                />
                <StyledHelperText>
                  {_get(errors, "password") && _get(errors, "password.message")}
                </StyledHelperText>
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="primary"
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Log in
                </Button>
              </Grid>
              <Grid item xs={5}>
                <a href="#" >
                  Forgot password?
                </a>
              </Grid>
              <Grid item xs={7}>
                <Link to="/register" variant="body2">
                  Don't have an account?
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func,
}

export default Login;
