import React from 'react';
import UserPurchaseHistory from '../../components/user/PurchaseHistory';
import { Container } from '@mui/material';

const UserPurchaseHistoryPage: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <UserPurchaseHistory />
        </Container>
    );
};

export default UserPurchaseHistoryPage;
