import React, { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  // InputLabel,
  FormControl,
  // Box,
  // DatePicker,
} from '@mui/material';
import  Axios  from 'axios';
const AddDesk = () => {
  const [formData, setFormData] = useState({
    number: "",
    name: "",
    employee: "",
    members: "",
    countMemberNumber: "",
    description: "",
    status: "",
    isValid: "",
  });

  const handleDeskFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleDateChange = (name, date) => {
  //   setFormData({ ...formData, [name]: date });
  // };

  const handleDeskFormSubmit = async() => {
    // Implement your logic to handle the form submission here
    console.log('Form Data:', formData);
    // You can add code to send the form data to the server or update the state as needed
    const API = `${process.env.REACT_APP_BASE_URL}/desk/create`;
    try {
      const response = await Axios.post(API, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Success', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Add Desk
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Desk Number</Typography>
            <TextField
              name="number"
              value={formData.number}
              onChange={handleDeskFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Desk Name</Typography>
            <TextField
              name="name"
              value={formData.name}
              onChange={handleDeskFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Employee</Typography>
            <TextField
              name="employee"
              value={formData.employee}
              onChange={handleDeskFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Members</Typography>
            <TextField
              name="members"
              value={formData.members}
              onChange={handleDeskFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Count Member Number</Typography>
            <TextField
              name="countMemberNumber"
              value={formData.countMemberNumber}
              onChange={handleDeskFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Description</Typography>
            <TextField
              name="description"
              value={formData.description}
              onChange={handleDeskFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Status</Typography>
            <FormControl fullWidth>
              <Select
                name="status"
                value={formData.status}
                onChange={handleDeskFormChange}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
                <MenuItem value="Hold">Hold</MenuItem>
                <MenuItem value="Block">Block</MenuItem>
                <MenuItem value="NotInUse">Not in use</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Is Valid</Typography>
            <FormControl fullWidth>
              <Select
                name="isValid"
                value={formData.isValid}
                onChange={handleDeskFormChange}
              >
                <MenuItem value="true">Yes</MenuItem>
                <MenuItem value="false">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDeskFormSubmit}
            >
              Add Desk
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddDesk;
