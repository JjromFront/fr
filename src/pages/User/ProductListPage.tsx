import React from 'react';
import UserProductList from '../../components/user/ProductList';
import { Container } from '@mui/material';

const UserProductListPage: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <UserProductList />
        </Container>
    );
};

export default UserProductListPage;
