import React, { useEffect, useState } from 'react';
import _get from 'lodash/get';

import Vendors from '../../components/Vendors';
import axios from '../../../utils/helpers/axios';

const Home = () => {
  const [vendors, setVendors] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getVendors();
  }, [])

  const getVendors = async () => {
    setLoading(true);
    const res = await axios.get('/user/get/vendors');
    setLoading(false);
    setVendors(_get(res, 'data', []));
  }

  const handleAdd = async (data) => {
    const res = await axios.post('/user/create-vendor', data);
    getVendors();
    return res;
  }

  const handleDelete = async (data) => {
    const res = await axios.get(`/user/delete/${data}`);
    getVendors();
    return res;
  }

  const handleEdit = async (data) => {
    const res = await axios.post(`/user/update`, data);
    getVendors();
    return res;
  }

  return <Vendors {...{ handleAdd, vendors, loading, handleDelete, handleEdit }} />
};

export default Home;