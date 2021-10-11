import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import DrawerHeader from './drawerHeader';

const drawer = (props) => {
  const {title, onClose, children, width, open} = props;
  return (
    <div>
      <Drawer anchor='right' open={open} onClose={onClose}>
        <Box width={width}>
          <DrawerHeader title={title} onClose={onClose}/>
          {children}</Box>
      </Drawer>
    </div>
  );
};

export default drawer;