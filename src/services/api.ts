import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

// Función para iniciar sesión
export const login = async (userData: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, userData);
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};

// Función para registrar un nuevo usuario
export const register = async (userData: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/register`, userData);
        if (response.data) {
            return response.data;
        } else {
            throw new Error('Error: Respuesta inesperada de la API al registrar usuario');
        }
    } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error('Error al registrar usuario: ' + error.response.data.message);
        } else if (error.message) {
            throw new Error('Error al registrar usuario: ' + error.message);
        } else {
            throw new Error('Error al registrar usuario: respuesta vacía');
        }
    }
};

// Función para obtener la lista de productos disponibles para el usuario
export const getUserProducts = async (token: any) => {
    try {
        const response = await axios.get(`${BASE_URL}/product`, {
            headers: {
                'access-token': token // Reemplaza con el token de acceso del usuario
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};

// Función para obtener el historial de compras de un usuario
export const getUserPurchaseHistory = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/user/history`, {
            headers: {
                'access-token': 'your-access-token-here' // Reemplaza con el token de acceso del usuario
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};

// Función para obtener los detalles de una compra específica del usuario
export const getUserPurchaseDetails = async (purchaseId: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/user/purchase/${purchaseId}`, {
            headers: {
                'access-token': 'your-access-token-here' // Reemplaza con el token de acceso del usuario
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};

// Función para obtener todas las facturas para el usuario administrador
export const getAllBillsForAdmin = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/bill/admin/all`, {
            headers: {
                'access-token': 'your-access-token-here' // Reemplaza con el token de acceso del administrador
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};

// Función para obtener la información de una factura específica para el usuario administrador
export const getBillInfoForAdmin = async (billId: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/bill/admin/${billId}`, {
            headers: {
                'access-token': 'your-access-token-here' // Reemplaza con el token de acceso del administrador
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};

// Función para obtener los detalles de una factura específica para un usuario
export const getBillByClientId = async (clientId: number, billId: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/bill/${clientId}/${billId}`, {
            headers: {
                'access-token': 'your-access-token-here' // Reemplaza con el token de acceso del usuario
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};

// Función para obtener todas las facturas para un usuario
export const getAllBillsForClient = async (clientId: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/bill/${clientId}`, {
            headers: {
                'access-token': 'your-access-token-here' // Reemplaza con el token de acceso del usuario
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};

// Función para eliminar un producto por su ID
export const deleteProductById = async (productId: number) => {
    try {
        const response = await axios.delete(`${BASE_URL}/product/${productId}`, {
            headers: {
                'access-token': 'your-access-token-here' // Reemplaza con el token de acceso del administrador
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};

// Función para eliminar un usuario por su ID
export const deleteUserById = async (userId: number) => {
    try {
        const response = await axios.delete(`${BASE_URL}/user/${userId}`, {
            headers: {
                'access-token': 'your-access-token-here' // Reemplaza con el token de acceso del administrador
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};

// Función para eliminar una factura por su ID
export const deleteBillById = async (billId: number) => {
    try {
        const response = await axios.delete(`${BASE_URL}/bill/${billId}`, {
            headers: {
                'access-token': 'your-access-token-here' // Reemplaza con el token de acceso del administrador
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};


// Función para agregar un nuevo producto
export const addProduct = async (productData: any, token: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/product/create`, productData, {
            headers: {
                'access-token': token// Reemplaza con el token de acceso del administrador
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};

// Función para obtener la lista de productos
export const getProductList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/product/all`);
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};


// Función para eliminar un parámetro por su ID
export const deleteParameterById = async (parameterId: number) => {
    try {
        const response = await axios.delete(`${BASE_URL}/parameter/${parameterId}`, {
            headers: {
                'access-token': 'your-access-token-here' // Reemplaza con el token de acceso del administrador
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};

// Función para obtener todos los parámetros
export const getAllParameters = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/parameter/all`, {
            headers: {
                'access-token': 'your-access-token-here' // Reemplaza con el token de acceso del administrador
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};


// Función para obtener los parámetros por código de estado
export const getParametersByStatusCode = async (statusCode: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/parameter/${statusCode}`, {
            headers: {
                'access-token': 'your-access-token-here' // Reemplaza con el token de acceso del administrador
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};


// Función para crear un parámetro
export const createParameter = async (parameterData: any, token: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/parameter/create`, parameterData, {
            headers: {
                'access-token': token // Reemplaza con el token de acceso del administrador
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};

// Función para actualizar un parámetro
export const updateParameter = async (parameterId: number, updateData: any) => {
    try {
        const response = await axios.put(`${BASE_URL}/parameter/updateState/${parameterId}`, updateData, {
            headers: {
                'access-token': 'your-access-token-here' // Reemplaza con el token de acceso del administrador
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
};
