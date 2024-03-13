import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { getAllParameters, createParameter, deleteParameterById, getParametersByStatusCode, updateParameter } from '../../services/api';

const ParameterManagement: React.FC = () => {
    const [parameters, setParameters] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchParameters = async () => {
        setLoading(true);
        try {
            const response = await getAllParameters();
            setParameters(response);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchParameters();
    }, []);

    const handleCreateParameter = async (parameterData: any) => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token')
            await createParameter(parameterData, token);
            fetchParameters();
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteParameter = async (parameterId: number) => {
        setLoading(true);
        try {
            await deleteParameterById(parameterId);
            fetchParameters();
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateParameter = async (parameterId: number, updateData: any) => {
        setLoading(true);
        try {
            await updateParameter(parameterId, updateData);
            fetchParameters();
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGetParametersByStatusCode = async (statusCode: number) => {
        setLoading(true);
        try {
            const response = await getParametersByStatusCode(statusCode);
            setParameters(response.parameters);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleGetParametersByStatusCode(1); // Aquí se puede pasar el código de estado deseado
    }, []); // Esto se ejecutará solo una vez al montar el componente

    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
                Gestión de Parámetros
            </Typography>

            {error && (
                <Typography variant="body2" color="error" align="center" gutterBottom>
                    {error}
                </Typography>
            )}

            <TextField
                type="text"
                label="Nuevo parámetro"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <Button
                variant="contained"
                color="primary"
                onClick={() => handleCreateParameter({ parameter_name: 'Nuevo parámetro' })}
            >
                Crear parámetro
            </Button>

            {parameters.map(parameter => (
                <div key={parameter.id} style={{ marginBottom: '1rem' }}>
                    <Typography variant="h6">{parameter.parameter_name}</Typography>
                    <Typography variant="body1">Estado: {parameter.state}</Typography>

                    <TextField
                        type="text"
                        label="Nombre del parámetro"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleUpdateParameter(parameter.id, { parameter_name: 'Nuevo nombre' })}
                    >
                        Actualizar parámetro
                    </Button>

                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDeleteParameter(parameter.id)}
                    >
                        Eliminar parámetro
                    </Button>
                </div>
            ))}

            {loading && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                    <CircularProgress />
                </div>
            )}
        </Container>
    );
};

export default ParameterManagement;
