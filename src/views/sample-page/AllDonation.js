import React from 'react';
import { Typography, Table, TableHead, TableRow, TableCell, TableBody, TextField, Button } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { IconAdjustmentsHorizontal } from '@tabler/icons';

const ManagePayments = () => {
  const tableData = [
    {
      paymentMethod: 'Credit Card',
      amount: '$100',
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      dateReceived: '2023-07-01',
      status: 'Processed',
    },
    {
      paymentMethod: 'PayPal',
      amount: '$50',
      customerName: 'Jane Smith',
      customerEmail: 'jane@example.com',
      dateReceived: '2023-07-02',
      status: 'Pending',
    }
    // Add more data objects as needed
  ];

  return (
    <PageContainer title="Manage Payments" description="View and manage payment transactions">
      <DashboardCard title="Payments">
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <TextField style={{ flex: 1 }} placeholder="Search" />
          <Button>
            <IconAdjustmentsHorizontal />
          </Button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Payment Method</TableCell>
              <TableCell>Amount ($)</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Customer Email</TableCell>
              <TableCell>Date Received</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Map payment data */}
            {tableData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.paymentMethod}</TableCell>
                <TableCell>{data.amount}</TableCell>
                <TableCell>{data.customerName}</TableCell>
                <TableCell>{data.customerEmail}</TableCell>
                <TableCell>{data.dateReceived}</TableCell>
                <TableCell>{data.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DashboardCard>
    </PageContainer>
  );
};

export default ManagePayments;
