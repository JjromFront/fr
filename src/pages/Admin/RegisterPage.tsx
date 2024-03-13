import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import Register from '../../components/Register';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const handleRegisterSuccess = () => {
        // Redirigir a la página de inicio de sesión después del registro exitoso
        navigate('/login');
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Registrarse
            </Typography>

            <Register onSuccess={handleRegisterSuccess} />

            {error && (
                <Typography variant="body2" color="error" align="center" gutterBottom>
                    {error}
                </Typography>
            )}
        </Container>
    );
};

export default RegisterPage;
