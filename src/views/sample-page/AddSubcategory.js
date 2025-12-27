import React, { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';

const AddSubCategory = () => {
  const [formData, setFormData] = useState({
    category: '',
    subcategoryId: '',
    subcategoryName: '',
    subcategoryPicture: '',
    subcategoryStatus: '',
    subcategoryActive: '',
  });

  const handleSubCategoryFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubCategoryFormSubmit = () => {
    // Implement your logic to handle the form submission here
    console.log('Form Data:', formData);
    // You can add code to send the form data to the server or update the state as needed
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Add Subcategory
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Category</Typography>
            <TextField
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleSubCategoryFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Subcategory ID</Typography>
            <TextField
              label="Subcategory ID"
              name="subcategoryId"
              value={formData.subcategoryId}
              onChange={handleSubCategoryFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Subcategory Name</Typography>
            <TextField
              label="Subcategory Name"
              name="subcategoryName"
              value={formData.subcategoryName}
              onChange={handleSubCategoryFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Picture</Typography>
            <TextField
              label="Picture"
              name="subcategoryPicture"
              value={formData.subcategoryPicture}
              onChange={handleSubCategoryFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Status</Typography>
            <TextField
              label="Status"
              name="subcategoryStatus"
              value={formData.subcategoryStatus}
              onChange={handleSubCategoryFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Active</Typography>
            <TextField
              label="Active"
              name="subcategoryActive"
              value={formData.subcategoryActive}
              onChange={handleSubCategoryFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubCategoryFormSubmit}
            >
              Add Subcategory
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddSubCategory;
