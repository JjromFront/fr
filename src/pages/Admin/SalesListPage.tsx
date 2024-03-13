import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, CircularProgress } from '@mui/material';
import { getAllBillsForAdmin } from '../../services/api';

const SalesList: React.FC = () => {
    const [salesList, setSalesList] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchSalesList = async () => {
        setLoading(true);
        try {
            const response = await getAllBillsForAdmin();
            setSalesList(response);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSalesList();
    }, []);

    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
                Lista de Ventas
            </Typography>
            {error && (
                <Typography variant="body2" color="error" align="center" gutterBottom>
                    {error}
                </Typography>
            )}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID de Factura</TableCell>
                            <TableCell>ID de Usuario</TableCell>
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {salesList.map(sale => (
                            <TableRow key={sale.id}>
                                <TableCell>{sale.id}</TableCell>
                                <TableCell>{sale.userId}</TableCell>
                                <TableCell>{sale.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {loading && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                    <CircularProgress />
                </div>
            )}
        </Container>
    );
};

export default SalesList;
