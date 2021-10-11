import React, { useContext } from "react";
import jwt from "jsonwebtoken"; 
import _get from 'lodash/get';

import LoginView from "../../components/Login";
import UserContext from "../../../utils/userContext/context";
import axios from '../../../utils/helpers/axios';

function Login() {
  const { setUser } = useContext(UserContext);

  const handleLogin = async (data) => {
    const res = await axios.post('/user/signin', data)
    const token = _get(res, 'data.token'); 
    localStorage.setItem("auth_token",token);
    setUser(jwt.decode(token));
  }
  return (
    <LoginView {...{ handleLogin }} />
  );
}

export default Login;
