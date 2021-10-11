import React, { useContext, useState, useEffect } from 'react';
import _get from 'lodash/get';

import AddProductView from '../../components/Product';
import userContext from '../../../utils/userContext/context';
import axios from '../../../utils/helpers/axios';

const AddProduct = () => {
  const { user } = useContext(userContext);
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handlegetProductByVendor();
  }, [])

  const handlegetProductByVendor = async () => {
    setLoading(true)
    const res = await axios.get(`/product/get/${user?._id}`);
    setLoading(false)
    setProducts(_get(res, 'data', ''));
  }


  const handleAddProduct = async (data) => {
    const res = await axios.post('/product/create', data);
    handlegetProductByVendor();
    return res;
  }


  return (<AddProductView
    {...{
      handleAddProduct,
      loading,
      products
    }} />
  );
};

export default AddProduct;