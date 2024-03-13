import React from 'react';
import UserPurchaseDetails from '../../components/user/PurchaseDetails';
import { Container } from '@mui/material';

const UserPurchaseDetailsPage: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <UserPurchaseDetails />
        </Container>
    );
};

export default UserPurchaseDetailsPage;
