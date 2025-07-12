import './SignInPage.css'
import SignInOptions from './SignInOptions'
import SignInRight from './SignInRight'

export default function SignInPage() {
    return (
        <>
            <div className="row">
                <div className="col-md-12 signin_background d-flex justify-content-center">
                    <div className="d-flex" style={{width: '66%', backgroundColor: 'white', height: '450px', border: '1px solid black'}}>
                        <SignInOptions></SignInOptions>
                        <SignInRight></SignInRight>
                    </div>
                </div>
            </div>
            <div className='row bg-black' style={{minHeight: '300px'}}></div>
        </>
    )
}