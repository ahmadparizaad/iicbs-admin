import React, { useEffect, useState } from 'react';
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Button,
  IconButton,
  TableContainer,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AllUser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const fetchData = async () => {
    const API = `${process.env.REACT_APP_BASE_URL}/user/get`;
    try {
      const response = await axios.get(API);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedProduct({});
  };

  const handleSaveEdit = async () => {
    // Implement logic to save edited data
    console.log('Saving edited data:', selectedProduct);
    handleCloseEditModal();

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/user/update/${selectedProduct._id}`,
        selectedProduct,
      );
      if (response.status === 200) {
        const updatedProducts = data.user.map((product) => {
          if (product._id === selectedProduct._id) {
            return selectedProduct;
          }
          return product;
        });
        setData(updatedProducts);
        handleCloseEditModal();

        console.log('Product updated successfully:', response.data);
      } else {
        console.error('Failed to update product:', response.data);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  // const tableData = [
  //   {
  //     id: '1',
  //     name: 'A',
  //     group: 'user',
  //     gender: 'Male',
  //     dateOfJoining: '2022-01-01',
  //     designation: 'Employee',
  //     contact: '7896452317',
  //     email: 'user1@example.com',
  //     photo: 'user1.jpg',
  //     locationOfOperation: 'Gurgaon',
  //     numberOfClientsHandled: 10,
  //     deskNumberAllocated: 'D1',
  //     status: 'Active',
  //   },
  //   {
  //     id: '2',
  //     name: 'B',
  //     group: 'Business',
  //     gender: 'Female',
  //     dateOfJoining: '2022-02-01',
  //     designation: 'Manager',
  //     contact: '8796452317',
  //     email: 'user2@example.com',
  //     photo: 'user2.jpg',
  //     locationOfOperation: 'Gurgaon',
  //     numberOfClientsHandled: 15,
  //     deskNumberAllocated: 'D2',
  //     status: 'Active',
  //   },
  // ];

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setSelectedProduct({});
  };

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    // Implement logic to handle delete action
    console.log(`Deleting user with ID: ${selectedProduct._id}`);
    handleCloseDeleteDialog();
    if (selectedProduct && selectedProduct._id) {
      try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/delete`, {
          id: selectedProduct._id,
        });
        if (response.status === 200) {
          console.log('Package deleted successfully');
          fetchData();
        } else {
          console.error('Failed to delete the package');
        }
      } catch (error) {
        console.error('Error deleting package:', error);
      }
    }
  };

  const handleAddUser = () => {
    // Navigate to "/adduser" when the "Add User" button is clicked
    navigate('/adduser');
  };

  return (
    <PageContainer title="All Users" description="View all users in the system">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        {/* Title "All Users" */}
        <Typography variant="h5">All Users</Typography>
        {/* Add User Button */}
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddUser}>
          Add User
        </Button>
      </div>
      <DashboardCard>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <TextField style={{ flex: 1 }} placeholder="Search" />
          <Button>
            <SettingsIcon />
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Short Name</TableCell>
                <TableCell>Email</TableCell>
                {/* <TableCell>Password</TableCell> */}
                <TableCell>Role</TableCell>
                <TableCell>Organization Name</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Alternate Contact</TableCell>
                <TableCell>Address 1</TableCell>
                <TableCell>Address 2</TableCell>
                <TableCell>Address 3</TableCell>
                <TableCell>Pincode</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>State</TableCell>
                <TableCell>City</TableCell>
                <TableCell>LandMark</TableCell>
                <TableCell>GST Number</TableCell>
                <TableCell>Turnover</TableCell>
                <TableCell>Pan Number</TableCell>
                <TableCell>Type of company</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Map table data */}
              {Array.isArray(data?.user)
                ? data.user.map((data) => (
                    <TableRow key={data.id}>
                      <TableCell>{data.id}</TableCell>

                      <TableCell>{data.firstName}</TableCell>
                      <TableCell>{data.lastName}</TableCell>
                      <TableCell>{data.shortName}</TableCell>
                      <TableCell>{data.email}</TableCell>
                      {/* <TableCell>{data.password}</TableCell> */}
                      <TableCell>{data.role}</TableCell>
                      <TableCell>{data.organizationName}</TableCell>
                      <TableCell>{data.mobile}</TableCell>
                      <TableCell>{data.mobile2}</TableCell>
                      <TableCell>{data.address1}</TableCell>
                      <TableCell>{data.address2}</TableCell>
                      <TableCell>{data.address3}</TableCell>
                      <TableCell>{data.pincode}</TableCell>
                      <TableCell>{data.country}</TableCell>
                      <TableCell>{data.state}</TableCell>
                      <TableCell>{data.city}</TableCell>
                      <TableCell>{data.landMark}</TableCell>
                      <TableCell>{data.gstNumber}</TableCell>
                      <TableCell>{data.turnover}</TableCell>
                      <TableCell>{data.panNumber}</TableCell>
                      <TableCell>{data.typeOfCompany}</TableCell>
                      <TableCell>
                        {/* Edit Icon */}
                        <IconButton onClick={() => handleEdit(data)}>
                          <EditIcon />
                        </IconButton>
                        {/* Delete Icon */}
                        <IconButton onClick={() => handleDelete(data)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </DashboardCard>

      {/* Edit Modal */}
      <Dialog open={isEditModalOpen} onClose={handleCloseEditModal}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            label="First Name"
            fullWidth
            name="firstName"
            margin="normal"
            value={selectedProduct.firstName || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                firstName: e.target.value,
              }));
            }}
            // Add onChange handler to update the name in the state
          />
          <TextField
            label="Last Name"
            fullWidth
            name="lastName"
            margin="normal"
            value={selectedProduct.lastName || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                lastName: e.target.value,
              }));
            }}
            // Add onChange handler to update the name in the state
          />
          <TextField
            label="Short Name"
            fullWidth
            name="shortName"
            margin="normal"
            value={selectedProduct.shortName || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                shortName: e.target.value,
              }));
            }}
            // Add onChange handler to update the name in the state
          />
          <TextField
            label="Email"
            fullWidth
            name="email"
            margin="normal"
            value={selectedProduct.email || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                email: e.target.value,
              }));
            }}
            // Add onChange handler to update the description in the state
          />
          {/* Add form fields for other attributes */}
          <TextField
            label="Role"
            fullWidth
            name="role"
            margin="normal"
            value={selectedProduct.role || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                role: e.target.value,
              }));
            }}
            // Add onChange handler to update the tax code in the state
          />
          <TextField
            label="Organization Name"
            fullWidth
            name="organizationName"
            margin="normal"
            value={selectedProduct.organizationName || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                organizationName: e.target.value,
              }));
            }}
            // Add onChange handler to update the tax code in the state
          />
          <TextField
            label="Contact"
            fullWidth
            name="mobile"
            margin="normal"
            value={selectedProduct.mobile || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                mobile: e.target.value,
              }));
            }}
            // Add onChange handler to update UOM1 in the state
          />
          <TextField
            label="Alternate Contact"
            fullWidth
            name="mobile2"
            margin="normal"
            value={selectedProduct.mobile2 || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                mobile2: e.target.value,
              }));
            }}
            // Add onChange handler to update UOM2 in the state
          />
          <TextField
            label="Address 1"
            fullWidth
            name="address1"
            margin="normal"
            value={selectedProduct.address1 || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                address1: e.target.value,
              }));
            }}
            // Add onChange handler to update the item code in the state
          />
          <TextField
            label="Address 2"
            fullWidth
            name="address2"
            margin="normal"
            value={selectedProduct.address2 || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                address2: e.target.value,
              }));
            }}
            // Add onChange handler to update the item code in the state
          />
          <TextField
            label="Address 3"
            fullWidth
            name="address3"
            margin="normal"
            value={selectedProduct.address3 || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                address3: e.target.value,
              }));
            }}
            // Add onChange handler to update the item code in the state
          />
          <TextField
            label="Pincode"
            fullWidth
            name="pincode"
            margin="normal"
            value={selectedProduct.pincode || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                pincode: e.target.value,
              }));
            }}
            // Add onChange handler to update the item barcode in the state
          />
          <TextField
            label="Country"
            fullWidth
            name="country"
            margin="normal"
            value={selectedProduct.country || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                country: e.target.value,
              }));
            }}
            // Add onChange handler to update the RFID code in the state
          />
          <TextField
            label="State"
            fullWidth
            name="state"
            margin="normal"
            value={selectedProduct.state || ''} // Ensure value is not undefined
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                state: e.target.value,
              }));
            }}
            // Add onChange handler to update the QR code in the state
          />
          <TextField
            label="City"
            fullWidth
            name="city"
            margin="normal"
            value={selectedProduct.city || ''} // Ensure value is not undefined
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                city: e.target.value,
              }));
            }}
            // Add onChange handler to update the QR code in the state
          />
          <TextField
            label="Landmark"
            fullWidth
            name="landMark"
            margin="normal"
            value={selectedProduct.landMark || ''} // Ensure value is not undefined
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                landMark: e.target.value,
              }));
            }}
            // Add onChange handler to update the QR code in the state
          />
          <TextField
            label="GST Number"
            fullWidth
            name="gstNumber"
            margin="normal"
            value={selectedProduct.gstNumber || ''} // Ensure value is not undefined
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                gstNumber: e.target.value,
              }));
            }}
            // Add onChange handler to update the QR code in the state
          />
          <TextField
            label="Turnover"
            fullWidth
            name="turnover"
            margin="normal"
            value={selectedProduct.turnover || ''} // Ensure value is not undefined
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                turnover: e.target.value,
              }));
            }}
            // Add onChange handler to update the QR code in the state
          />
          <TextField
            label="Pan Number"
            fullWidth
            name="panNumber"
            margin="normal"
            value={selectedProduct.panNumber || ''} // Ensure value is not undefined
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                panNumber: e.target.value,
              }));
            }}
            // Add onChange handler to update the QR code in the state
          />
          <TextField
            label="Type of company"
            fullWidth
            name="typeOfCompany"
            margin="normal"
            value={selectedProduct.typeOfCompany || ''} // Ensure value is not undefined
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                typeOfCompany: e.target.value,
              }));
            }}
            // Add onChange handler to update the QR code in the state
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={isDeleteDialogOpen} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Delete Product</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this product?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
};

export default AllUser;
