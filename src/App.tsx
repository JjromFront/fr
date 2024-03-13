import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import AdminLogin from './pages/Admin/LoginPage';
import AdminRegister from './pages/Admin/RegisterPage';
import AdminProductManagement from './pages/Admin/ProductManagementPage';
import AdminSalesList from './pages/Admin/SalesListPage';
import AdminParameterManagement from './pages/Admin/ParameterManagementPage';
import UserLogin from './pages/User/LoginPage';
import UserRegister from './pages/User/RegisterPage';
import UserProductList from './pages/User/ProductListPage';
import UserPurchaseHistory from './pages/User/UseProductHistoryPage';
import UserPurchaseDetails from './pages/User/UserPurchaseDetailsPage';

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Routes>
          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/admin/product" element={<AdminProductManagement />} />
          <Route path="/admin/sell" element={<AdminSalesList />} />
          <Route path="/admin/valorParametro" element={<AdminParameterManagement />} />

          {/* User routes */}
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/user/products" element={<UserProductList />} />
          <Route path="/user/sells" element={<UserPurchaseDetails />} />
          <Route path="/user/history" element={<UserPurchaseHistory />} />

          {/* Default route */}
          <Route path="/" element={<Navigate to="/admin/login" />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
