import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import Login from '../../components/Login';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate(); // Importa useNavigate desde 'react-router-dom'

    const handleLoginSuccess = (token: string) => {
        // Guardar el token de acceso en el localStorage
        localStorage.setItem('adminToken', token);
        // Redirigir a la página de administrador después del inicio de sesión exitoso
        navigate('/admin/dashboard');
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Iniciar Sesión Administrador
            </Typography>

            <Login onSuccess={handleLoginSuccess} />

            {error && (
                <Typography variant="body2" color="error" align="center" gutterBottom>
                    {error}
                </Typography>
            )}
        </Container>
    );
};

export default AdminLoginPage;
