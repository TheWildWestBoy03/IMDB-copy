import './ProfilePageStylesheet.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMedal, faChevronRight, faInfoCircle} from "@fortawesome/free-solid-svg-icons"
import ProfilePageList from './ProfilePageList';
import SignedInContext from '../../context/SignedInContext';
import { useContext, useEffect, useState } from "react"
import axios from "axios"

export default function ProfilePageBodyFirstColumn() {
    const [watchlist, setWatchlist] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [signedIn, setSignedIn, userData] = useContext(SignedInContext);

    useEffect(() => {
        async function retrieveData() {
            try {
                const watchlistUrl = "http://localhost:3000/api/watchlist/get-watchlist";
                const ratingsUrl = "http://localhost:3000/api/reviews/rating/find-all";
                const reviewsUrl = "http://localhost:3000/api/reviews/review/find-all";

                const userEmail = userData.userData.email;

                const watchlistResult = await axios.post(watchlistUrl, {email: userEmail}, {withCredentials: true});
                const ratingsResult = await axios.post(ratingsUrl, {userEmail: userEmail} , {withCredentials: true});
                const reviewsResult = await axios.post(reviewsUrl, {user: userEmail}, {withCredentials: true});
                const movieList = watchlistResult.data.movieList;
                
                const ratedWatchlistMovies = movieList.map((entity) => {
                    const entityName = entity.name;
                    
                    const ratedEntityRatings = ratingsResult.data.filter((filteredEntity) => entity.name === filteredEntity.name);
                    if (ratedEntityRatings.length !== 0) {
                        return ({
                            name: entity.name,
                            rating: ratedEntityRatings[0].rating,
                            posterPath: entity.posterPath
                        });
                    }

                    return ({
                        name: entity.name,
                        posterPath: entity.posterPath
                    });
                })

                console.log(reviewsResult.data);
                setRatings(ratingsResult.data);
                setWatchlist(ratedWatchlistMovies);
                setRatings(ratingsResult.data);
            } catch (errors) {
                console.log(errors);
            }
        }
        
        retrieveData();
    }, [userData]);

    return (
        <div className='profile-page-body-first'>
            <div className='profile-update-information'>
                <p className='d-flex align-items-center' style={{fontWeight: '600', marginBottom: '4px', fontSize: '1.10rem'}}>
                    <FontAwesomeIcon icon={faInfoCircle} style={{color: 'gray', fontSize: '1.10rem', marginRight: '5px'}}></FontAwesomeIcon>
                    Welcome to your new profile</p>
                <p style={{fontFamily: 'sans-serif', fontWeight: '500', fontSize: '.9rem', letterSpacing: '.5'}}>Our updates are still in development. While the previous version of your profile is no longer accessible, we're actively working on improvements, and some of the missing features will be returning soon! Stay tuned for their return. 
                    In the meantime, your Ratings Analysis is still available on our iOS and Android apps, found on your profile page. To view your Rating Distribution(s) by Year and Genre, please refer to our new <a href="#" style={{textDecoration: 'none', color: '#3c7ec9'}}>Help guide</a>.</p>
            </div>
            <div style={{marginTop: '10px'}} className='profile-body-section'>
                <div className="d-flex align-items-center" style={{fontWeight: '700', fontSize: '1.75rem'}}>
                    <div style={{width: '5px',
                                display: 'inline-block',
                                height: '35px',
                                backgroundColor: '#f7d351', 
                                marginRight: '5px',
                                borderRadius: '4px'}}></div>
                    Badges
                    <FontAwesomeIcon className="hoverable-chevron" icon={faChevronRight} style={{marginLeft: "20px"}}></FontAwesomeIcon>
                </div>
                <p style={{marginTop: '5px', color: 'gray'}}>To learn how to earn badges, go to the <a href="#" style={{color: '#3c7ec9', textDecoration: 'none'}}>badges help page</a>.</p>
                <div className='badges-list' style={{padding: '24px 0', marginBottom: '8px'}}>
                    <div className='d-flex flex-column gap-2 align-items-center justify-content-center'
                        style={{
                            textAlign: 'center', 
                            backgroundColor: '#ecf3fa', 
                            color: '#1869c0', 
                            borderRadius: '24px', 
                            height: '148px',
                            fontWeight: '600',
                            width: '104px'}}>
                        <FontAwesomeIcon icon={faMedal}></FontAwesomeIcon>
                        <p style={{lineHeight: '1.1', fontSize: '.85rem', letterSpacing: '2px'}}>EXPLORE BADGES</p>
                    </div>
                </div>
            </div>
            <div className='profile-body-section'>
                <div className="d-flex align-items-center" style={{fontWeight: '700', fontSize: '1.75rem'}}>
                    <div style={{width: '5px',
                                display: 'inline-block',
                                height: '35px',
                                backgroundColor: '#f7d351', 
                                marginRight: '5px',
                                borderRadius: '4px'}}></div>
                    Ratings
                    <FontAwesomeIcon className="hoverable-chevron" icon={faChevronRight} style={{marginLeft: "20px"}}></FontAwesomeIcon>
                </div>
                <p style={{marginTop: '5px', color: 'gray'}}>Your ratings are public. <a href="#" style={{color: '#3c7ec9', textDecoration: 'none', marginLeft: '3px'}}>Edit</a></p>
                <ProfilePageList type={"watchable"} list={ratings}></ProfilePageList>
            </div>

            <div className='profile-body-section'>
                <div className="d-flex align-items-center" style={{fontWeight: '700', fontSize: '1.75rem'}}>
                    <div style={{width: '5px',
                                display: 'inline-block',
                                height: '35px',
                                backgroundColor: '#f7d351', 
                                marginRight: '5px',
                                borderRadius: '4px'}}></div>
                    Watchlist
                    <FontAwesomeIcon className="hoverable-chevron" icon={faChevronRight} style={{marginLeft: "20px"}}></FontAwesomeIcon>
                </div>
                <p style={{marginTop: '5px', color: 'gray'}}>Your ratings are public. <a href="#" style={{color: '#3c7ec9', textDecoration: 'none', marginLeft: '3px'}}>Edit</a></p>
                <ProfilePageList type={"watchable"} list={watchlist}></ProfilePageList>
            </div>
            <div className='profile-body-section'>
                <div className="d-flex align-items-center" style={{fontWeight: '700', fontSize: '1.75rem'}}>
                    <div style={{width: '5px',
                                display: 'inline-block',
                                height: '35px',
                                backgroundColor: '#f7d351', 
                                marginRight: '5px',
                                borderRadius: '4px'}}></div>
                    Lists
                    <FontAwesomeIcon className="hoverable-chevron" icon={faChevronRight} style={{marginLeft: "20px"}}></FontAwesomeIcon>
                </div>
            </div>
            <div className='profile-body-section'>
                <div className="d-flex align-items-center" style={{fontWeight: '700', fontSize: '1.75rem'}}>
                    <div style={{width: '5px',
                                display: 'inline-block',
                                height: '35px',
                                backgroundColor: '#f7d351', 
                                marginRight: '5px',
                                borderRadius: '4px'}}></div>
                    Reviews
                    <FontAwesomeIcon className="hoverable-chevron" icon={faChevronRight} style={{marginLeft: "20px"}}></FontAwesomeIcon>
                </div>
                <ProfilePageList list={watchlist}></ProfilePageList>
            </div>
        </div>
    )
}