import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import { getUserPurchaseDetails } from '../../services/api';

const PurchaseDetails: React.FC = () => {
    const { purchaseId } = useParams<{ purchaseId: string }>();
    const [details, setDetails] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchPurchaseDetails = async () => {
        setLoading(true);
        try {
            const response = await getUserPurchaseDetails(parseInt(purchaseId as any));
            setDetails(response.details);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPurchaseDetails();
    }, [purchaseId]);

    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
                Detalles de la Compra #{purchaseId}
            </Typography>

            {error && (
                <Typography variant="body2" color="error" align="center" gutterBottom>
                    {error}
                </Typography>
            )}

            <List>
                {details.map((item: any, index: number) => (
                    <ListItem key={index}>
                        <ListItemText primary={item.name} secondary={`Cantidad: ${item.quantity}`} />
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

export default PurchaseDetails;
