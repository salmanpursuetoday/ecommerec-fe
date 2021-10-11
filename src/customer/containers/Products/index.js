import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import _get from 'lodash/get';

import ProductsView from '../../components/Products';
import axios from '../../../utils/helpers/axios';
import cartContext from '../../../utils/cartContext/context';
import userContext from '../../../utils/userContext/context';


const Products = () => {
  const { cart, setCart } = useContext(cartContext);
  const { user } = useContext(userContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    setLoading(true);
    const res = await axios.get('product/get');
    setLoading(false);
    setProducts(_get(res, 'data', []));
  }

  const handleAddToCart = (data) => {
    user ? setCart([...cart, data]) : history.push('/login')
  }

  return (
    <ProductsView {...{ products, loading, handleAddToCart }} />
  );
};

export default Products;
