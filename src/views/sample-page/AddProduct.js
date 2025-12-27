import React, { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  // Select,
  // MenuItem,
  // InputLabel,
  // FormControl,
} from '@mui/material';
import Axios from 'axios';
const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    user: '',
    category: '',
    subCategory: '',
    uom: '',
    secUom: '',
    mrp: '',
    hsn_code: '',
    gst_code: '',
    description: '',
    image: '',
  });

  const handleProductFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleProductFormSubmit = async () => {
    console.log('Form Data:', formData);
    const formDataToSend = new FormData();
    formDataToSend.append('image', formData.image);

    const API = `${process.env.REACT_APP_BASE_URL}/product/create`;
    try {
      const response = await Axios.post(API, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Success', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Add Product
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Product Name</Typography>
            <TextField
              name="name"
              value={formData.name}
              onChange={handleProductFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Category</Typography>
            <TextField
              name="category"
              value={formData.category}
              onChange={handleProductFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Sub Category</Typography>
            <TextField
              name="subCategory"
              value={formData.subCategory}
              onChange={handleProductFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">MRP</Typography>
            <TextField
              name="mrp"
              value={formData.mrp}
              onChange={handleProductFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Product Images (Upload up to 5)</Typography>
            <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">User</Typography>
            <TextField
              name="user"
              value={formData.user}
              onChange={handleProductFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Product Description</Typography>
            <TextField
              name="description"
              value={formData.description}
              onChange={handleProductFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">HSN Code</Typography>
            <TextField
              name="hsn_code"
              value={formData.hsn_code}
              onChange={handleProductFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">GST Code</Typography>
            <TextField
              name="gst_code"
              value={formData.gst_code}
              onChange={handleProductFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">UOM 1</Typography>
            <TextField
              name="uom"
              value={formData.uom}
              onChange={handleProductFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">UOM 2</Typography>
            <TextField
              name="secUom"
              value={formData.secUom}
              onChange={handleProductFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          {/* <Grid item xs={6}>
            <Typography variant="subtitle1">Item Code</Typography>
            <TextField
              label="Item Code"
              name="itemCode"
              value={formData.itemCode}
              onChange={handleProductFormChange}
              fullWidth
              margin="normal"
            />
          </Grid> */}
          {/* <Grid item xs={6}>
            <Typography variant="subtitle1">Item Barcode</Typography>
            <TextField
              label="Item Barcode"
              name="itemBarcode"
              value={formData.itemBarcode}
              onChange={handleProductFormChange}
              fullWidth
              margin="normal"
            />
          </Grid> */}
          {/* <Grid item xs={6}>
            <Typography variant="subtitle1">Item RFID Code</Typography>
            <TextField
              label="Item RFID Code"
              name="itemRFIDCode"
              value={formData.itemRFIDCode}
              onChange={handleProductFormChange}
              fullWidth
              margin="normal"
            />
          </Grid> */}
          {/* <Grid item xs={6}>
            <Typography variant="subtitle1">Item QR Code</Typography>
            <TextField
              label="Item QR Code"
              name="itemQRCode"
              value={formData.itemQRCode}
              onChange={handleProductFormChange}
              fullWidth
              margin="normal"
            />
          </Grid> */}
          {/* <Grid item xs={6}>
            <Typography variant="subtitle1">Type of Item</Typography>
            <FormControl fullWidth>
              <InputLabel>Type of Item</InputLabel>
              <Select name="itemType" value={formData.itemType} onChange={handleProductFormChange}>
                <MenuItem value="Service">Service</MenuItem>
                <MenuItem value="Assets">Assets</MenuItem>
                <MenuItem value="Inventory">Inventory</MenuItem>
                <MenuItem value="Returnable">Returnable</MenuItem>
                <MenuItem value="Opening Quantity (Location Wise)">
                  Opening Quantity (Location Wise)
                </MenuItem>
                <MenuItem value="MRP">MRP</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
          {/* <Grid item xs={6}>
            <Typography variant="subtitle1">Opening Quantity (Location Wise)</Typography>
            <TextField
              label="Opening Quantity"
              name="openingQuantity"
              value={formData.openingQuantity}
              onChange={handleProductFormChange}
              fullWidth
              margin="normal"
            />
          </Grid> */}

          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleProductFormSubmit}>
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddProduct;
