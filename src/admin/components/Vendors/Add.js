import React from 'react';
import PropTypes from 'prop-types';

import AddFrom from './form';


const Add = (props) => {
  const { onAdd, onClose } = props;

  return <AddFrom {...{ onAdd, onClose }} />
};

Add.propTypes = {
  onAdd: PropTypes.func,
  onClose: PropTypes.func,
}
export default Add;