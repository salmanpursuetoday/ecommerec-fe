import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import _get from 'lodash/get';

import CartContext from '../../../utils/cartContext/context';

const Product = (props) => {
  const { products, handleAddToCart } = props;
  const { cart, setCart } = useContext(CartContext);

  const handleRemoveCart = (id) => {
    const items = cart?.filter((item) => item?._id !== id)
    setCart(items);
  }

  const checkFromCart = (data) => {
    const isExist = cart?.find((item) => item?._id === data?._id)
    if (isExist) return (<Button size="small" color="primary" onClick={() => handleRemoveCart(data?._id)}>
      Remove from cart
    </Button>);
    else return (<Button size="small" color="primary" onClick={() => handleAddToCart(data)}>
      Add to cart
    </Button>)
  }


  return (
    <Container maxWidth="xsm">
      <Grid container spacing={3} style={{ padding: '30px' }}>
        {
          products?.map((item) =>
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
                  <CardActions style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', bottom: '0%', }}>
                    {checkFromCart(item)}
                  </CardActions>
                </Card>
              </Grid>
            </>
          )
        }
      </Grid>
    </Container>
  );
}

Product.propTypes = {
  products: PropTypes.instanceOf(Object),
  handleAddToCart: PropTypes.func
}

export default Product;
