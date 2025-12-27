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
  // Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelIcon from '@mui/icons-material/Cancel';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ImageIcon from '@mui/icons-material/Image';

const AdvertisementPage = () => {
  const [Ads, setAds] = useState([]);
  // const [selectedImages, setSelectedImages] = useState([]);
  // const [isImageModalOpen, setImageModalOpen] = useState(false);

  const fetchData = async () => {
    const API = `${process.env.REACT_APP_BASE_URL}/advertisement/get`;
    try {
      const response = await axios.get(API);
      setAds(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenImageModal = (images) => {
    // setSelectedImages(images);
    // setImageModalOpen(true);
  };
  // const [tableData, setTableData] = useState([
  //   {
  //     id: '1',
  //     title: 'Advertisement 1',
  //     postingFrom: '2022-01-01',
  //     postLocation: 'City A',
  //     offers: 'Discounts',
  //     status: 'Active',
  //     paymentStatus: 'Paid',
  //     refCode: 'REF001',
  //     dateAvailable: '2022-02-01',
  //     typeOfAdvertisement: 'General',
  //     positioningOfPost: 'Top',
  //   },
  //   {
  //     id: '2',
  //     title: 'Advertisement 2',
  //     postingFrom: '2022-02-01',
  //     postLocation: 'City B',
  //     offers: 'Free Shipping',
  //     status: 'Inactive',
  //     paymentStatus: 'Pending',
  //     refCode: 'REF002',
  //     dateAvailable: '2022-03-01',
  //     typeOfAdvertisement: 'Marketing',
  //     positioningOfPost: 'Bottom',
  //   },
  // ]);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedAdvertisement, setSelectedAdvertisement] = useState();
  const [selectedAdsDelete, setSelectedAdsDelete] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (advertisement) => {
    setSelectedAdvertisement(advertisement);
    setEditModalOpen(true);
  };

  const handleDelete = (selectedAds) => {
    setSelectedAdsDelete(selectedAds);
    setDeleteDialogOpen(true);
  };
  const confirmDelete = async () => {
    console.log('SelectedAdsDelete', selectedAdsDelete);
    if (selectedAdsDelete && selectedAdsDelete._id) {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_BASE_URL}/ads/${selectedAdsDelete._id}`,
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
    setDeleteDialogOpen(false);
  };

  const handleSaveEdit = async () => {
    // Implement logic to save edited data
    console.log('Saving edited data:', selectedAdvertisement);
    setEditModalOpen(false);
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/advertisement/update/${selectedAdvertisement._id}`,
        selectedAdvertisement,
      );
      if (response.status === 200) {
        // Update the package data in the state directly
        setAds(selectedAdvertisement);
        console.log('Package updated successfully:', response.data);
      } else {
        console.error('Failed to update package:', response.data);
      }
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };
  // const handleSaveEdit = async () => {
  //   setEditModalOpen(false);
  //   try {
  //     const response = await axios.put(
  //       `${process.env.REACT_APP_BASE_URL}/advertisement/update/${selectedAdvertisement._id}`,
  //       selectedAdvertisement,
  //     );
  //     if (response.status === 200) {
  //       // Update the state with the edited advertisement
  //       setAds((prevAds) => {
  //         return prevAds.map((ad) => {
  //           if (ad._id === selectedAdvertisement._id) {
  //             return selectedAdvertisement;
  //           }
  //           return ad;
  //         });
  //       });
  //       console.log('Advertisement updated successfully:', response.data);
  //     } else {
  //       console.error('Failed to update advertisement:', response.data);
  //     }
  //   } catch (error) {
  //     console.error('Error updating advertisement:', error);
  //   }
  // };

  const handleAddUser = () => {
    // Navigate to "/adduser" when the "Add User" button is clicked
    navigate('/addads');
  };

  return (
    <PageContainer title="All Advertisements" description="View all advertisements">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        {/* Title "All Users" */}
        <Typography variant="h5">All Advertisements</Typography>
        {/* Add User Button */}
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddUser}>
          Add Ads
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
                {/* <TableCell>ID</TableCell> */}
                <TableCell>User</TableCell>
                <TableCell>Package</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Zone</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell>Days</TableCell>
                {/* <TableCell>Is Approved</TableCell> */}
                <TableCell>Remark</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Map table data */}
              {Array.isArray(Ads.data)
                ? Ads.data.map((data) => (
                    <TableRow key={data.id}>
                      {/* <TableCell>{data.id}</TableCell> */}
                      <TableCell>
                        {typeof data.user === 'object' ? data.user?._id ?? 'No User id' : data.user}
                      </TableCell>
                      <TableCell>{data.package}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleOpenImageModal(data.image)}>
                          <ImageIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell>{data.zone}</TableCell>
                      <TableCell>{data.start}</TableCell>
                      <TableCell>{data.end}</TableCell>
                      <TableCell>{data.days}</TableCell>
                      {/* <TableCell>{data.isApproved}</TableCell> */}
                      <TableCell>{data.remark}</TableCell>

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
      <Dialog open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <DialogTitle>Edit Advertisement</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="User"
                fullWidth
                value={selectedAdvertisement?.user.id || ''}
                onChange={(e) =>
                  setSelectedAdvertisement({ ...selectedAdvertisement, user: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Package"
                fullWidth
                value={selectedAdvertisement?.package || ''}
                onChange={(e) =>
                  setSelectedAdvertisement({
                    ...selectedAdvertisement,
                    package: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Image"
                type="file"
                fullWidth
                value={selectedAdvertisement?.image || ''}
                onChange={(e) =>
                  setSelectedAdvertisement({
                    ...selectedAdvertisement,
                    image: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Zone"
                fullWidth
                value={selectedAdvertisement?.zone || ''}
                onChange={(e) =>
                  setSelectedAdvertisement({ ...selectedAdvertisement, zone: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Start Date"
                type="Date"
                fullWidth
                value={selectedAdvertisement?.start || ''}
                onChange={(e) =>
                  setSelectedAdvertisement({ ...selectedAdvertisement, start: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="End Date"
                type="Date"
                fullWidth
                value={selectedAdvertisement?.end || ''}
                onChange={(e) =>
                  setSelectedAdvertisement({ ...selectedAdvertisement, end: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Days"
                fullWidth
                value={selectedAdvertisement?.days || ''}
                onChange={(e) =>
                  setSelectedAdvertisement({ ...selectedAdvertisement, days: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Remark"
                fullWidth
                value={selectedAdvertisement?.remark || ''}
                onChange={(e) =>
                  setSelectedAdvertisement({ ...selectedAdvertisement, remark: e.target.value })
                }
              />
            </Grid>
            {/* Add more fields as needed */}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditModalOpen(false)}>Cancel</Button>
          <Button onClick={handleSaveEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {/* Delete Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Delete Advertisement</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete the advertisement with ID: {selectedAdvertisement?.id}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={confirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
};

export default AdvertisementPage;
