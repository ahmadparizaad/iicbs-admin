import React, { useState } from 'react';
import axios from 'axios';

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

const AddNews = () => {
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    description: '',
    image: '',
    isVerified: '',
    createdBy: '',
    language: '',
    newsType: '',
  });

  const handleNewsFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleNewsFormSubmit = async () => {
    console.log('Form Data:', formData);
    const formDataToSend = new FormData();
    formDataToSend.append('image', formData.image);

    const API = `${process.env.REACT_APP_BASE_URL}/News/create`;
    try {
      const response = await axios.post(API, formData, {
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
        Add News
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Title</Typography>
            <TextField
              name="title"
              value={formData.title}
              onChange={handleNewsFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle1">Language</Typography>
            <TextField
              name="language"
              value={formData.language}
              onChange={handleNewsFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>

          {/* <Grid item xs={6}>
            <Typography variant="subtitle1">Status</Typography>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={formData.status}
                onChange={handleNewsFormChange}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
          <Grid item xs={6}>
            <Typography variant="subtitle1">News Type</Typography>
            <TextField
              name="newsType"
              value={formData.newsType}
              onChange={handleNewsFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Created By</Typography>
            <TextField
              name="createdBy"
              value={formData.createdBy}
              onChange={handleNewsFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle1">Is Verified</Typography>
            <TextField
              name="isVerified"
              value={formData.isVerified}
              onChange={handleNewsFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Image</Typography>
            <TextField
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Description</Typography>
            <TextField
              multiline
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleNewsFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Short Description</Typography>
            <TextField
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleNewsFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleNewsFormSubmit}>
              Add News
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddNews;
