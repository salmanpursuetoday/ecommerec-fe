import React, { useEffect, useState } from 'react';
import _get from 'lodash/get';

import UsersView from '../../components/Users';
import axios from '../../../utils/helpers/axios';

const Users = () => {

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async () => {
    setLoading(true);
    const res = await axios.get('/user/get/customer');
    setCustomers(_get(res, 'data', []));
    setLoading(false);
  }

  return (
    <UsersView {...{ customers, loading }} />
  );
};

export default Users;