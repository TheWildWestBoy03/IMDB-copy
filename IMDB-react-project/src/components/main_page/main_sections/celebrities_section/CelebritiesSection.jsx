import { useState, useEffect } from "react"
import './CelebritiesCarousel.css'
import Celebrity from "./Celebrity"

export default function CelebritySection() {
    const [celebritiesInformation, setCelebritiesInformation] = useState([])
    const [arrowColor, setArrowColor] = useState('white')
    const [groupOrder, setGroupOrder] = useState(0)
    const [oldFirstBtnDisplay, setOldFirstBtnDisplay] = useState('flex')
    const [oldSecondBtnDisplay, setOldSecondBtnDisplay] = useState('flex')

    const baseUrl = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        async function fetchCelebrities() {
            const url = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';
            try {
                const data = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'accept': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjcwNzM1NDA2MzE2NDAzZmQzZTViOTM1OWUxNTFjNCIsIm5iZiI6MTc1MTgxMjM1OS4zLCJzdWIiOiI2ODZhODkwN2I4ZTY4OWE3NTk1M2ZhYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KyzZoncEy8hRKEjAgezVdHcReBUMr1kdZ6FHGYcIvq8'
                    }
                });
    
                const response = await data.json();
                setCelebritiesInformation(response.results);
            } catch (error) {
                console.log(error);
            }
        }

        if (celebritiesInformation.length === 0) {
            fetchCelebrities()
        }
    }, [])

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
        const ul = document.getElementById('carousel');
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
        <div className="col-lg-10 position-relative p-0 ">
            <h4 className="text-white px-2" style={{
                borderLeft: '5px solid yellow',
                borderRadius: '2px',
                fontWeight: 'bold'
            }}>Most Popular Celebrities {'>'}</h4>
            <span className="text-warning fw-bold">BY RANKING</span>
            <ul 
                onMouseEnter={() => handleMouseBtnChanging('enter')}
                onMouseLeave={() => handleMouseBtnChanging('leave')}
                id="carousel"
                className="w-100 p-0 d-flex my-2" 
                style={{
                    gap: '1rem',
                }}
                >
                {celebritiesInformation.map((celebrity, index) => {
                    return <Celebrity information={celebrity} baseUrl={baseUrl} key={celebrity.id} index={index}></Celebrity>
                })}
            </ul>
            <button onClick={() => handleCarouselMovement('left')} className="btn first_btn text-white position-absolute p-3 fw-bold" style={{border: '2px solid white', fontSize: '2rem', backgroundColor: 'black', opacity: '0.6', top: '50%', transform: 'translateY(-50%)', left: '0'}}>{'<'}</button>
            <button onClick={() => handleCarouselMovement('right')} className="btn second_btn text-white position-absolute p-3 fw-bold" style={{border: '2px solid white', fontSize: '2rem', backgroundColor: 'black', opacity: '0.6', top: '50%', transform: 'translateY(-50%)', right: '0'}}>{'>'}</button>

        </div>
    )
}
