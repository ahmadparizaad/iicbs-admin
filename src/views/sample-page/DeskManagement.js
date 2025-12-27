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
  DialogActions,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const DeskManagement = () => {
  const navigate = useNavigate();

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editDeskData, setEditDeskData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [tableDataDelete, setTableDataDelete] = useState([]);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  // const tableData = [
  //   {
  //     id: '1',
  //     deskId: 'D1',
  //     deskNumber: 'Desk 101',
  //     assignedTo: 'User A',
  //     reportingTo: 'Manager X',
  //     groupMemberOf: 'Group A',
  //     permissionSets: 'Set 1',
  //     status: 'Active',
  //   },
  //   {
  //     id: '2',
  //     deskId: 'D2',
  //     deskNumber: 'Desk 102',
  //     assignedTo: 'User B',
  //     reportingTo: 'Manager Y',
  //     groupMemberOf: 'Group B',
  //     permissionSets: 'Set 2',
  //     status: 'Inactive',
  //   },
  // ];

  const fetchData = async () => {
    const API = `${process.env.REACT_APP_BASE_URL}/desk/get/`;
    try {
      const response = await axios.get(API);
      setTableData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleEdit = (deskData) => {
    // Open the edit modal and set the desk data
    setEditModalOpen(true);
    setEditDeskData(deskData);
  };

  const handleSaveEdit = async () => {
    // Implement logic to save the edited package data
    console.log('Saving edited package data:', editDeskData);
    // Close the edit modal
    handleCloseEditModal();
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/desk/update/${editDeskData._id}`,
        editDeskData,
      );
      if (response.status === 200) {
        // Update the package data in the state directly
        setTableData(editDeskData);
        console.log('Package updated successfully:', response.data);
      } else {
        console.error('Failed to update package:', response.data);
      }
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };

  const handleDelete = (product) => {
    setTableDataDelete(product);
    setDeleteDialogOpen(true);
  };
  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setTableDataDelete({});
  };
  const handleConfirmDelete = async () => {
   // Implement logic to delete data
    console.log('Deleting data:', tableDataDelete);
    if (tableDataDelete && tableDataDelete._id) {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_BASE_URL}/desk/delete/${tableDataDelete._id}`,
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

  const handleAddDesk = () => {
    // Navigate to "/adddesk" when the "Add Desk" button is clicked
    navigate('/adddesk');
  };

  const handleCloseEditModal = () => {
    // Close the edit modal
    setEditModalOpen(false);
    // Optionally, reset the editDeskData state
    setEditDeskData(null);
  };

  return (
    <PageContainer title="Desk Management" description="Manage desks in the system">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        {/* Title "Desk Management" */}
        <Typography variant="h5">Desk Management</Typography>
        {/* Add Desk Button */}
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddDesk}>
          Add Desk
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
                <TableCell>Desk Number</TableCell>
                <TableCell>Desk Name</TableCell>
                <TableCell>Employee</TableCell>
                <TableCell>Members</TableCell>
                <TableCell>Count Member Number</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Is Valid</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Map table data */}
              {Array.isArray(tableData.data) ? (tableData.data.map((data) => (
                <TableRow key={data.id}>
                  <TableCell>{data.number}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.employee}</TableCell>
                  <TableCell>{data.members}</TableCell>
                  <TableCell>{data.countMemberNumber}</TableCell>
                  <TableCell>{data.description}</TableCell>
                  <TableCell>{data.status}</TableCell>
                  <TableCell>{data.isValid}</TableCell>
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
              ))):(null)}
            </TableBody>
          </Table>
        </TableContainer>
      </DashboardCard>

     

   {/* Edit Modal */}
   { editDeskData && (
        <Dialog open={editModalOpen} Close={handleCloseEditModal}>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogContent>
            <TextField
              label="Desk Number"
              name="number"
              value={editDeskData.number}
              onChange={(e) => setEditDeskData({ ...editDeskData, number: e.target.value })}
              fullWidth
              margin="normal"
            />
            
            <TextField
              label="Desk Name"
              name="name"
              value={editDeskData.name}
              onChange={(e) => setEditDeskData({ ...editDeskData, name: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Employee"
              name="employee"
              value={editDeskData.employee}
              onChange={(e) =>
                setEditDeskData({ ...editDeskData, employee: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Members"
              name="members"
              value={editDeskData.members}
              onChange={(e) =>
                setEditDeskData({ ...editDeskData, members: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Count Member Number"
              name="countMemberNumber"
              value={editDeskData.countMemberNumber}
              onChange={(e) =>
                setEditDeskData({ ...editDeskData, countMemberNumber: e.target.value })
              }
              fullWidth
              margin="normal"
            />

            <TextField
              label="Description"
              name="description"
              value={editDeskData.description}
              onChange={(e) => setEditDeskData({ ...editDeskData, description: e.target.value })}
              fullWidth
              margin="normal"
            />
            
            <TextField
              label="Status"
              name="status"
              value={editDeskData.status}
              onChange={(e) =>
                setEditDeskData({ ...editDeskData, status: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Is Valid"
              name="Is Valid"
              value={editDeskData.isValid}
              onChange={(e) =>
                setEditDeskData({ ...editDeskData, isValid: e.target.value })
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

export default DeskManagement;
