import React from 'react';
import { Container, Typography } from '@mui/material';
import Login from '../../components/Login';

const UserLoginPage: React.FC = () => {
    const handleLoginSuccess = (token: string) => {
        // Lógica para guardar el token en el almacenamiento local o realizar otras acciones
        console.log('Login successful. Token:', token);
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center" gutterBottom>
                Iniciar Sesión de Usuario
            </Typography>
            <Login onSuccess={handleLoginSuccess} />
        </Container>
    );
};

export default UserLoginPage;
