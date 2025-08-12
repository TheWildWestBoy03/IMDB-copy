import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reenteredPassword, setReenteredPassword] = useState('');

    async function handleRegistration(e) {
        e.preventDefault()

        if (username === '' || email === '' || password === '' || reenteredPassword === '') {
            console.log("enter data");
            return;
        }

        if (password.length < 8) {
            console.log("Password should be at least 8 characters")
            return;
        }
    
        if (password !== reenteredPassword) {
            console.log("Reenter the password correctly")
            return;
        }

        // connection with server
        try {
            const response = await axios.post('http://localhost:3000/api/auth/register', {
                username: username,
                email: email,
                password: password
            })

            if (response.status == 201) {
                window.location = "http://localhost:5173/login";
            } else if (response.status == 400) {
                console.log("Another user with this username exists!");
            }
        } catch (error) {
            console.log(error)
            return;
        }
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <a href="/" className="btn bg-warning px-2 py-1 lh-2 my-3" style={{fontSize: '2rem', fontWeight: '900'}}>IMDb</a>
            <div className="d-flex flex-column align-items-start justify-content-around p-4" style={{minWidth: "350px", border: '1px solid black', borderRadius: '5px'}}>
                <h2>Create account</h2>
                <form onSubmit={(e) => handleRegistration(e)} className="w-100 d-flex flex-column align-content-around">
                    <div>
                        <label className="fw-bold">Your name</label>
                        <input
                            onChange={(e) => {setUsername(e.target.value)}}
                            className="form-control form-control-sm" 
                            type="text" 
                            placeholder="First and last name"
                            id="name"
                            name="name"
                            style={{border: '1px solid black'}}
                            ></input>
                    </div>
                    <div>
                        <label className="fw-bold">Email</label>
                        <input
                            onChange={(e) => {setEmail(e.target.value)}}
                            className="form-control form-control-sm" 
                            type="email" 
                            id="email"
                            name="email"
                            style={{border: '1px solid black'}}
                            ></input>
                    </div>
                    <div>
                        <label className="fw-bold">Password</label>
                        <input
                            onChange={(e) => {setPassword(e.target.value)}}
                            className="form-control form-control-sm" 
                            type="password" 
                            placeholder="at least 8 characters"
                            id="password"
                            name="password"
                            style={{border: '1px solid black'}}
                            ></input>
                    </div>
                    <div>
                        <label className="fw-bold">Re-enter password</label>
                        <input
                            onChange={(e) => {setReenteredPassword(e.target.value)}}
                            className="form-control form-control-sm" 
                            type="password" 
                            placeholder=""
                            id="reentered-password"
                            name="password"
                            style={{border: '1px solid black'}}
                            ></input>
                    </div>
                    
                    <button className="btn btn-light w-100 rounded-pill px-2 py-1 mt-3" style={{backgroundColor: 'yellow'}}>Create your IMDb account</button>
                </form>

                <hr className="mt-5"></hr>
                <div className="d-flex justify-content-start w-100" style={{gap: '0.75rem'}}>
                    <span>Already have an account?</span>
                    <Link className="text-decoration-none" to='/login'>Sign in <subscript>{' >'}</subscript></Link>
                </div>
            </div>
        </div>
    )
}