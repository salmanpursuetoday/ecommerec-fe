import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import _get from 'lodash/get';

import { StyledHelperText } from './Styles';


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

const AddProduct = (props) => {
  const { onAdd, onClose, dataItem, onEdit } = props;
  const classes = useStyles();
  const { handleSubmit, control, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = async (data) => {
    if (onEdit) {
      const res = await onEdit({...data, _id: _get(dataItem, '_id', '') });
      onClose();
    } else {
      const res = await onAdd(data);
      onClose();
    }
  }


  return (
    <div style={{ padding: '5%' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="firstName"
              control={control}
              defaultValue={_get(dataItem, 'firstName', '')}
              rules={{ required: "First name is required" }}
              render={({ field }) => <TextField
                id="standard-required"
                label="First name"
                variant="outlined"
                fullWidth
                {...field}
                error={errors?.firstName}
                helperText={errors?.firstName && errors?.firstName.message} />}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "Last name is required" }}
              defaultValue={_get(dataItem, 'lastName', '')}
              render={({ field }) => <TextField
                id="standard-required"
                label="Last name"
                variant="outlined"
                fullWidth
                {...field}
                error={errors?.lastName}
                helperText={errors?.lastName && errors?.lastName.message} />}
            />
          </Grid>


          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              defaultValue={_get(dataItem, 'email', '')}
              render={({ field }) => <TextField
                id="standard-required"
                label="Email"
                variant="outlined"
                fullWidth
                {...field}
                error={errors?.email}
                helperText={errors?.email && errors?.email.message} />}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="contactNo"
              control={control}
              rules={{ required: "Contact Number is required" }}
              defaultValue={_get(dataItem, 'contactNo', '')}
              render={({ field }) => <TextField
                id="standard-required"
                label="contact no"
                variant="outlined"
                fullWidth
                {...field}
                error={errors?.contactNo}
                helperText={errors?.contactNo && errors?.contactNo.message} />}
            />
          </Grid>

          <Grid item xs={12}>
            {!onEdit && <><Controller
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
              </StyledHelperText></>}
          </Grid>

          <Grid item xs={12}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button color="primary" onClick={onClose}>cancel</Button>
              <Button color="primary" type="submit">save</Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
AddProduct.propTypes = {
  onAdd: PropTypes.func,
  onClose: PropTypes.func,
  dataItem: PropTypes.instanceOf(Object),
  onEdit: PropTypes.func,
}
export default AddProduct;