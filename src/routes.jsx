import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import LoginForm from './components/auth/Login';
import RegisterForm from './components/auth/Register/Register';
import Password from './components/auth/Register/Password';
import UsernameForm from './components/auth/Register/UserName';
import WalletConnect from './components/auth/WalletConnect';
import MissingPage from './components/Error';
import EntryPass from './components/EntryPass';

const BaseRoute = () => (
  <Routes>
    <Route exact path="/user/login" element={<LoginForm/>} />
    <Route exact path="/user/register" element={<RegisterForm/>} />
    <Route exact path="/user/password" element={<Password/>} />
    <Route exact path="/user/username" element={<UsernameForm/>} />
    <Route exact path="/user/wallet" element={<WalletConnect/>} />
    <Route exact path="/user/entrypass" element={<EntryPass/>} />
    <Route path="*" element={<MissingPage/>} />
  </Routes>
);

export default BaseRoute;
