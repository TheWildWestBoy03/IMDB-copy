import './SignInRight.css'

export default function SignInRight() {
    return (
        <div className='d-none d-md-flex justify-content-center'>
            <div className="d-flex flex-column justify-content-start p-3" style={{width: '80%', rowGap: '0.50rem'}}>
                <h4 className="fw-bold text-dark mt-2">
                    Benefits of your free IMDb account
                </h4>
                <div>
                <p>Personalized Recommendations</p>
                <p>Discover shows you'll love.</p>
                </div><div>
                <p>Your Watchlist</p>
                <p>Track everything you want to watch and receive e-mail when movies open in theaters.</p>
                </div><div>
                <p>Your Ratings</p>
                <p>Rate and remember everything you've seen.</p>
                </div><div>
                <p>Contribute to IMDb</p>
                <p>Add data that will be seen by millions of people and get cool badges.</p>
                </div>
            </div>
        </div>
    )
}