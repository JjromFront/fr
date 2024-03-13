import React, { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import { getUserPurchaseHistory } from '../../services/api';

const PurchaseHistory: React.FC = () => {
    const [history, setHistory] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchPurchaseHistory = async () => {
        setLoading(true);
        try {
            const response = await getUserPurchaseHistory();
            setHistory(response.history);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPurchaseHistory();
    }, []);

    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
                Historial de Compras
            </Typography>

            {error && (
                <Typography variant="body2" color="error" align="center" gutterBottom>
                    {error}
                </Typography>
            )}

            <List>
                {history.map((purchase: any) => (
                    <ListItem key={purchase.id}>
                        <ListItemText primary={`Compra #${purchase.id}`} secondary={`Total: ${purchase.total}`} />
                    </ListItem>
                ))}
            </List>

            {loading && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                    <CircularProgress />
                </div>
            )}
        </Container>
    );
};

export default PurchaseHistory;
