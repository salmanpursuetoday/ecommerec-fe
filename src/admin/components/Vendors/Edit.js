import React from 'react';
import EditFrom from './form';

const Edit = (props) => {
  const { dataItem, onClose, onEdit } = props;

  return <EditFrom {...{ dataItem, onClose, onEdit }} />
};

export default Edit;