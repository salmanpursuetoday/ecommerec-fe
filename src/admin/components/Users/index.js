import React from 'react';
import PropTypes from 'prop-types';

import PageWrapper from '../../../shared/components/PageWrapper';
import DataTable from '../../../shared/components/DataTable';

const UsersView = (props) => {
  const { customers, loading } = props;

  const columns = [
    { label: "First name", key: "firstName" },
    { label: "Last name", key: "lastName" },
    { label: "Description", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Contact no", key: "contactNo" },
    { label: "Created At", key: "createdAt" },
    { label: "Updated At", key: "updatedAt" },
  ];

  return (
    <PageWrapper title="Users">
      <DataTable
        rows={customers}
        columns={columns}
        loading={loading}
      />
    </PageWrapper>
  );
};

UsersView.propTypes = {
  customers: PropTypes.instanceOf(Object),
  loading: PropTypes.bool,
}
export default UsersView;