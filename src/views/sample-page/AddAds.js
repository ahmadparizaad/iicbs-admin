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

const AddAds = () => {
  const [formData, setFormData] = useState({
    user: "",
    package: "",
    image: "",
    zone: "",
    start: "",
    end: "",
    days: "",
    isApproved: "",
    remark: "",
  
  });
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };


  const handleAdsFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdsFormSubmit = async() => {
    // Implement your logic to handle the form submission here
    console.log('Form Data:', formData);
    // You can add code to send the form data to the server or update the state as needed
    const formDataToSend = new FormData();
    formDataToSend.append('image', formData.image);

    const API = `${process.env.REACT_APP_BASE_URL}/advertisement/create`;
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
        Add Ads
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">User</Typography>
            <TextField
              name="user"
              value={formData.user}
              onChange={handleAdsFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Package</Typography>
            <TextField
              name="package"
              value={formData.package}
              onChange={handleAdsFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">zone</Typography>
            <TextField
              name="zone"
              value={formData.zone}
              onChange={handleAdsFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Start Date</Typography>
            <TextField
             type='date'
              name="start"
              value={formData.start}
              onChange={handleAdsFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          {/* <Grid item xs={6}>
            <Typography variant="subtitle1">Type of Advertisement</Typography>
            <FormControl fullWidth>
              <InputLabel>Type of Advertisement</InputLabel>
              <Select
                name="typeOfAdvertisement"
                value={formData.typeOfAdvertisement}
                onChange={handleAdsFormChange}
              >
                <MenuItem value="General">General</MenuItem>
                <MenuItem value="Media">Media</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
          <Grid item xs={6}>
            <Typography variant="subtitle1">End Date</Typography>
            <TextField
              type='date'
              name="end"
              value={formData.end}
              onChange={handleAdsFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Days</Typography>
            <TextField
              name="days"
              value={formData.days}
              onChange={handleAdsFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Is Approved</Typography>
            <TextField
              name="isApproved"
              value={formData.isApproved}
              onChange={handleAdsFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Remark</Typography>
            <TextField
              name="remark"
              value={formData.remark}
              onChange={handleAdsFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Image</Typography>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </Grid>
          {/* <Grid item xs={6}>
            <Typography variant="subtitle1">Date Available</Typography>
            <TextField
              type="date"
              label="Date Available"
              name="dateAvailable"
              value={formData.dateAvailable}
              onChange={handleAdsFormChange}
              fullWidth
              margin="normal"
            />
          </Grid> */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAdsFormSubmit}
            >
              Add Ads
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddAds;
