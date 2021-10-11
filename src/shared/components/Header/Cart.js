import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import { styled } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import _get from 'lodash/get';

import cartContext from '../../../utils/cartContext/context';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    color: '#ffffff'
  },
}));

export default function CustomizedBadges() {
  const { cart } = useContext(cartContext);
  const history = useHistory();

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={_get(cart, 'length', 0)} color="secondary" onClick={() => history.push('/cart')}>
        <ShoppingCartIcon style={{ color: '#ffffff' }} />
      </StyledBadge>
    </IconButton>
  );
}