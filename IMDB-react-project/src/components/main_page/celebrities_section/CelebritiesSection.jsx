import { useState, useEffect } from "react"

export default function CelebritySection() {
    const [celebritiesInformation, setCelebritiesInformation] = useState([])
    const [arrowColor, setArrowColor] = useState('white')
    const [currentFirstCelebrity, setCurrentFirstCelebrity] = useState(0)

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

    return (
        <div className="container-fluid bg-secondary">
            <h3 className="text-white">Most Popular Celebrities {'>'}</h3>
            <span className="text-warning fw-bold">BY RANKING</span>
            <div className="container-fluid bg-primary">
                {celebritiesInformation.map((celebrity, index) => {
                    const baseUrl = "https://image.tmdb.org/t/p/w500";
                    console.log(celebrity)
                    return (
                    <img 
                        src={baseUrl + celebrity.profile_path} 
                        style={{
                            width: '14%',
                            aspectRatio: '1 / 1',
                            objectFit: 'cover',
                            objectPosition: 'center center',
                        }}
                        className="rounded-circle">
                        </img>
                    )
                })}
            </div>
        </div>
    )
}