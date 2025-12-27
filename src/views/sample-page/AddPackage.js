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
import  Axios  from 'axios';

const AddPackage = () => {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    applicableFrom: '',
    applicableTo: '',
    packageAmount: '',
    discount: '',
    discountApplicableTillDate: '',
    validityOfThePackage: '',
    nextRenewalDate: '',
    companyMembersAllowed: '',
    gracePeriodAllowedAfterPackageExpiry: '',
  });

  const handlePackageFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleDateChange = (name, date) => {
  //   setFormData({ ...formData, [name]: date });
  // };

  const handlePackageFormSubmit = async () => {
    // Implement your logic to handle the form submission here
    console.log('Form Data:', formData);
    // You can add code to send the form data to the server or update the state as needed
    const API = `${process.env.REACT_APP_BASE_URL}/package/create`;
    try {
      const response = await Axios.post(API, formData);

      console.log('Success', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Add Package
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Category</Typography>
            <TextField
              name="category"
              value={formData.category}
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Name</Typography>
            <TextField
              name="name"
              value={formData.name}
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Applicable From</Typography>
            <TextField
              type="Date"
              name="applicableFrom"
              value={formData.applicableFrom}
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Applicable To</Typography>
            <TextField
              type="Date"
              name="applicableTo"
              value={formData.applicableTo}
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Package Amount</Typography>
            <TextField
              name="packageAmount"
              value={formData.packageAmount}
              onChange={handlePackageFormChange}
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
                onChange={handlePackageFormChange}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
          <Grid item xs={6}>
            <Typography variant="subtitle1">Discount</Typography>
            <TextField
              name="discount"
              value={formData.discount}
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Discount Applicable Till Date</Typography>
            <TextField
              type="Date"
              name="discountApplicableTillDate"
              value={formData.discountApplicableTillDate}
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Validity Of The Package</Typography>
            <TextField
              name="validityOfThePackage"
              value={formData.validityOfThePackage}
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Next Renewal Date</Typography>
            <TextField
              type="Date"
              name="nextRenewalDate"
              value={formData.nextRenewalDate}
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Company Members Allowed</Typography>
            <TextField
              name="companyMembersAllowed"
              value={formData.companyMembersAllowed}
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Grace Period Allowed After Package Expiry</Typography>
            <TextField
              name="gracePeriodAllowedAfterPackageExpiry"
              value={formData.gracePeriodAllowedAfterPackageExpiry}
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          {/* <Grid item xs={6}>
            <Typography variant="subtitle1">Code</Typography>
            <TextField
              name="code"
              value={formData.code}
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />
          </Grid> */}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handlePackageFormSubmit}>
              Add Package
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddPackage;
