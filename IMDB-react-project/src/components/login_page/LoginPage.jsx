import { useState, useContext } from "react";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

import SignedInContext from "../../context/SignedInContext";

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signedIn, setSignedIn, userData] = useContext(SignedInContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (email === '' || password === '') {
            console.log("Insert your credentials!")
            return
        }

        try {
            const response = await axios.post('http://localhost:3000/login', {
                email: email,
                password: password
            }, {
                withCredentials: true,
            })
            
            console.log(response);
            if (response.status === 200) {
                setSignedIn(true)
                navigate('../')
            } else if (response.status === 404) {
                console.log("User not found");
            } else if (response.status === 401) {
                console.log("Incorrect password!");
            }
        } catch (error) {
            return;
        }

    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <a href="/" className="btn bg-warning px-2 py-1 lh-2 my-3" style={{fontSize: '2rem', fontWeight: '900'}}>IMDb</a>
            <div className="d-flex flex-column align-items-left p-4" style={{minWidth: "350px", border: '1px solid black', borderRadius: '5px'}}>
                <h4>Sign in</h4>
                <form className="d-flex flex-column align-content-around" onSubmit={handleSubmit}>
                    <div>
                        <label className="fw-bold">Email or mobile phone number</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" 
                            className="form-control form-control-sm" 
                            id='email' 
                            name='email' 
                            style={{border: '1px solid black'}}
                            value={email}>
                        </input>
                    </div>
                    <div className="mt-1">
                        <div className="d-flex justify-content-between">
                            <label className="fw-bold">Password</label>
                            <a href="#" className="text-decoration-none">Password assistance</a>
                        </div>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" 
                            className="form-control form-control-sm" 
                            id="password" 
                            name="password" 
                            style={{border: '1px solid black'}}
                            value={password}>    
                        </input>
                    </div>

                    <button type="submit" className="btn w-100 fw-normal rounded-pill mt-4 p-1" style={{fontSize: '0.90rem', backgroundColor: 'yellow'}}>Sign in</button>

                    <div className="form-check mt-3">
                        <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something"></input>
                        <label className="form-check-label">Keep me signed in. <a className="text-decoration-none">Details</a></label>
                    </div>
                </form>
                <hr className="mt-5"></hr>
                <button className="btn btn-light w-100 rounded-pill"><Link className="text-decoration-none text-dark" to='/register'>Create your IMDb account</Link></button>
            </div>
        </div>
    )
}