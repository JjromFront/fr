import React from 'react';
import { Container, Typography } from '@mui/material';
import Register from '../../components/Register';

const UserRegisterPage: React.FC = () => {
    const handleRegisterSuccess = () => {
        // Lógica para redirigir al usuario o mostrar un mensaje de registro exitoso
        console.log('Registration successful.');
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center" gutterBottom>
                Registro de Usuario
            </Typography>
            <Register onSuccess={handleRegisterSuccess} />
        </Container>
    );
};

export default UserRegisterPage;
