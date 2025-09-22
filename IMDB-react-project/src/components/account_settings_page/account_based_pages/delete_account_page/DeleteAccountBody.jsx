import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import SignedInContext from "../../../../context/SignedInContext";
import axios from "axios";

export default function DeleteAccountBody() {
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

    return (
        <div className="delete-account-section">
            <div style={{
                padding: '20px 24px',
                border: '1px solid #e0e0e0',
                borderRadius: '4px'
            }}>
                <p style={{display: 'flex', alignItems: 'center', fontWeight: '700', color: 'black', fontSize: '1rem', marginBottom: '16px'}}>
                    <FontAwesomeIcon style={{marginRight: '10px', fontSize: '1.35rem'}} icon={faExclamationTriangle}></FontAwesomeIcon>Deleting your account is a permanent operation</p>
                <p style={{fontWeight: '400', color: 'black', fontSize: '1rem'}}>Deleting your account cannot be undone, so please double check that you really want to delete this account.</p>
                <hr style={{marginBottom: '24px'}}></hr>
                <p style={{fontSize: '1.05rem'}}>Your account details: </p>

                {userFullData != undefined && <p style={{fontSize: '1.05rem', lineHeight: '1', margin: '10px 0', fontWeight: '400'}}><span style={{fontWeight: '700'}}>ID </span> {userFullData.username}</p>}
                {userFullData != undefined && <p style={{fontSize: '1.05rem', lineHeight: '1', margin: '16px 0', fontWeight: '400'}}><span style={{fontWeight: '700'}}>Joined </span> {userFullData.createdAt}</p>}
                <button type="submit" className='btn' style={{
                                                        padding: '7px 14px', 
                                                        borderRadius: '32px', 
                                                        background: '#f5c518', 
                                                        fontWeight: '700', 
                                                        fontSize: '.90rem',
                                                        marginBottom: '-6px'}}>Request account deletion</button>
            </div>

        </div>
    )
}