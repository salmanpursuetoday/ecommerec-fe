import React from 'react';
import PropTypes from 'prop-types';

import PageWrapper from '../../../shared/components/PageWrapper';
import DataTable from '../../../shared/components/DataTable';

const UsersView = (props) => {
  const { orders, loading } = props;

  const columns = [
    { label: "Products", key: "products" },
    { label: "Order By", key: "orderBy" },
    { label: "Email", key: "email" },
    { label: "Contact no", key: "contactNo" },
    { label: "Total Amount", key: "totalAmount" },
    { label: "CreatedAt", key: "createdAt" },
  ];

  return (
    <PageWrapper title="Orders">
      <DataTable
        rows={orders}
        columns={columns}
        loading={loading}
      />
    </PageWrapper>
  );
};

UsersView.propTypes = {
  orders: PropTypes.instanceOf(Object),
  loading: PropTypes.bool,
}
export default UsersView;