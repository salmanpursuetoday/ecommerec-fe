import { Typography } from '@material-ui/core';
import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

import { DrawerHeaderWraper } from './styles';

const drawerHeader = (props) => {
  const { title, onClose } = props;
  if (!onClose) return;

  return (
    <DrawerHeaderWraper>
      <Typography variant="h6">{title}</Typography>
      <div>
        <IconButton aria-label="clear" onClick={onClose}>
          <ClearIcon fontSize="small" />
        </IconButton>
      </div>
    </DrawerHeaderWraper>
  );
};

export default drawerHeader;