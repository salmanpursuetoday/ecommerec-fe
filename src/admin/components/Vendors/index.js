import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';

import PageWrapper from '../../../shared/components/PageWrapper';
import DataTable from '../../../shared/components/DataTable';
import Drawer from '../../../shared/components/drawer';

import AddView from './Add';
import EditView from './Edit';

const Vendor = (props) => {
  const { vendors, loading, handleAdd, handleDelete, handleEdit } = props;
  const [isEditdrawer, setIsEditdrawer] = useState(false);
  const [editData, setEditData] = useState({});

  const columns = [
    { label: "First name", key: "firstName" },
    { label: "Description", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Contact no", key: "contactNo" },
    { label: "Created At", key: "createdAt" },
    { label: "Updated At", key: "updatedAt" },
  ];

  const toogleEditDrawer = (data) => {
    setIsEditdrawer(!isEditdrawer);
    setEditData(data);
  }

  return (
    <>
      <PageWrapper title="Vendors" btnTitle="Add Vendors" addView={AddView} handleAdd={handleAdd}>
        <DataTable
          rows={vendors}
          columns={columns}
          loading={loading}
          onDelete={handleDelete}
          onEdit={toogleEditDrawer}
        />
      </PageWrapper>
      <Drawer open={isEditdrawer} onClose={toogleEditDrawer} width={450} title={`Edit ${_get(editData, 'firstName', '')}`}>
        <EditView dataItem={editData} onClose={toogleEditDrawer} onEdit={handleEdit} />
      </Drawer>
    </>
  );
};

Vendor.propTypes = {
  handleAdd: PropTypes.func,
  vendors: PropTypes.instanceOf(Object),
  loading: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
}
export default Vendor;