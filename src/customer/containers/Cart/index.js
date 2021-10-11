import React, { useContext, useState } from 'react';
import CartView from '../../components/Cart';

import cartContext from '../../../utils/cartContext/context';
import userContext from '../../../utils/userContext/context';
import axios from '../../../utils/helpers/axios';

const Cart = () => {
  const { cart, setCart } = useContext(cartContext);
  const { user } = useContext(userContext);
  const [isOrdered, setIsOrderd] = useState(false);

  const handlePlaceOrder = async () => {
    const products = [];
    let amount = 0;
    cart?.map((item) => products.push({ product: item?._id, qty: 1 }))
    cart?.map((item) => amount = amount + item?.price)
    const data = {
      products: products,
      customerId: user?._id.Cart,
      totalAmount: amount,
    }

    const res = await axios.post('order/create', data);
    res?.data?.order === true && setIsOrderd(true); setCart([])
  }


  return <CartView {...{ handlePlaceOrder, isOrdered, setIsOrderd }} />
};

export default Cart;