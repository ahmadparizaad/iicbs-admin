import React, { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import Axios from 'axios';

const AddBlog = () => {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    shortDescription: '',
    description: '',
    createdBy: '',
    isVerified: '',
    language: '',
    blogType: '',
  });

  const handleBlogFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleBlogFormSubmit = async() => {
    // Implement your logic to handle the form submission here
    console.log('Form Data:', formData);
    const formDataToSend = new FormData();
    formDataToSend.append('image', formData.image);

    const API = `${process.env.REACT_APP_BASE_URL}/blog/create`;
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
    // You can add code to send the form data to the server or update the state as needed
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Add Blog
      </Typography>
      <form>
        <Grid container spacing={2}>
          
          <Grid item xs={6}>
            <Typography variant="subtitle1">Title</Typography>
            <TextField
              name="title"
              value={formData.title}
              onChange={handleBlogFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Short Description</Typography>
            <TextField
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleBlogFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Image</Typography>
            <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Description</Typography>
            <TextField
              multiline
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleBlogFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Created By</Typography>
            <TextField
              name="createdBy"
              value={formData.createdBy}
              onChange={handleBlogFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Is Verified</Typography>
            <TextField
              name="isVerified"
              value={formData.isVerified}
              onChange={handleBlogFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Language</Typography>
            <TextField
              name="language"
              value={formData.language}
              onChange={handleBlogFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Blog Type</Typography>
            <TextField
              name="blogType"
              value={formData.blogType}
              onChange={handleBlogFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleBlogFormSubmit}>
              Add Blog
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddBlog;
