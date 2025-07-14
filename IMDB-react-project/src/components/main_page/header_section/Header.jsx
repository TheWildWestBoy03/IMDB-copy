import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../../App.css'
import axios from 'axios'

import { useState, useEffect, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faCircle, faCircleUser } from '@fortawesome/free-solid-svg-icons';

import SignedInContext from '../../../context/SignedInContext';
import Footer from '../footer_section/Footer';
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
      const uri = "http://localhost:3000/logout";
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
          <button className="btn fw-bold h-100 text-white px-3 py-0 rounded-pill button-hover-effect" type="button" data-bs-toggle="dropdown">
            <FontAwesomeIcon className='text-white me-2' icon={faCircleUser}></FontAwesomeIcon>
            {userData?.userData?.username}
          </button>
          <ul className="dropdown-menu" style={{minHeight: '300px', maxWidth: '50%', backgroundColor: "#1f1f1f" }}>
            <li className='px-2 py-2 user-dropdown-item'><a href="#" className='text-decoration-none text-white' style={{fontWeight: 'lighter'}}>Your profile</a></li>
            <li className='px-2 py-2 user-dropdown-item'><a href="#" className='text-decoration-none text-white' style={{fontWeight: 'lighter'}}>Your Watchlist</a></li>
            <li className='px-2 py-2 user-dropdown-item'><a href="#" className='text-decoration-none text-white' style={{fontWeight: 'lighter'}}>Your ratings</a></li>
            <li className='px-2 py-2 user-dropdown-item'><a href="#" className='text-decoration-none text-white' style={{fontWeight: 'lighter'}}>Your lists</a></li>
            <li className='px-2 py-2 user-dropdown-item'><a href="#" className='text-decoration-none text-white' style={{fontWeight: 'lighter'}}>Your watch history</a></li>
            <li className='px-2 py-2 user-dropdown-item'><a href="#" className='text-decoration-none text-white' style={{fontWeight: 'lighter'}}>Account settings</a></li>
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
  const currentMovie = movie_data[currentPosition];

  return (
    <>
      <header className="d-flex justify-content-center align-items-center py-2 px-2" style={{ backgroundColor: '#121212' }}>
        <a className="btn bg-warning rounded p-0 me-2" style={{ fontWeight: 'bolder', fontSize: '1rem' }}>IMDB</a>
        <a href="#" className='d-flex justify-content-center align-items-center rounded-pill text-white fw-bold text-decoration-none rounded px-2 py-1 button-hover-effect me-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" style={{ height: '1.5rem', width: '1.5rem', fontWeight: 'bold' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <span>Menu</span>
        </a>
        <div className="input-group d-none d-md-flex" style={{ maxWidth: '550px' }}>
          <button type="button" className="btn bg-white dropdown-toggle fw-bold px-3" data-bs-toggle="dropdown">
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

          <input type="text" className="form-control bg-white rounded-0" placeholder="" />
          <button type="button" className="btn bg-white">
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
          <button className='d-flex justify-content-center align-items-center fw-bold btn text-white px-3 py-0 lh-1 rounded-pill button-hover-effect'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ height: '1.5rem', width: '1.5rem', fontWeight: 'bold' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            Watchlist</button>
          {handleSignInBtnContent()}
          <div className="dropdown d-xl-flex align-items-center">
            <button className='dropdown-toggle fw-bold btn text-white px-3 py-2 lh-1 rounded-pill button-hover-effect' data-bs-toggle="dropdown">En</button>
            <ul className="dropdown-menu text-white" style={{minHeight: '410px', maxWidth: '30%', backgroundColor: "#1f1f1f" }}>
              <li className='text-white dropdown-item user-dropdown-item'>
                <div className="form-check">
                  <input type="radio" id="radio1" name="language" style={{accentColor: 'yellow'}} className="form-check-input"/>
                  <label for="radio1" className="form-check-label">English</label>
                </div>
              </li>
              <li className='text-white dropdown-item user-dropdown-item'>
                <div className="form-check">
                  <input type="radio" id="radio2" name="language" style={{accentColor: 'yellow'}} className="form-check-input"/>
                  <label for="radio2" className="form-check-label">French</label>
                </div>
              </li>
              <li className='text-white dropdown-item user-dropdown-item'>
                <div className="form-check">
                  <input type="radio" id="radio3" name="language" style={{accentColor: 'yellow'}} className="form-check-input"/>
                  <label for="radio3" className="form-check-label">Italian</label>
                </div>
              </li>
              <li className='text-white dropdown-item user-dropdown-item'>
                <div className="form-check">
                  <input type="radio" id="radio4" name="language" style={{accentColor: 'yellow'}} className="form-check-input"/>
                  <label for="radio4" className="form-check-label">Spanish</label>
                </div>
              </li>
              <li className='text-white dropdown-item user-dropdown-item'>
                <div className="form-check">
                  <input type="radio" id="radio5" name="language" style={{accentColor: 'yellow'}} className="form-check-input"/>
                  <label for="radio5" className="form-check-label">Romanian</label>
                </div>
              </li>
              <li className='dropdown-item imdb-header-dropdown'></li>
            </ul>
          </div>
        </div>
        <div className='d-flex d-xl-none fw-bold'>
          <button className='btn text-white px-3 py-0 lh-1 rounded-pill button-hover-effect'><Link className="text-white fw-bold text-decoration-none" to="/signin">Sign in</Link></button>
          <button className='btn text-black fw-bold bg-warning rounded-pill px-3 py-0 lh-1 button-hover-effect'>Use app</button>
        </div>
      </header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}