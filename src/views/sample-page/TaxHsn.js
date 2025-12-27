import React, { useState } from 'react';
import {
    AppBar,
    Tabs,
    Tab,
    Typography,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TextField,
    Button,
    Grid,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const TaxHsn = () => {
    const navigate = useNavigate();
    const [tabValue, setTabValue] = useState(0);
    const [isAddTaxModalOpen, setAddTaxModalOpen] = useState(false);
    const [isAddHsnModalOpen, setAddHsnModalOpen] = useState(false);

    const handleChangeTab = (_, newValue) => {
        setTabValue(newValue);
    };

    const openAddTaxModal = () => {
        setAddTaxModalOpen(true);
    };

    const closeAddTaxModal = () => {
        setAddTaxModalOpen(false);
    };

    const openAddHsnModal = () => {
        setAddHsnModalOpen(true);
    };

    const closeAddHsnModal = () => {
        setAddHsnModalOpen(false);
    };

    const handleAddUser = () => {
        // Navigate to "/adduser" when the "Add User" button is clicked
        navigate('/addtaxhsn');
      };

    // Tax Table Data
    const taxData = [
        { id: 1, name: 'Tax A', percentage: 10, status: 'Active', activeFrom: '2023-01-01', activeUpto: '2023-12-31' },
        // Add more tax data as needed
    ];

    // Hsn Table Data
    const hsnData = [
        { code: '1001', name: 'Hsn A', status: 'Active', activeFrom: '2023-01-01', activeUpto: '2023-12-31' },
        // Add more Hsn data as needed
    ];

    // Tax and Hsn Code Table Data
    const taxHsnCodeData = [
        { idCode: 'T001', name: 'Tax A', type: 'Tax', status: 'Active', activeFrom: '2023-01-01', activeUpto: '2023-12-31' },
        { idCode: 'H001', name: 'Hsn A', type: 'Hsn', status: 'Active', activeFrom: '2023-01-01', activeUpto: '2023-12-31' },
        // Add more tax and Hsn code data as needed
    ];

    return (
        <div>
            <AppBar position="static">
                <Tabs
                    value={tabValue}
                    onChange={handleChangeTab}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="Tax" style={tabValue === 0 ? { backgroundColor: '#eded85' } : {}} />
                    <Tab label="Hsn" style={tabValue === 1 ? { backgroundColor: '#eded85' } : {}} />
                    <Tab label="Tax and Hsn Code" style={tabValue === 2 ? { backgroundColor: '#eded85' } : {}} />
                </Tabs>
            </AppBar>

            {/* Tax Tab */}
            {tabValue === 0 && (
                <Box p={3}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <Typography variant="h2">Tax</Typography>
                        <Button variant="contained" color="primary" onClick={openAddTaxModal}>
                            Add Tax
                        </Button>
                    </div>

                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Percentage</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Active From</TableCell>
                                    <TableCell>Active Upto</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {taxData.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.percentage}</TableCell>
                                        <TableCell>{row.status}</TableCell>
                                        <TableCell>{row.activeFrom}</TableCell>
                                        <TableCell>{row.activeUpto}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* Add Tax Modal */}
                    <Dialog open={isAddTaxModalOpen} onClose={closeAddTaxModal}>
                        <DialogTitle>Add Tax</DialogTitle>
                        <DialogContent>
                            <Typography variant="subtitle1">ID</Typography>
                            <TextField label="ID" fullWidth margin="normal" />

                            <Typography variant="subtitle1">Name</Typography>
                            <TextField label="Name" fullWidth margin="normal" />

                            <Typography variant="subtitle1">Percentage</Typography>
                            <TextField label="Percentage" fullWidth margin="normal" />

                            <Typography variant="subtitle1">Status</Typography>
                            <TextField label="Status" fullWidth margin="normal" />

                            <Typography variant="subtitle1">Active From</Typography>
                            <TextField label="Active From" fullWidth margin="normal" />

                            <Typography variant="subtitle1">Active Upto</Typography>
                            <TextField label="Active Upto" fullWidth margin="normal" />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeAddTaxModal} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={() => console.log('Adding Tax')} color="primary">
                                Add Tax
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            )}

            {/* Hsn Tab */}
            {tabValue === 1 && (
                <Box p={3}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <Typography variant="h2">Hsn Code</Typography>
                        <Button variant="contained" color="primary" onClick={openAddHsnModal}>
                        Add Hsn
                    </Button>
                    </div>
                    
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Code</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Active From</TableCell>
                                    <TableCell>Active Upto</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {hsnData.map((row) => (
                                    <TableRow key={row.code}>
                                        <TableCell>{row.code}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.status}</TableCell>
                                        <TableCell>{row.activeFrom}</TableCell>
                                        <TableCell>{row.activeUpto}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* Add Hsn Modal */}
                    <Dialog open={isAddHsnModalOpen} onClose={closeAddHsnModal}>
                        <DialogTitle>Add Hsn</DialogTitle>
                        <DialogContent>
                            <Typography variant="subtitle1">Code</Typography>
                            <TextField label="Code" fullWidth margin="normal" />

                            <Typography variant="subtitle1">Name</Typography>
                            <TextField label="Name" fullWidth margin="normal" />

                            <Typography variant="subtitle1">Status</Typography>
                            <TextField label="Status" fullWidth margin="normal" />

                            <Typography variant="subtitle1">Active From</Typography>
                            <TextField label="Active From" fullWidth margin="normal" />

                            <Typography variant="subtitle1">Active Upto</Typography>
                            <TextField label="Active Upto" fullWidth margin="normal" />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeAddHsnModal} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={() => console.log('Adding Hsn')} color="primary">
                                Add Hsn
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            )}

            {/* Tax and Hsn Code Tab */}
            {tabValue === 2 && (
                <Box p={3}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID Code</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Active From</TableCell>
                                    <TableCell>Active Upto</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {taxHsnCodeData.map((row) => (
                                    <TableRow key={row.idCode}>
                                        <TableCell>{row.idCode}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.type}</TableCell>
                                        <TableCell>{row.status}</TableCell>
                                        <TableCell>{row.activeFrom}</TableCell>
                                        <TableCell>{row.activeUpto}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </div>
    );
};

export default TaxHsn;
