import { useState, useEffect } from "react"
import TopMovieCard from "../top_movies_section/TopMovieCard"

export default function RenderedWatchlist(props) {
    const [arrowColor, setArrowColor] = useState('white')
    const [groupOrder, setGroupOrder] = useState(0)
    const [oldFirstBtnDisplay, setOldFirstBtnDisplay] = useState('flex')
    const [oldSecondBtnDisplay, setOldSecondBtnDisplay] = useState('flex')

    const baseUrl = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        function handleButtonDisplaying() {
            const first_button = document.querySelector('.first_btn')
            const second_button = document.querySelector('.second_btn')
            
            if (!first_button || !second_button) {
                return
            }

            first_button.style.display = 'flex';
            second_button.style.display = 'flex';

            if (groupOrder === 0) {
                first_button.style.display = 'none';
            } else {
                if (groupOrder === 3) {
                    second_button.style.display = 'none';
                }
            }
        }

        handleButtonDisplaying()
    }, [groupOrder])

    function handleCarouselMovement(direction) {
        const ul = document.getElementById('carousel-watchlist');
        const distance = ul.clientWidth;

        if (ul === null) {
            return;
        } else if (direction === 'left') {
            setGroupOrder(groupOrder - 1)
        } else [
            setGroupOrder(groupOrder + 1)
        ]

        ul.scrollBy({
            left: direction === 'left' ? -distance : distance,
            behavior: "smooth"
        })
    }

    function handleMouseBtnChanging(action) {
        const first_btn = document.querySelector('.first_btn');
        const second_btn = document.querySelector('.second_btn');

        if (!first_btn || !second_btn) {
            return
        }

        if (action === 'enter') {
            setOldFirstBtnDisplay(first_btn.style.display)
            setOldSecondBtnDisplay(second_btn.style.display)
            
            first_btn.style.display = 'flex';
            second_btn.style.display = 'flex';
        } else {
            first_btn.style.display = oldFirstBtnDisplay;
            second_btn.style.display = oldSecondBtnDisplay;
        }
    }

    return (
        <div className="col-lg-12 position-relative p-0 ">
            <ul 
                onMouseEnter={() => handleMouseBtnChanging('enter')}
                onMouseLeave={() => handleMouseBtnChanging('leave')}
                id="carousel-watchlist"
                className="w-100 p-0 d-flex my-2" 
                style={{
                    gap: '0.5rem',
                    minHeight: '570px'
                }}
                >
                {props.watchlistMovies.map((topMovie, index) => {
                    const newMovie = {
                        "original_title": topMovie.name,
                        "poster_path": topMovie.posterPath,
                        "backdrop_path": topMovie.backdropPath,
                    }
                    return <TopMovieCard information={newMovie} baseUrl={baseUrl} key={topMovie.id} index={index}></TopMovieCard>
                })}
            </ul>
            <button onClick={() => handleCarouselMovement('left')} className="btn first_btn text-white position-absolute p-3 fw-bold" style={{border: '2px solid white', fontSize: '2rem', backgroundColor: 'black', opacity: '0.6', top: '50%', transform: 'translateY(-50%)', left: '0'}}>{'<'}</button>
            <button onClick={() => handleCarouselMovement('right')} className="btn second_btn text-white position-absolute p-3 fw-bold" style={{border: '2px solid white', fontSize: '2rem', backgroundColor: 'black', opacity: '0.6', top: '50%', transform: 'translateY(-50%)', right: '0'}}>{'>'}</button>

        </div>
    )
}
