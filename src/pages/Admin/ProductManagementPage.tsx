import React from 'react';
import ProductManagement from '../../components/admin/ProductManagement';
import { Container } from '@mui/material';

const ProductManagementPage: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <ProductManagement />
        </Container>
    );
};

export default ProductManagementPage;
