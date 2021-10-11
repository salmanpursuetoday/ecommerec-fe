import React, { useContext } from "react";
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useForm, Controller } from "react-hook-form";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import _get from "lodash/get";

import UserContext from "../../../utils/userContext/context";


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

const Register = (props) => {
  const { handleRegister } = props;
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    handleRegister(data)
  }

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
      <Container className={classes.container} maxWidth="sm">

        <Paper elevation={7} component={Box} p={3} style={{ width: '100%' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="h5">Register</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: "first name is required" }}
                  render={({ field }) => <TextField
                    id="standard-required"
                    label="first Name"
                    variant="outlined"
                    fullWidth
                    size="small"
                    {...field}
                    error={errors?.firstName}
                    helperText={errors?.firstName && errors?.firstName.message} />}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: "last name is required" }}
                  render={({ field }) => <TextField
                    id="standard-required"
                    label="Last name"
                    variant="outlined"
                    fullWidth
                    size="small"
                    {...field}
                    error={errors?.lastName}
                    helperText={errors?.lastName && errors?.lastName.message} />}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: "email is required" }}
                  render={({ field }) => <TextField
                    id="standard-required"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    size="small"
                    {...field}
                    error={errors?.email}
                    helperText={errors?.email && errors?.email.message} />}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "password is required" }}
                  render={({ field }) => <TextField
                    id="standard-required"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    size="small"
                    type="password"
                    {...field}
                    error={errors?.password}
                    helperText={errors?.password && errors?.password.message} />}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="contactNo"
                  control={control}
                  rules={{ required: "Contact no is required" }}
                  render={({ field }) => <TextField
                    id="standard-required"
                    label="Contact Number"
                    variant="outlined"
                    fullWidth
                    size="small"
                    type="text"
                    {...field}
                    error={errors?.contactNo}
                    helperText={errors?.contactNo && errors?.contactNo.message} />}
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  color="primary"
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
              </Grid>
              <Grid item xs={7}></Grid>
              <Grid item xs={5}>
                <Link to="/login" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
};

Register.propTypes = {
  handleRegister: PropTypes.func,
}

export default Register;
