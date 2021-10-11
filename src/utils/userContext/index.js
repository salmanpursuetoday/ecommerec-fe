import React, { useState } from "react";
import PropTypes from "prop-types";
import jwt from "jsonwebtoken";

import { UserProvider as Provider } from "./context";

function UserProvider(props) {
  const { children } = props;

  const authToken = localStorage.getItem("auth_token");

  const userData = jwt.decode(authToken);

  const [user, setUser] = useState(userData || null);

  return <Provider value={{ user, setUser }}>{children}</Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node,
};

export default UserProvider;
