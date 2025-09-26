import './ProfilePageStylesheet.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faEnvelope, faListDots, faPencil, faThumbsDown, faThumbsUp, faTrash, faStar as solidStar} from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import SpoilerBtn from './SpoilerBtn';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function ProfilePageReview(props) {
    const rootUrl = "https://image.tmdb.org/t/p/w500";
    const [arrowColor, setArrowColor] = useState('black');
    const [spoilerBtnClicked, setSpoilerBtnClicked] = useState(false);
    const [optionsDisplayed, setOptionsDisplayed] = useState(false);

    useEffect(() => {
        function printProps() {
            console.log(props.reviewInfo);
        }

        printProps();
    })

    function getClickedStateFromSpoilerBtn(clicked) {
        setSpoilerBtnClicked(clicked);
    }
    
    function handleSpoilerClicking() {
        if (spoilerBtnClicked === false) {
            return <SpoilerBtn callback={getClickedStateFromSpoilerBtn} review={props.reviewInfo}></SpoilerBtn>
        }

        return (<div>
            <div style={{
                marginTop: '16px',
                maxWidth: '145px', 
                color: 'white', 
                backgroundColor: '#bd2404', 
                padding: '0', 
                fontSize: '.8rem', 
                fontWeight: '500',
                padding: '0 4px',
                borderRadius: '4px'}}>SPOILER</div>
            <p style={{wordBreak: 'break-word', width: '100%', fontFamily: 'sans-serif', fontWeight: '400', marginTop: '10px'}}>{props.reviewInfo.body}</p>
        </div>)
    }

    function displayReviewOptions() {
        return (
            <ul className='review-options-displayed'>
                <li>
                    <a><span><FontAwesomeIcon style={{color: 'gray', fontSize: '1.4rem'}} icon={faPencil}></FontAwesomeIcon></span> Edit</a></li>
                <li>
                    <a><span><FontAwesomeIcon style={{color: 'gray', fontSize: '1.4rem'}} icon={faTrash}></FontAwesomeIcon></span> Delete</a></li>
                <li>
                    <a><span><FontAwesomeIcon style={{color: 'gray', fontSize: '1.4rem'}} icon={faFacebook}></FontAwesomeIcon></span> Facebook</a></li>
                <li>
                    <a><span><FontAwesomeIcon style={{color: 'gray', fontSize: '1.4rem'}} icon={faTwitter}></FontAwesomeIcon></span> Twitter</a></li>
                <li>
                    <a><span><FontAwesomeIcon style={{color: 'gray', fontSize: '1.4rem'}} icon={faEnvelope}></FontAwesomeIcon></span> Email link</a></li>
                <li>
                    <a><span><FontAwesomeIcon style={{color: 'gray', fontSize: '1.4rem'}} icon={faClipboard}></FontAwesomeIcon></span> Copy link</a></li>
            </ul>
        )
    }

    return (
        <div className='profile-page-review w-100'>
            <div className='movie-container'>
                <img src={rootUrl + props.reviewInfo.production.poster_path} 
                    style={{display: 'inline-block', borderRadius: '12px', height: '63.64px', width: '43px'}}>
                </img>
                <div className='movie-information'>
                    <p style={{lineHeight: '.8', fontSize: '1.5rem', fontWeight: '500', color: 'black', marginBottom: '8px'}}>{props.reviewInfo.production.original_title}</p>
                    <p className='d-flex flex-row gap-3 align-items-center justify-content-start'>
                        <span><FontAwesomeIcon style={{color: '#f5c518', marginRight: '5px'}} icon={solidStar}></FontAwesomeIcon> 7.7</span>
                        <span><FontAwesomeIcon style={{color: '#4169c1', marginRight: '5px'}} icon={solidStar}></FontAwesomeIcon>{
                            props.reviewInfo.rating
                        }</span>
                    </p>
                </div>
            </div>
            <hr style={{margin: '5px 0'}}></hr>
            <div className='grid-review-body'>
                <p style={{margin: '16px 0', color: '#a0a0a0'}}>{props.reviewInfo.createdAt}</p>
                <p 
                    onMouseOver={() => { setArrowColor('#f5c518'); }}
                    onMouseLeave={() => setArrowColor('black')}  
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        fontSize: '1.25rem', 
                        fontWeight: '500', 
                        gap: '5px' 
                    }}
                    >
                    <span>{props.reviewInfo.title}</span>
                    <FontAwesomeIcon 
                        style={{ fontSize: '1rem', color: arrowColor }} 
                        icon={faChevronRight} 
                    />
                    </p>

                {props.reviewInfo.isSpoiler === true && handleSpoilerClicking()}
                {props.reviewInfo.isSpoiler === false && <p style={{wordBreak: 'break-word', width: '100%', fontFamily: 'sans-serif', fontWeight: '400', marginTop: '8px'}}>{props.reviewInfo.body}</p>}
            </div>
            <div className='mt-2 thumbs-container d-flex justify-content-start align-items-center' style={{gap: '10px', fontSize: '1.40rem', color: 'gray'}}>
                <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                <span>Helpful</span> <div style={{borderRadius: '100%', backgroundColor: 'gray', height: '5px', width: '5px'}}></div>
                <span>0</span>
                <FontAwesomeIcon icon={faThumbsDown} style={{marginLeft: '10px'}}></FontAwesomeIcon>
                <span>0</span>
                <FontAwesomeIcon onClick={(e) => setOptionsDisplayed((last) => !last)} icon={faListDots} style={{cursor: 'pointer', marginLeft: 'auto'}}></FontAwesomeIcon>
            </div>
            {optionsDisplayed === true && displayReviewOptions()}
        </div>
    )
}