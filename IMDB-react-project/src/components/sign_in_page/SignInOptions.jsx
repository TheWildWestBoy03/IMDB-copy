import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faImdb, faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function SignInOptions() {
    return (
        <div className="p-3 w-md-50 d-flex flex-column justify-content-around align-items-center">
            <h4 className="fw-bold">Sign In</h4>

            <div className="d-flex flex-column" style={{rowGap: '0.25rem'}}>
                <button className='btn d-flex align-items-center justify-content-start border border-dark fw-bold' style={{borderRadius: '0px'}}><FontAwesomeIcon className="me-3" icon={faImdb} style={{padding: '0', backgroundColor: 'e6b919', color: 'black', fontWeight: 'bold'}}/><Link className='text-decoration-none text-dark' to="/login">Sign in with IMDb</Link></button>
                <button className='btn d-flex align-items-center justify-content-start border border-dark fw-bold' style={{borderRadius: '0px'}}><FontAwesomeIcon className="me-3" icon={faAmazon} style={{color: 'white', backgroundColor: 'black'}} />Sign in with Amazon</button>
                <button className='btn d-flex align-items-center justify-content-start border border-dark fw-bold' style={{borderRadius: '0px'}}><FontAwesomeIcon className="me-3" icon={faGoogle} style={{color: 'red'}} />Sign in with Google</button>
                <button className='btn d-flex align-items-center justify-content-start border border-dark fw-bold' style={{borderRadius: '0px'}}><FontAwesomeIcon className="me-3" icon={faApple} />Sign in with Apple</button>
            </div>

            <a href="#" className="text-decoration-none">Show more options</a>

            <hr className='w-75'></hr>

            <button className="btn bg-warning fw-bold px-5 py-1"><Link className='text-decoration-none text-dark' to='/register'>Create a New Account</Link></button>
            <subscript style={{fontSize: "0.75rem"}}>By signing in, you agree to IMDb's <a style={{textDecoration: 'none'}} href="https://www.imdb.com/conditions">Conditions of Use</a> and <a style={{textDecoration: 'none'}} href="https://www.imdb.com/privacy">Privacy Policy</a>.</subscript>
        </div>
    )
}