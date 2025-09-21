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
import WatchlistPage from './components/watchlist_page/WatchlistPage';
import AccountSettingsPage from './components/account_settings_page/AccountSettingsPage';
import ContributionsPage from './components/account_settings_page/account_based_pages/ContributionsPage';
import DeleteAccountPage from './components/account_settings_page/account_based_pages/DeleteAccountPage';
import EmailPreferencesPage from './components/account_settings_page/account_based_pages/account_email_preferences/EmailPreferencesPage';
import GeneralPreferencesPage from './components/account_settings_page/account_based_pages/account_site_settings/GeneralPreferencesPage';
import LinkedAccountPage from './components/account_settings_page/account_based_pages/LinkedAccountPage';
import LoginAccountPreferencesPage from './components/account_settings_page/account_based_pages/LoginAccountPreferencesPage';
import PrivacyPreferencesPage from './components/account_settings_page/account_based_pages/account_privacy_preferences/PrivacyPreferencesPage';
import RetrieveDataPage from './components/account_settings_page/account_based_pages/RetrieveDataPage';
import ServicePreferencesPage from './components/account_settings_page/account_based_pages/ServicePreferencesPage';
import AccountPersonalSettings from './components/account_settings_page/account_based_pages/account_personal_settings/AccountPersonalSettings';

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const userData = useFetchUserData("http://localhost:3000/api/auth/status")

  return (
    <SignedInContext.Provider value={[signedIn, setSignedIn, userData]}>
      <title>IMDb: Ratings, Reviews and Where to Watch the Best Movies & TV Shows</title>
      <BrowserRouter>
        <Routes>
          <Route element={<Header/>}>
            <Route index path="/" element={<MainPage/>}></Route>
            <Route path="/signin" element={<SignInPage/>}></Route>
            <Route path="/user/watchlist" element={<WatchlistPage/>}></Route>
            <Route path="/user/account-settings" element={<AccountSettingsPage></AccountSettingsPage>}></Route>
            <Route path="/preferences/email" element={<EmailPreferencesPage></EmailPreferencesPage>}></Route>
            <Route path="/preferences/general" element={<GeneralPreferencesPage></GeneralPreferencesPage>}></Route>
            <Route path="/preferences/services" element={<ServicePreferencesPage></ServicePreferencesPage>}></Route>
            <Route path="/preferences/privacy" element={<PrivacyPreferencesPage></PrivacyPreferencesPage>}></Route>
            <Route path="/registration/personal" element={<AccountPersonalSettings></AccountPersonalSettings>}></Route>
            <Route path="/registration/linked" element={<LinkedAccountPage></LinkedAccountPage>}></Route>
            <Route path="/registration/login" element={<LoginAccountPreferencesPage></LoginAccountPreferencesPage>}></Route>
            <Route path="/registration/data" element={<RetrieveDataPage></RetrieveDataPage>}></Route>
            <Route path="/registration/delete" element={<DeleteAccountPage></DeleteAccountPage>}></Route>
            <Route path="/contributions" element={<ContributionsPage></ContributionsPage>}></Route>
          </Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/register" element={<RegisterPage/>}></Route>
        </Routes>

      </BrowserRouter>
    </SignedInContext.Provider>
  );
}

export default App;
