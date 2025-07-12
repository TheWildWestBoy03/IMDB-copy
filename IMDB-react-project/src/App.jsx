import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import '../scss/custom.scss'
import 'react-router-dom'

import Header from './components/main_page/header_section/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/main_page/MainPage';
import LoginPage from './components/login_page/LoginPage';
import SignInPage from './components/sign_in_page/SignInPage';
import RegisterPage from './components/register_page/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header/>}>
          <Route index path="/" element={<MainPage/>}></Route>
          <Route path="/signin" element={<SignInPage/>}></Route>
        </Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
