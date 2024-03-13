import React, { useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress, MenuItem } from '@mui/material';
import { register } from '../services/api';

interface RegisterProps {
    onSuccess: () => void; // Función que se ejecuta cuando el registro es exitoso
}

const Register: React.FC<RegisterProps> = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        role: 'Client', // Por defecto, el rol es 'Client'
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Hacer la llamada a la API para registrar al usuario
            await register(formData);
            onSuccess(); // Ejecutar la función onSuccess
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center" gutterBottom>
                Registrarse
            </Typography>
            {error && (
                <Typography variant="body2" color="error" align="center" gutterBottom>
                    {error}
                </Typography>
            )}
            <form onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    name="name"
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <TextField
                    select
                    name="role"
                    label="Rol"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.role}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="Client">Cliente</MenuItem>
                    <MenuItem value="Admin">Administrador</MenuItem>
                </TextField>
                <TextField
                    type="email"
                    name="email"
                    label="Correo electrónico"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    type="password"
                    name="password"
                    label="Contraseña"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={loading}
                    style={{ marginTop: '1rem' }}
                >
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Registrarse'}
                </Button>
            </form>
        </Container>
    );
};

export default Register;
