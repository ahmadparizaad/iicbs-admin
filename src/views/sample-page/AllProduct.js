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
  Modal,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AllProducts = () => {
  const navigate = useNavigate();
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const API = `${process.env.REACT_APP_BASE_URL}/product/get?.user`;
    try {
      const response = await axios.get(API);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const tableData = [
  //   {
  //     id: '1',
  //     name: 'Product A',
  //     image: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'],
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     taxCode: 'T001',
  //     uom1: 'Unit',
  //     uom2: 'Box',
  //     itemCode: 'P001',
  //     itemBarcode: '123456789',
  //     itemRFIDCode: 'RFID123',
  //     itemQRCode: 'QR123',
  //     typeOfItem: 'Inventory',
  //     openingQuantity: '100 (Location Wise)',
  //     mrp: '$50',
  //     status: 'Active',
  //   },
  //   // Add more product data as needed
  // ];

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
  };

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setDeleteDialogOpen(true);
  };

  const handleOpenImageModal = (images) => {
    setSelectedImages(images);
    setImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setSelectedImages([]);
    setImageModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedProduct({});
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setSelectedProduct({});
  };

  const handleSaveEdit = async () => {
    // Implement logic to save edited data
    console.log('Saving edited data:', selectedProduct);
    handleCloseEditModal(false);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/product/update/${selectedProduct._id}`,
        selectedProduct,
      );
      if (response.status === 200) {
        // Update the package data in the state directly
        setProducts(selectedProduct);
        console.log('Package updated successfully:', response.data);
      } else {
        console.error('Failed to update package:', response.data);
      }
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };

  const handleConfirmDelete = async () => {
    // Implement logic to delete data
    console.log('Deleting data:', selectedProduct);
    handleCloseDeleteDialog();
    if (selectedProduct && selectedProduct) {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_BASE_URL}/product/delete/${selectedProduct._id}`,
        );
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
    navigate('/addproduct');
  };

  return (
    <PageContainer title="All products" description="View all products in the system">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        {/* Title "All Users" */}
        <Typography variant="h5">All Products</Typography>
        {/* Add User Button */}
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddUser}>
          Add products
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
                <TableCell>Name</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Uom1</TableCell>
                <TableCell>Uom2</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Sub Category</TableCell>
                <TableCell>MRP</TableCell>
                <TableCell>HSN Code</TableCell>
                <TableCell>GST Code</TableCell>
                {/* <TableCell>Type of Item</TableCell>
                <TableCell>Opening Quantity (Location Wise)</TableCell> */}
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Map table data */}
              {Array.isArray(products.data)
                ? products.data.map((data) => (
                    <TableRow key={data.id}>
                      <TableCell>{data._id}</TableCell>
                      <TableCell>{data.name}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleOpenImageModal(data.image)}>
                          <ImageIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell>{data.user}</TableCell>
                      <TableCell>{data.description}</TableCell>
                      <TableCell>{data.uom}</TableCell>
                      <TableCell>{data.secUom}</TableCell>
                      <TableCell>{data.category}</TableCell>
                      <TableCell>{data.subCategory}</TableCell>
                      <TableCell>{data.mrp}</TableCell>
                      <TableCell>{data.hsn_code}</TableCell>
                      <TableCell>{data.gst_code}</TableCell>
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

      {/* Image Modal */}
      <Modal open={isImageModalOpen} onClose={handleCloseImageModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            width: 400,
          }}
        >
          {selectedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image_${index + 1}`}
              style={{ width: '100%', marginBottom: '8px' }}
            />
          ))}
        </Box>
      </Modal>

      {/* Edit Modal */}
      <Dialog open={isEditModalOpen} onClose={handleCloseEditModal}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            name="name"
            margin="normal"
            value={selectedProduct.name || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                name: e.target.value,
              }));
            }}
            // Add onChange handler to update the name in the state
          />
          <TextField
            label="User"
            fullWidth
            name="user"
            margin="normal"
            value={selectedProduct.user || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                user: e.target.value,
              }));
            }}
            // Add onChange handler to update the description in the state
          />
          {/* Add form fields for other attributes */}
          <TextField
            label="Category"
            fullWidth
            name="category"
            margin="normal"
            value={selectedProduct.category || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                category: e.target.value,
              }));
            }}
            // Add onChange handler to update the tax code in the state
          />
          <TextField
            label="Sub Category"
            fullWidth
            name="subCategory"
            margin="normal"
            value={selectedProduct.subCategory || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                subCategory: e.target.value,
              }));
            }}
            // Add onChange handler to update the tax code in the state
          />
          <TextField
            label="UOM1"
            fullWidth
            name="uom"
            margin="normal"
            value={selectedProduct.uom || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                uom: e.target.value,
              }));
            }}
            // Add onChange handler to update UOM1 in the state
          />
          <TextField
            label="UOM2"
            fullWidth
            name="secUom"
            margin="normal"
            value={selectedProduct.secUom || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                secUom: e.target.value,
              }));
            }}
            // Add onChange handler to update UOM2 in the state
          />
          <TextField
            label="MRP"
            fullWidth
            name="mrp"
            margin="normal"
            value={selectedProduct.mrp || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                mrp: e.target.value,
              }));
            }}
            // Add onChange handler to update the item code in the state
          />
          <TextField
            label="HSN Code"
            fullWidth
            name="hsn_code"
            margin="normal"
            value={selectedProduct.hsn_code || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                hsn_code: e.target.value,
              }));
            }}
            // Add onChange handler to update the item barcode in the state
          />
          <TextField
            label="GST Code"
            fullWidth
            name="gst_code"
            margin="normal"
            value={selectedProduct.gst_code || ''}
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                gst_code: e.target.value,
              }));
            }}
            // Add onChange handler to update the RFID code in the state
          />
          <TextField
            label="Description"
            fullWidth
            name="description"
            margin="normal"
            value={selectedProduct.description || ''} // Ensure value is not undefined
            onChange={(e) => {
              setSelectedProduct((prevProduct) => ({
                ...prevProduct,
                description: e.target.value,
              }));
            }}
            // Add onChange handler to update the QR code in the state
          />
          {/* <TextField
            label="Type of Item"
            fullWidth
            margin="normal"
            value={selectedProduct.typeOfItem}
            // Add onChange handler to update the type of item in the state
          /> */}
          {/* <TextField
            label="Opening Quantity (Location Wise)"
            fullWidth
            margin="normal"
            value={selectedProduct.openingQuantity}
            // Add onChange handler to update the opening quantity in the state
          />
          <TextField
            label="MRP"
            fullWidth
            margin="normal"
            value={selectedProduct.mrp}
            // Add onChange handler to update the MRP in the state
          /> */}
          {/* Add more fields as needed */}
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

export default AllProducts;
