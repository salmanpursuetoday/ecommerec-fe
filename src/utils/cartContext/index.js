import React, { useState } from "react";
import PropTypes from "prop-types";

import { CartProvider as Provider } from "./context";

function CartProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState([]);
  return <Provider value={{ cart, setCart }}>{children}</Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;
