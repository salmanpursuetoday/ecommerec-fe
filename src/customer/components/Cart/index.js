import React, { useContext } from 'react';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions, } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import _get from 'lodash/get';

import cartContext from '../../../utils/cartContext/context';
import DialogBox from '../../../shared/components/DialogBox';

import Header from '../../../shared/components/Header';


const Cart = (props) => {
  const { handlePlaceOrder, isOrdered, setIsOrderd } = props;
  const { cart, setCart } = useContext(cartContext);

  const handleRemoveCart = (id) => {
    const items = cart?.filter((item) => item?._id !== id)
    setCart(items);
  }

  return (<>
    <Header />
    <DialogBox {...{ isOrdered, setIsOrderd }} />
    <Container maxWidth="xsm">
      <Grid container spacing={3} style={{ padding: '30px' }}>
        {
          cart?.map((item) =>
            <>
              <Grid item xs={12} sm={3}>
                <Card sx={{ maxWidth: 345 }} style={{ minHeight: '100%', position: 'relative' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={`http://localhost:4000/static/${item?.productPictures[0]?.img}`}
                      alt="product"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {_get(item, 'name', '')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {_get(item, 'description', '')}
                      </Typography>
                      <Typography variant="h6" color="text.secondary" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {`${_get(item, 'price', '')}$`}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ display: 'flex', justifyContent: 'flex-end', bottom: '0%', position: 'absolute' }}>
                    <Button size="small" color="primary" onClick={() => handleRemoveCart(item?._id)}>
                      Remove from cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </>
          )
        }
      </Grid>
      {cart?.length > 0 && <Grid item xs={12} sm={12}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button size="small" color="primary" variant='contained' onClick={handlePlaceOrder}>
            Place Order
          </Button>
        </div>
      </Grid>}
    </Container>
  </>
  );
};

export default Cart;