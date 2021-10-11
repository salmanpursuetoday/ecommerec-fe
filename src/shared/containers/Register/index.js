import React, { useContext } from 'react';
import jwt from "jsonwebtoken";
import _get from 'lodash/get';

import axios from '../../../utils/helpers/axios';
import UserContext from "../../../utils/userContext/context";

import RegisterView from '../../components/Register';

const Register = () => {
  const { setUser } = useContext(UserContext);

  const handleRegister = async (data) => {
    const res = await axios.post('/user/create-customer', data)
    const token = _get(res, 'data.token');
    localStorage.setItem("auth_token", token);
    setUser(jwt.decode(token));
  }

  return (<RegisterView {...{ handleRegister }} />
  );
};

export default Register;