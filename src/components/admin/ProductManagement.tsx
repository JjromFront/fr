import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { getProductList, addProduct, deleteProductById } from '../../services/api';

interface newProductInterface {
    name: string,
    description: string,
    price: string,
    pv_product_type: number,
    stock: number
}

const ProductManagement: React.FC = () => {
    const [productList, setProductList] = useState<any[]>([]);
    const [newProduct, setNewProduct] = useState<newProductInterface>({
        name: '',
        description: '',
        price: '',
        pv_product_type: 0,
        stock: 0
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchProductList = async () => {
        try {
            const response = await getProductList();
            setProductList(response);
        } catch (error: any) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchProductList();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProduct(prevState => ({ ...prevState, [name]: value }));
    };

    const handleAddProduct = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            await addProduct(newProduct, token);
            fetchProductList();
            setNewProduct({
                name: '',
                description: '',
                price: '',
                pv_product_type: 0,
                stock: 0
            });
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteProduct = async (productId: number) => {
        setLoading(true);
        try {
            await deleteProductById(productId);
            fetchProductList();
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
                Gestión de Productos
            </Typography>
            {error && (
                <Typography variant="body2" color="error" align="center" gutterBottom>
                    {error}
                </Typography>
            )}
            <TextField
                type="text"
                name="name"
                label="Nombre del producto"
                variant="outlined"
                fullWidth
                margin="normal"
                value={newProduct.name}
                onChange={handleChange}
                required
            />
            <TextField
                type="text"
                name="description"
                label="Descripción del producto"
                variant="outlined"
                fullWidth
                margin="normal"
                value={newProduct.description}
                onChange={handleChange}
                required
            />
            <TextField
                type="number"
                name="price"
                label="Precio"
                variant="outlined"
                fullWidth
                margin="normal"
                value={newProduct.price}
                onChange={handleChange}
                required
            />
            <TextField
                type="number"
                name="pv_product_type"
                label="ID del tipo de producto"
                variant="outlined"
                fullWidth
                margin="normal"
                value={newProduct.pv_product_type}
                onChange={handleChange}
                required
            />
            <TextField
                type="number"
                name="stock"
                label="Stock"
                variant="outlined"
                fullWidth
                margin="normal"
                value={newProduct.stock}
                onChange={handleChange}
                required
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddProduct}
                disabled={loading || !newProduct.name || !newProduct.price || !newProduct.pv_product_type || !newProduct.stock}
                style={{ marginTop: '1rem' }}
            >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Agregar Producto'}
            </Button>
            <Typography variant="h6" align="center" gutterBottom style={{ marginTop: '2rem' }}>
                Lista de Productos
            </Typography>
            <ul>
                {productList.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => handleDeleteProduct(product.id)}
                            disabled={loading}
                            style={{ marginLeft: '1rem' }}
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Eliminar'}
                        </Button>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default ProductManagement;
