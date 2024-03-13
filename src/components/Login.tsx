// En Login.tsx
import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@mui/material';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
    onSuccess: (token: string) => void;
}

const Login: React.FC<LoginProps> = ({ onSuccess }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await login(formData);
            // Llamar a la función onSuccess con el token de acceso
            onSuccess(response.access_token);
            navigate('/user/products')
            localStorage.setItem('token', response.access_token);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Iniciar Sesión'}
            </Button>
        </form>
    );
};

export default Login;
