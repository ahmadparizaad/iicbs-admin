import React, { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';

const AddCategory = () => {
  const [formData, setFormData] = useState({
    categoryId: '',
    categoryName: '',
    categoryPicture: '',
    categoryStatus: '',
    categoryActive: '',
  });

  const handleCategoryFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryFormSubmit = () => {
    // Implement your logic to handle the form submission here
    console.log('Form Data:', formData);
    // You can add code to send the form data to the server or update the state as needed
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Add Category
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Category ID</Typography>
            <TextField
              label="Category ID"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleCategoryFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Category Name</Typography>
            <TextField
              label="Category Name"
              name="categoryName"
              value={formData.categoryName}
              onChange={handleCategoryFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Picture</Typography>
            <TextField
              label="Picture"
              name="categoryPicture"
              value={formData.categoryPicture}
              onChange={handleCategoryFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Status</Typography>
            <TextField
              label="Status"
              name="categoryStatus"
              value={formData.categoryStatus}
              onChange={handleCategoryFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Active</Typography>
            <TextField
              label="Active"
              name="categoryActive"
              value={formData.categoryActive}
              onChange={handleCategoryFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCategoryFormSubmit}
            >
              Add Category
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddCategory;
