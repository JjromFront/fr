import React from 'react';
import ParameterManagement from '../../components/admin/ParameterManagement';
import { Container } from '@mui/material';

const ParameterManagementPage: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <ParameterManagement />
        </Container>
    );
};

export default ParameterManagementPage;
