import React from 'react';
import PropTypes from 'prop-types';

import PageWrapper from '../../../shared/components/PageWrapper';
import DataTable from '../../../shared/components/DataTable';

import AddView from './Add';

const AddProduct = (props) => {
  const { products, loading, handleAddProduct } = props;
  const columns = [
    { label: "Name", key: "name" },
    { label: "Description", key: "description" },
    { label: "Price", key: "price" },
    { label: "Quantity", key: "quantity" },
    { label: "CreatedAt", key: "createdAt" },
  ];

  return (
    <>
      <PageWrapper title="Product" btnTitle="Add Product" addView={AddView} handleAdd={handleAddProduct}>
        <DataTable
          rows={products}
          columns={columns}
          loading={loading}
        />
      </PageWrapper>
    </>
  );
};
AddProduct.propTypes = {
  products: PropTypes.instanceOf(Object),
  loading: PropTypes.bool,
  handleAddProduct: PropTypes.func,
}

export default AddProduct;