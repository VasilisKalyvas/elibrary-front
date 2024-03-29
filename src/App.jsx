import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/general/Header';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RentBook from './pages/RentBook';
import AdminUsers from './pages/AdminUsers';
import AdminBooks from './pages/AdminBooks';
import AdminRents from './pages/AdminRents';

function App() {
  return (
    <Router>
      <>
        <Header />
          <Routes>
            <Route path="/login" element={<Login/>} restricted={true} />
            <Route path="/register" element={<Register/>} restricted={true} />
            <Route path="/" element={<LandingPage/>} />
            <Route path="/rent/:id" element={<RentBook/>} />
            <Route path="/admin/users" element={<AdminUsers/>} />
            <Route path="/admin/books" element={<AdminBooks/>} />
            <Route path="/admin/rents" element={<AdminRents/>} />
            {/* Add more routes as needed */}
          </Routes>
      </>
      <ToastContainer/>
    </Router>
  );
}

export default App;