import React, { useEffect, useState } from 'react';
import _get from 'lodash/get';

import OrderView from '../../components/Orders';
import axios from '../../../utils/helpers/axios';

const Order = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getOrders();
  }, [])

  const getOrders = async () => {
    setLoading(true);
    const res = await axios.get('/order/get');
    const mapedData = [];
    for (const item of _get(res, 'data', [])) {
      mapedData.push({
        orderBy: `${_get(item, 'customerId.firstName')} ${_get(item, 'customerId.lastName')}`,
        email: _get(item, 'customerId.email'),
        contactNo: _get(item, 'customerId.contactNo'),
        products: item?.products?.map((pro) => pro?.product?.name).toString(),
        createdAt: _get(item, 'createdAt'),
        totalAmount: `${_get(item, 'totalAmount', 0)}$`
      })
    }
    setOrders(mapedData);
    setLoading(false);
  }


  return (
    <OrderView {...{ orders, loading }} />
  );
};

export default Order;