import React, { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import { getUserProducts } from '../../services/api';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await getUserProducts(token);
            setProducts(response);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    const token = localStorage.getItem('token');
    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
                Lista de Productos
            </Typography>

            {error && (
                <Typography variant="body2" color="error" align="center" gutterBottom>
                    {error}
                </Typography>
            )}

            <List>
                {products.map(product => (
                    <ListItem key={product.id}>
                        <ListItemText primary={product.name} secondary={`Precio: ${product.price}`} />
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

export default ProductList;
