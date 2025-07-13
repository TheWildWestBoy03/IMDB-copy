import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTiktok, 
  faInstagram, 
  faXTwitter, 
  faYoutube, 
  faFacebook, 
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
    return (
        <footer className="bg-black">
            <div className="py-5 d-flex flex-column align-items-center justify-content-center">
                <div className="d-none d-lg-flex w-100 justify-content-center mb-5" style={{gap: '1rem'}}>
                    <div className="mt-5 px-5 py-3 d-flex flex-column align-items-center" style={{border: '1px solid gray', borderRadius: '0.75rem'}}>
                        <h5 className="text-white fw-bold">Follow IMDb on social</h5>
                        <div className="social-icons d-flex align-items-center justify-content-center mt-1" style={{gap: '2.75rem'}}>
                            <FontAwesomeIcon className='text-white' style={{fontSize: '1.5rem'}} icon={faTiktok}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-white' style={{fontSize: '1.5rem'}} icon={faInstagram}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-white' style={{fontSize: '1.5rem'}} icon={faTwitter}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-white' style={{fontSize: '1.5rem'}} icon={faYoutube}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-white' style={{fontSize: '1.5rem'}} icon={faFacebook}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="mt-5 px-3 py-3 d-none d-lg-flex justify-content-between" style={{border: '1px solid gray', borderRadius: '0.75rem', gap: '5rem'}}>
                        <div>
                            <h5 className="text-white fw-bold">Get the IMDb App</h5>
                            <p style={{color: 'gray'}}>For Android and iOS</p>
                        </div>
                        <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.imdb.com/app" 
                            alt="IMDb App QR"
                            className='rounded'
                            style={{height: '4rem', width: 'auto'}} 
                        />
                    </div>
                </div>
                <div class="py-4 d-flex d-lg-none justify-content-center w-100" style={{backgroundColor: '#1a1a1a'}}>
                    <button class="fw-bold btn bg-warning rounded-pill">Get the IMDb App</button>
                </div>
                <div className="py-5 d-flex d-lg-none align-items-center justify-content-center mt-1" style={{gap: '2.75rem'}}>
                    <FontAwesomeIcon className='text-white' style={{fontSize: '1.5rem'}} icon={faTiktok}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-white' style={{fontSize: '1.5rem'}} icon={faInstagram}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-white' style={{fontSize: '1.5rem'}} icon={faTwitter}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-white' style={{fontSize: '1.5rem'}} icon={faYoutube}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-white' style={{fontSize: '1.5rem'}} icon={faFacebook}></FontAwesomeIcon>
                </div>
                <div className="d-flex justify-content-center w-75 flex-wrap" style={{rowGap: '1rem', columnGap: '3.5rem'}}>
                    <a className="text-decoration-none text-white" href="#">Help <FontAwesomeIcon icon={faUpRightFromSquare} className="text-white"/></a>
                    <a className="text-decoration-none text-white" href="#">Site Index <FontAwesomeIcon icon={faUpRightFromSquare} className="text-white"/></a>
                    <a className="text-decoration-none text-white" href="#">IMDbPro <FontAwesomeIcon icon={faUpRightFromSquare} className="text-white"/> </a>
                    <a className="text-decoration-none text-white" href="#">Box Office Mojo <FontAwesomeIcon icon={faUpRightFromSquare} className="text-white"/></a>
                    <a className="text-decoration-none text-white" href="#">Licence IMDb Data <FontAwesomeIcon icon={faUpRightFromSquare} className="text-white"/></a>
                </div>
                <div class="mt-2 d-flex justify-content-center w-75 flex-wrap" style={{rowGap: '1rem', columnGap: '3.5rem'}}>
                    <a className="text-decoration-none text-white" href="#">Press Room</a>
                    <a className="text-decoration-none text-white" href="#">Advertising <FontAwesomeIcon icon={faUpRightFromSquare} className="text-white"/></a>
                    <a className="text-decoration-none text-white" href="#">Jobs <FontAwesomeIcon icon={faUpRightFromSquare} className="text-white"/></a>
                    <a className="text-decoration-none text-white" href="#">Conditions of Use</a>
                    <a className="text-decoration-none text-white" href="#">Privacy Policy</a>
                    <a className="text-decoration-none text-white" href="#">Your Ads Privacy Choices</a>
                </div>
                <div className='mt-4 text-white d-flex align-items-center' style={{gap: '0.25rem'}}><h5>An</h5><img src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-white.png" style={{height: '1.5rem', width: 'auto'}}alt="Amazon logo" /><h5>company</h5></div>
                <p className="mt-2" style={{fontSize: '0.75rem', color: 'gray'}}>© 1990-2025 by IMDb.com, Inc.</p>
            </div>
        </footer>
    )
}