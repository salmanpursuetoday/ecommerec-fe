import React, { Children, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import _get from 'lodash/get';

import UserContext from '../../../utils/userContext/context';
import cartContext from '../../../utils/cartContext/context';

import Cart from './Cart';
import { StyledButtonWrapper } from './Styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex'
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    }
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { cart, setCart } = useContext(cartContext);
  const { user, setUser } = useContext(UserContext);

  const logoutUser = () => {
    localStorage.clear();
    setUser(null);
    setCart([]);
  }

  const renderNonLogedInLinks = () => {
    return (
      <>
        <Button color="inherit" href="/login">login</Button>
        <Button color="inherit" href="/register">register</Button>
      </>
    );
  }

  const renderLogedInLinks = () => {
    return (
      <Button color="inherit" onClick={logoutUser}>LOGOUT</Button>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <StyledButtonWrapper>
              Friendship
            </StyledButtonWrapper>
            {user?.role === 'admin' && <>
              <StyledButtonWrapper>
                <Button color="inherit" href="/admin/users">Users</Button>
              </StyledButtonWrapper>
              <StyledButtonWrapper>
                <Button color="inherit" href="/admin">Vendors</Button>
              </StyledButtonWrapper>
              <StyledButtonWrapper>
                <Button color="inherit" href="/admin/orders">Orders</Button>
              </StyledButtonWrapper>
            </>
            }
          </Typography>
          {_get(cart, 'length', 0) > 0 && <Cart />}
          <Box className={classes.buttons}>
            {user ? renderLogedInLinks() : renderNonLogedInLinks()}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
