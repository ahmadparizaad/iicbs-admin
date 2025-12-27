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
  DialogActions,
  Dialog,
  DialogContent,
  DialogTitle,
  // FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PackageManagement = () => {
  const navigate = useNavigate();

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editPackageData, setEditPackageData] = useState(null);
  const [packageD, setPackageD] = useState({});
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const fetchData = async () => {
    const API = `${process.env.REACT_APP_BASE_URL}/package/get`;
    try {
      const response = await axios.get(API);
      setPackageD(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (packageD) => {
    // Open the edit modal and set the package data
    setEditPackageData(packageD);
    setEditModalOpen(true);
  };
  const handleDelete = (product) => {
    setPackageD(product);
    setDeleteDialogOpen(true);
  };
  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setPackageD({});
  };
  const handleConfirmDelete = async () => {
    // Implement logic to delete data
    console.log('Deleting data:', packageD);
    if (packageD && packageD._id) {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_BASE_URL}/package/delete/${packageD._id}`,
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
    handleCloseDeleteDialog();
  };
  const handleAddPackage = () => {
    // Navigate to "/addpackage" when the "Add Package" button is clicked
    navigate('/addpackage');
  };

  const handleCloseEditModal = () => {
    // Close the edit modal
    setEditModalOpen(false);
    // Optionally, reset the editPackageData state
    setEditPackageData(null);
  };

  const handleSaveEdit = async () => {
    // Implement logic to save the edited package data
    console.log('Saving edited package data:', editPackageData);
    // Close the edit modal
    handleCloseEditModal();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/package/update/${editPackageData._id}`,
        editPackageData,
      );
      if (response.status === 200) {
        // Update the package data in the state directly
        setPackageD(editPackageData);
        console.log('Package updated successfully:', response.data);
      } else {
        console.error('Failed to update package:', response.data);
      }
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };

  return (
    <PageContainer title="Package Management" description="Manage packages for customers">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        {/* Title "Package Management" */}
        <Typography variant="h5">Package Management</Typography>
        {/* Add Package Button */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAddPackage}
        >
          Add Package
        </Button>
      </div>
      <DashboardCard>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <TextField style={{ flex: 1 }} placeholder="Search" />
          <Button>
            <SettingsIcon />
          </Button>
        </div>
        <TableContainer component={Paper} >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Package Name</TableCell>
                <TableCell>Application From</TableCell>
                <TableCell>Application To</TableCell>
                <TableCell>Package Amount</TableCell>
                <TableCell>Discount</TableCell>
                <TableCell>Discount Applicable Till Date</TableCell>
                <TableCell>Validaty Of The Package</TableCell>
                <TableCell>Next Renewal Date</TableCell>
                <TableCell>Company Members Allowed</TableCell>
                <TableCell>Grace Period Allowed After Package Expiry</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Map table data */}
              {Array.isArray(packageD.data)
                ? packageD.data.map((data) => (
                    <TableRow key={data.id}>
                      <TableCell>{data.id}</TableCell>
                      <TableCell>
                        {typeof data.category === 'object'
                          ? data.category?.name ?? 'No Category'
                          : data.category}
                      </TableCell>
                      <TableCell>{data.name}</TableCell>
                      <TableCell>{data.applicableFrom}</TableCell>
                      <TableCell>{data.applicableTo}</TableCell>
                      <TableCell>{data.packageAmount}</TableCell>
                      <TableCell>{data.discount}</TableCell>
                      <TableCell>{data.discountApplicableTillDate}</TableCell>
                      <TableCell>{data.validityOfThePackage}</TableCell>
                      <TableCell>{data.nextRenewalDate}</TableCell>
                      <TableCell>{data.companyMembersAllowed}</TableCell>
                      <TableCell>{data.gracePeriodAllowedAfterPackageExpiry}</TableCell>
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
      {editModalOpen && editPackageData && (
        <Dialog open={editModalOpen} Close={handleCloseEditModal}>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogContent>
            <TextField
              label="Package ID"
              name="id"
              value={editPackageData.id}
              onChange={(e) => setEditPackageData({ ...editPackageData, id: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Category"
              name="category"
              value={
                typeof editPackageData.category === 'object'
                  ? editPackageData.category?.name ?? 'No Category'
                  : editPackageData.category
              }
              onChange={(e) => setEditPackageData({ ...editPackageData, category: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Package Name"
              name="name"
              value={editPackageData.name}
              onChange={(e) => setEditPackageData({ ...editPackageData, name: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              type="Date"
              label="Applicable From"
              name="applicableFrom"
              value={editPackageData.applicableFrom}
              onChange={(e) =>
                setEditPackageData({ ...editPackageData, applicableFrom: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              type="Date"
              label="Applicable To"
              name="applicableTo"
              value={editPackageData.applicableTo}
              onChange={(e) =>
                setEditPackageData({ ...editPackageData, applicableTo: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Package Amount"
              name="packageAmount"
              value={editPackageData.packageAmount}
              onChange={(e) =>
                setEditPackageData({ ...editPackageData, packageAmount: e.target.value })
              }
              fullWidth
              margin="normal"
            />

            <TextField
              label="Discount"
              name="discount"
              value={editPackageData.discount}
              onChange={(e) => setEditPackageData({ ...editPackageData, discount: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Discount Applicable Till Date"
              name="discountApplicableTillDate"
              type="Date"
              value={editPackageData?.discountApplicableTillDate}
              onChange={(e) =>
                setEditPackageData({
                  ...editPackageData,
                  discountApplicableTillDate: e.target.value,
                })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Validity Of The Package"
              name="validityOfThePackage"
              value={editPackageData.validityOfThePackage}
              onChange={(e) =>
                setEditPackageData({ ...editPackageData, validityOfThePackage: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              type="Date"
              label="Next Renewal Date"
              name="nextRenewalDate"
              value={editPackageData.nextRenewalDate}
              onChange={(e) =>
                setEditPackageData({ ...editPackageData, nextRenewalDate: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Company Members Allowed"
              name="companyMembersAllowed"
              value={editPackageData.companyMembersAllowed}
              onChange={(e) =>
                setEditPackageData({ ...editPackageData, companyMembersAllowed: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Grace Period Allowed After Package Expiry"
              name="gracePeriodAllowedAfterPackageExpiry"
              value={editPackageData.gracePeriodAllowedAfterPackageExpiry}
              onChange={(e) =>
                setEditPackageData({
                  ...editPackageData,
                  gracePeriodAllowedAfterPackageExpiry: e.target.value,
                })
              }
              fullWidth
              margin="normal"
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
      )}
      <Dialog open={isDeleteDialogOpen} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Delete Product</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this Package?</Typography>
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

export default PackageManagement;
