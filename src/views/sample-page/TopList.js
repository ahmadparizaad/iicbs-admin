import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Card,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const DashboardCard = styled(Card)`
  padding: 20px;
  margin: 20px;
`;

const ManageCategories = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleAddButtonClick = () => {
    const route = activeTab === 0 ? '/addcategory' : '/addsubcategory';
    navigate(route);
  };

    return (
      <PageContainer>
        <DashboardCard>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            {/* Heading and Add Category/Subcategory Button */}
            <Typography variant="h5">
              {activeTab === 0 ? 'All Categories' : 'All Subcategories'}
            </Typography>
            <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddButtonClick}>
              {activeTab === 0 ? 'Add Category' : 'Add Subcategory'}
            </Button>
          </div>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="Main Categories" />
            <Tab label="Subcategories" />
          </Tabs>
        {activeTab === 0 && (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Main Category Name</TableCell>
                  <TableCell>Picture</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Active From</TableCell>
                  <TableCell>Subcategory Count</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Populate the table rows with data for Main Categories */}
                {/* Example: */}
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Category 1</TableCell>
                  <TableCell>Category1.jpg</TableCell>
                  <TableCell>Status 1</TableCell>
                  <TableCell>2023-01-01</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>Description for Category 1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Category 2</TableCell>
                  <TableCell>Category2.jpg</TableCell>
                  <TableCell>Status 2</TableCell>
                  <TableCell>2023-02-01</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>Description for Category 2</TableCell>
                </TableRow>
                {/* Add more rows as needed */}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {activeTab === 1 && (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell>Subcategory Name</TableCell>
                  <TableCell>Picture</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Active From</TableCell>
                  <TableCell>Count for Subcategories</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Populate the table rows with data for Subcategories */}
                {/* Example: */}
                <TableRow>
                  <TableCell>Category 1</TableCell>
                  <TableCell>Subcategory 1</TableCell>
                  <TableCell>Subcategory1.jpg</TableCell>
                  <TableCell>Status 1</TableCell>
                  <TableCell>2023-01-01</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>Description for Subcategory 1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Category 2</TableCell>
                  <TableCell>Subcategory 2</TableCell>
                  <TableCell>Subcategory2.jpg</TableCell>
                  <TableCell>Status 2</TableCell>
                  <TableCell>2023-02-01</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>Description for Subcategory 2</TableCell>
                </TableRow>
                {/* Add more rows as needed */}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DashboardCard>
    </PageContainer>
  );
};

export default ManageCategories;
