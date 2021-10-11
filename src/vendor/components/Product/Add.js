import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import _get from 'lodash/get';

const AddProduct = (props) => {
  const { onAdd, onClose } = props;
  const { handleSubmit, control, formState: { errors } } = useForm();
  const [productPictures, setProductPictures] = useState([]);

  const onSubmit = async (data) => {
    const form = new FormData();
    form.append('name', _get(data, 'name', ''));
    form.append('price', _get(data, 'price', 0));
    form.append('description', _get(data, 'description', 0));
    form.append('quantity', _get(data, 'quantity', 0));

    for (let pic of productPictures) {
      form.append('productPictures', pic);
    }
    const res = await onAdd(form);
    onClose();
  }

  const handleProductPictures = (e) => {
    setProductPictures([
      ...productPictures,
      e.target.files[0]
    ]);
  }

  return (
    <div style={{ padding: '5%' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => <TextField
                id="standard-required"
                label="Name"
                variant="outlined"
                fullWidth
                {...field}
                error={errors?.name}
                helperText={errors?.name && errors?.name.message} />}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="price"
              control={control}
              rules={{ required: "price is required" }}
              render={({ field }) => <TextField
                id="standard-required"
                label="Price"
                variant="outlined"
                fullWidth
                {...field}
                error={errors?.price}
                helperText={errors?.price && errors?.price.message} />}
            />
          </Grid>


          <Grid item xs={12}>
            <Controller
              name="description"
              control={control}
              rules={{ required: "price is required" }}
              render={({ field }) => <TextField
                id="standard-required"
                label="Description"
                variant="outlined"
                fullWidth
                {...field}
                error={errors?.description}
                helperText={errors?.description && errors?.description.message} />}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="quantity"
              control={control}
              rules={{ required: "price is required" }}
              render={({ field }) => <TextField
                id="standard-required"
                label="Quantity"
                variant="outlined"
                fullWidth
                {...field}
                error={errors?.quantity}
                helperText={errors?.quantity && errors?.quantity.message} />}
            />
          </Grid>

          <Grid item xs={12}>
            <input type="file" id="files" name="files" multiple onChange={handleProductPictures} />
          </Grid>

          <Grid item xs={12}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button color="primary" onClick={onClose}>cancel</Button>
              <Button color="primary" type="submit">save</Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
AddProduct.propTypes = {
  onAdd: PropTypes.func,
  onClose: PropTypes.func,
}
export default AddProduct;