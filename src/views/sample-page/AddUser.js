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

const AddUser = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    shortName: '',
    organizationName: '',
    email: '',
    password: '',
    role: '',
    mobile: '',
    mobile2: '',
    address1: '',
    address2: '',
    address3: '',
    pinCode: '',
    country: '',
    state: '',
    city: '',
    landMark: '',
    gstNumber: '',
    turnover: '',
    panNumber: '',
    typeOfCompany: '',
  });

  const handleUserFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUserFormSubmit = async (e) => {
    // Implement your logic to handle the form submission here
    console.log('Form Data:', formData);
    // You can add code to send the form data to the server or update the state as needed
    const API = `${process.env.REACT_APP_BASE_URL}/auth/register`;
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
      <Typography variant="h2" gutterBottom>
        Add User
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Email</Typography>
            <TextField
              name="email"
              value={formData.email}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">First Name</Typography>
            <TextField
              name="firstName"
              value={formData.firstName}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Last Name</Typography>
            <TextField
              name="lastName"
              value={formData.lastName}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Short Name</Typography>
            <TextField
              name="shortName"
              value={formData.shortName}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          {/* <Grid item xs={6}>
            <Typography variant="subtitle1">Gender</Typography>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select name="gender" value={formData.gender} onChange={handleUserFormChange}>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
          <Grid item xs={6}>
            <Typography variant="subtitle1">Organization</Typography>
            <TextField
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Role</Typography>
            <TextField
              name="role"
              value={formData.role}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Password</Typography>
            <TextField
              type="password"
              name="password"
              value={formData.password}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Contact</Typography>
            <TextField
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Alternate Contact</Typography>
            <TextField
              type="number"
              name="mobile2"
              value={formData.mobile2}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Address 1</Typography>
            <TextField
              name="address1"
              value={formData.address1}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Address 2</Typography>
            <TextField
              name="address2"
              value={formData.address2}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Address 3</Typography>
            <TextField
              name="address3"
              value={formData.address3}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">PinCode</Typography>
            <TextField
              name="pinCode"
              value={formData.pinCode}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Country</Typography>
            <TextField
              name="country"
              value={formData.country}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">State</Typography>
            <TextField
              name="state"
              value={formData.state}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">City</Typography>
            <TextField
              name="city"
              value={formData.city}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">landMark</Typography>
            <TextField
              name="landMark"
              value={formData.landMark}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">GST Number</Typography>
            <TextField
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Turnover</Typography>
            <TextField
              name="turnover"
              value={formData.turnover}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          {/* <Grid item xs={6}>
            <Typography variant="subtitle1">Business Category</Typography>
            <TextField
              name="businessCategory"
              value={formData.businessCategory}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Business SubCategory</Typography>
            <TextField
              name="businessSubCategory"
              value={formData.businessSubCategory}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid> */}
          <Grid item xs={6}>
            <Typography variant="subtitle1">Pan Number</Typography>
            <TextField
              name="panNumber"
              value={formData.panNumber}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Type of company</Typography>
            <TextField
              name="typeOfCompany"
              value={formData.typeOfCompany}
              onChange={handleUserFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleUserFormSubmit}>
              Add User
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddUser;
