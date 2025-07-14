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
import SignedInContext from './context/SignedInContext';
import { useState} from 'react';
import useFetchUserData from './hooks/useFetchUserData'

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const userData = useFetchUserData("http://localhost:3000/status")

  return (
    <SignedInContext.Provider value={[signedIn, setSignedIn, userData]}>
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
    </SignedInContext.Provider>
  );
}

export default App;
