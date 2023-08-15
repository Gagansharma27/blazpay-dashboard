import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import LoginForm from './components/auth/Login';
import RegisterForm from './components/auth/Register';
import MissingPage from './components/Error';

const BaseRoute = () => (
  <Routes>
    <Route exact path="/user/login" element={<LoginForm/>} />
    <Route exact path="/user/register" element={<RegisterForm/>} />
    <Route path="*" element={<MissingPage/>} />
  </Routes>
);

export default BaseRoute;
