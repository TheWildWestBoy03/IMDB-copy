import { useContext, useEffect, useState } from 'react';
import '../AccountPageType.css';
import SignedInContext from '../../../../context/SignedInContext';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function LinkedAccountForm() {
    const [signedIn, setSignedIn, userData] = useContext(SignedInContext);
    const [userFullData, setUserFullData] = useState({})

    useEffect(() => {
        async function retrieveUserData() {
            const userEmail = userData.userData.email;
            const url = "http://localhost:3000/api/auth/find";
            const response = await axios.post(url, {email: userEmail}, {withCredentials: true});
            
            console.log(response.data);
            setUserFullData(response.data);
        }

        if (userData?.userData !== undefined) {
            retrieveUserData();
        }
    }, [userData])

    function renderUserInfoContainer() {
        return ((userData.userData !== undefined && userFullData !== undefined) && 
            <div className='d-flex align-items-center gap-3'>
                <div className='user-information-label-group'>
                    <p style={{fontSize: '0.95rem', fontWeight: '700', marginBottom: '8px'}}>Email:</p>
                    <p style={{fontSize: '0.95rem', fontWeight: '700', marginBottom: '8px'}}>User ID:</p>
                    <p style={{fontSize: '0.95rem', fontWeight: '700', marginBottom: '8px'}}>Registration Date:</p>
                </div>
                <div className='user-information-label-group'>
                    <p style={{fontSize: '0.95rem', fontWeight: '500', color: 'gray', marginBottom: '8px'}}>{userFullData.email}</p>
                    <p style={{fontSize: '0.95rem', fontWeight: '500', color: 'gray', marginBottom: '8px'}}>{userFullData.username}</p>
                    <p style={{fontSize: '0.95rem', fontWeight: '500', color: 'gray', marginBottom: '8px'}}>{userFullData.createdAt}</p>
                </div>
            </div>)
    }

    return (
        <div className="linked-account-page-form">
            <p style={{fontSize: '1.05rem', fontWeight: '600', marginBottom: '15px'}}>Your IMDb account details</p>
            {renderUserInfoContainer()}
            <div style={{marginTop: '30px'}}>
                <h3 style={{
                    borderLeft: '5px solid #f6cf43',
                    color: 'black',
                    paddingLeft: '5px',
                    fontWeight: 'bold'
                }}>Linked accounts</h3>
                <p style={{color: 'gray', 
                            letterSpacing: '.4px',
                            marginBottom: '28px'
                }}>Log in to IMDb with your Amazon, Google, and/or Apple credentials by linking them to your IMDb account.</p>
            </div>

            <div className='accounts-linkage-container'>
                <div style={{marginBottom: '6px', padding: '13px 16px'}} className='rounded border border-secondary d-flex align-items-center justify-content-between'>
                    <p className='d-flex align-items-center'><FontAwesomeIcon style={{fontSize: '1.5rem', marginRight: '10px'}} icon={faAmazon}></FontAwesomeIcon>Amazon</p>
                    <button style={{borderRadius: '32px', color: '#0e63be'}} className='hoverable btn py-2 px-3 fw-bold'>Link Account</button>
                </div>
                <div style={{marginBottom: '6px', padding: '13px 16px'}} className='rounded border border-secondary d-flex align-items-center justify-content-between'>
                    <p className='d-flex align-items-center'><FontAwesomeIcon style={{fontSize: '1.5rem', marginRight: '10px'}} icon={faGoogle}></FontAwesomeIcon>Google</p>
                    <button style={{borderRadius: '32px', color: '#0e63be'}} className='hoverable btn py-2 px-3 fw-bold'>Link Account</button>
                </div>
                <div style={{marginBottom: '6px', padding: '13px 16px'}} className='rounded border border-secondary d-flex align-items-center justify-content-between'>
                    <p className='d-flex align-items-center'><FontAwesomeIcon style={{fontSize: '1.5rem', marginRight: '10px'}} icon={faApple}></FontAwesomeIcon>Apple</p>
                    <button style={{borderRadius: '32px', color: '#0e63be'}} className='hoverable btn py-2 px-3 fw-bold'>Link Account</button>
                </div>
            </div>
        </div>
    )
}