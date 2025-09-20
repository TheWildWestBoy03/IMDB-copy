import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../../App.css'
import axios from 'axios'
import './Header.css'

import { useState, useEffect, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faCircle, faCircleUser } from '@fortawesome/free-solid-svg-icons';

import HiddenMenu from './HiddenMenu';
import SignedInContext from '../../../context/SignedInContext';
import Footer from '../footer_section/Footer';
import WatchlistDisplayBtn from './WatchlistDisplayBtn';

export default function Header() {
  const [search_type, set_search_type] = useState("All")
  const [movie_data, set_movie_data] = useState([])
  const [currentPosition, setCurrentPosition] = useState(0)
  const [signedIn, setSignedIn, userData] = useContext(SignedInContext)

  function handleIncrement() {
    setCurrentPosition((currentPos) => {
      return (currentPos + 1) % movie_data.length
    })
  }

  function handleDecrement() {
    setCurrentPosition((currentPos) => {
      return (currentPos - 1 + movie_data.length) % movie_data.length
    })
  }

  async function handleLogout(e) {
    e.preventDefault();
  
    try {
      const uri = "http://localhost:3000/api/auth/logout";
      const response = await axios.post(uri, {}, {
        withCredentials: true,
      });

      setSignedIn(false);
      userData.signedIn = false;

      window.location = '/'
    } catch (error) {
      console.log(error);
    }
  }

  function handleSignInBtnContent() {
    if (signedIn === true || userData.signedIn === true) {
      return (
        <div className='dropdown d-lg-flex align-items-center'>
          <button className="btn fw-bold h-100 text-white px-1 py-0 rounded-pill button-hover-effect" type="button" data-bs-toggle="dropdown">
            <FontAwesomeIcon className='text-white me-2' icon={faCircleUser}></FontAwesomeIcon>
            {userData?.userData?.username.slice(0, 5)}
          </button>
          <ul className="dropdown-menu" style={{minHeight: '300px', maxWidth: '50%', backgroundColor: "#1f1f1f" }}>
            <li className='px-2 py-2 user-dropdown-item'><a href="#" className='text-decoration-none text-white' style={{fontWeight: 'lighter'}}>Your profile</a></li>
            <li className='px-2 py-2 user-dropdown-item'><a href="/user/watchlist" className='text-decoration-none text-white' style={{fontWeight: 'lighter'}}>Your Watchlist</a></li>
            <li className='px-2 py-2 user-dropdown-item'><a href="#" className='text-decoration-none text-white' style={{fontWeight: 'lighter'}}>Your ratings</a></li>
            <li className='px-2 py-2 user-dropdown-item'><a href="#" className='text-decoration-none text-white' style={{fontWeight: 'lighter'}}>Your lists</a></li>
            <li className='px-2 py-2 user-dropdown-item'><a href="#" className='text-decoration-none text-white' style={{fontWeight: 'lighter'}}>Your watch history</a></li>
            <li className='px-2 py-2 user-dropdown-item'><a href="/user/account-settings" className='text-decoration-none text-white' style={{fontWeight: 'lighter'}}>Account settings</a></li>
            <li onClick={(e) => handleLogout(e)} className='px-2 py-2 user-dropdown-item'><a href="#" className='text-decoration-none text-white' style={{fontWeight: 'lighter'}}>Sign out</a></li>
          </ul>
        </div>
      )
    }

    return (<button
      className='fw-bold btn text-white px-3 py-0 lh-1 rounded-pill button-hover-effect'><Link className="text-white fw-bold text-decoration-none" to="/signin">
        Sign in
      </Link></button>)
  }

  useEffect(() => {
    async function handleFetch() {
      try {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
          method: 'GET',
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjcwNzM1NDA2MzE2NDAzZmQzZTViOTM1OWUxNTFjNCIsIm5iZiI6MTc1MTgxMjM1OS4zLCJzdWIiOiI2ODZhODkwN2I4ZTY4OWE3NTk1M2ZhYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KyzZoncEy8hRKEjAgezVdHcReBUMr1kdZ6FHGYcIvq8"
          }
        });

        const response = await data.json();
        set_movie_data(response.results);
      } catch (error) {
        console.log(error);
      }
    }

    if (movie_data.length === 0) {
      handleFetch();
    }
  }, []);

  const displayHiddenMenu = (event) => {
    const hiddenMenu = document.getElementById('hidden');
    hiddenMenu.classList.add('show');
    document.body.style.overflowY = 'hidden';
  }
  const currentMovie = movie_data[currentPosition];

  function resetPage() {
    window.location = "http://localhost:5173/"
  }
  return (
    <>
      <HiddenMenu></HiddenMenu>
      <header className="d-flex justify-content-between justify-content-md-center align-items-center py-2 px-2" style={{ backgroundColor: '#121212' }}>
        <div className='d-flex flex-row-reverse flex-lg-row'>
          <a onClick={(e) => resetPage(e)} className="btn bg-warning rounded p-0 me-2" href="#" style={{ fontWeight: 'bolder', fontSize: '1rem' }}>IMDB</a>
          <button onClick={(event) => {displayHiddenMenu(event)}} 
                  className='d-flex justify-content-center align-items-center border-0 rounded-pill btn text-white fw-bold px-2 py-1 button-hover-effect me-2'
                  style={{cursor: 'pointer'}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" style={{ height: '1.5rem', width: '1.5rem', fontWeight: 'bold' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            Menu
          </button>
        </div>
        <div className="input-group d-none d-sm-flex" style={{ maxWidth: '600px', height: '35px'}}>
          <button type="button" className="btn bg-white dropdown-toggle fw-bold px-2 py-0" data-bs-toggle="dropdown">
            {search_type}
          </button>
          <ul className="dropdown-menu text-white" style={{minHeight: '410px', maxWidth: '40%', backgroundColor: "#1f1f1f" }}>
            <li><a onClick={(e) => set_search_type(e.target.textContent)} className="dropdown-item imdb-header-dropdown" href="#">All</a></li>
            <li><a onClick={(e) => set_search_type(e.target.textContent)} className="dropdown-item imdb-header-dropdown" href="#">Titles</a></li>
            <li><a onClick={(e) => set_search_type(e.target.textContent)} className="dropdown-item imdb-header-dropdown" href="#">TV episodes</a></li>
            <li><a onClick={(e) => set_search_type(e.target.textContent)} className="dropdown-item imdb-header-dropdown" href="#">Celebs</a></li>
            <li><a onClick={(e) => set_search_type(e.target.textContent)} className="dropdown-item imdb-header-dropdown" href="#">Companies</a></li>
            <li><a onClick={(e) => set_search_type(e.target.textContent)} className="dropdown-item imdb-header-dropdown" href="#">Keywords</a></li>
            <li><a onClick={(e) => set_search_type(e.target.textContent)} className="dropdown-item imdb-header-dropdown" href="#">Advanced Search</a></li>
          </ul>

          <input type="text" className="form-control bg-white rounded-0 p-0" placeholder="" style={{height: '35px'}}/>
          <button type="button" className="btn bg-white p-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" style={{ height: '1.5rem', width: '1.5rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
        <div className='d-none d-xl-flex px-3 py-0 fw-bold'>
          <a href="#" className="btn fw-bold px-3 py-2 border-end border-2" style={{ borderColor: 'white' }}>
            <span className="text-white">IMDb</span>
            <span style={{ color: '#04aad1' }}>Pro</span>
          </a>
          <WatchlistDisplayBtn></WatchlistDisplayBtn>
          {handleSignInBtnContent()}
          <div className="dropdown d-xl-flex align-items-center">
            <button className='dropdown-toggle fw-bold btn text-white px-3 py-2 lh-1 rounded-pill button-hover-effect' data-bs-toggle="dropdown">En</button>
            <ul className="radio-list dropdown-menu text-white" style={{padding: '0', minHeight: '450px', maxWidth: '300px', backgroundColor: "#1f1f1f" }}>
              <li>FULLY SUPPORTED</li>
              <li className='text-white dropdown-item user-dropdown-item'>
                <div className="form-check" style={{paddingLeft: '14px'}}>
                  <label htmlFor="radio1" className="form-check-label"><input type="radio" id="radio1" name="language"/>English (United States)</label>
                </div>
              </li>
              <li className='user-dropdown-item'>PARTIALLY SUPPORTED</li>
              <li className='text-white dropdown-item user-dropdown-item'>
                <div className="form-check" style={{paddingLeft: '14px'}}>
                  <label htmlFor="radio2" className="form-check-label"><input type="radio" id="radio2" name="language"/>Francais(Canada)</label>
                </div>
              </li>
              <li className='text-white dropdown-item user-dropdown-item'>
                <div className="form-check" style={{paddingLeft: '14px'}}>
                  <label htmlFor="radio3" className="form-check-label"><input type="radio" id="radio3" name="language"/>Francais (France)</label>
                </div>
              </li>
              <li className='text-white dropdown-item user-dropdown-item'>
                <div className="form-check" style={{paddingLeft: '14px'}}>
                  <label htmlFor="radio4" className="form-check-label"><input type="radio" id="radio4" name="language"/>Deutch (Deutchland)</label>
                </div>
              </li>
              <li className='text-white dropdown-item user-dropdown-item'>
                <div className="form-check" style={{paddingLeft: '14px'}}>
                  <label htmlFor="radio4" className="form-check-label"><input type="radio" id="radio4" name="language"/>Italiano (Italia)</label>
                </div>
              </li>
              <li className='text-white dropdown-item user-dropdown-item'>
                <div className="form-check" style={{paddingLeft: '14px'}}>
                  <label htmlFor="radio4" className="form-check-label"><input type="radio" id="radio4" name="language"/>Portugal (Brasil)</label>
                </div>
              </li>
              <li className='text-white dropdown-item user-dropdown-item'>
                <div className="form-check" style={{paddingLeft: '14px'}}>
                  <label htmlFor="radio4" className="form-check-label"><input type="radio" id="radio4" name="language"/>Portugal (Portugal)</label>
                </div>
              </li>
              <li className='text-white dropdown-item user-dropdown-item'>
                <div className="form-check" style={{paddingLeft: '14px'}}>
                  <label htmlFor="radio5" className="form-check-label"> <input type="radio" id="radio5" name="language"/>Romanian</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='d-flex d-sm-none fw-bold'>
          <button type="button" className="btn btn-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" style={{ height: '1.5rem', width: '1.5rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          {handleSignInBtnContent()}
          <button className='btn text-black fw-bold bg-warning rounded-pill px-3 py-0 lh-1 button-hover-effect'>Use app</button>
        </div>
        <div className='d-none d-sm-flex d-xl-none fw-bold'>
          {handleSignInBtnContent()}
          <button className='btn text-black fw-bold bg-warning rounded-pill px-3 py-0 lh-1 button-hover-effect'>Use app</button>
        </div>
      </header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}