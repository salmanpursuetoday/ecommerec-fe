import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../../../shared/components/Loader';
import Header from '../../../shared/components/Header';
import Carousel from '../../../shared/components/Carousel';
import Footer from '../../../shared/components/Footer';

import Product from './Product';

const Products = (props) => {
  const { products, loading, handleAddToCart } = props;

  if (loading) return <Loader />
  return (
    <>
      <Header />
      <Carousel />
      <Product {...{ products, handleAddToCart }} />
      <Footer/>
    </>
  );
};

Products.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.instanceOf(Object),
  handleAddToCart: PropTypes.func,
}

export default Products;