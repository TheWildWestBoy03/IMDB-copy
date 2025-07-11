import TrailerCard from './TrailerCard';
import NextRecommendations from './NextRecommendations';
import { useState, useEffect } from 'react';

export default function TrailerSection() {
  const [movie_data, set_movie_data] = useState([])
  const [currentPosition, setCurrentPosition] = useState(0)

  function handleIncrement() {
      setCurrentPosition((currentPos) => {
          return (currentPos + 1) % movie_data.length
      })
  }

  function handleDecrement() {
      setCurrentPosition((currentPos) => {
          return (currentPos - 1 + movie_data.length) % movie_data.length
      })
  }

  useEffect(() => {
    async function handleFetch() {
      try {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
          method: 'GET',
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjcwNzM1NDA2MzE2NDAzZmQzZTViOTM1OWUxNTFjNCIsIm5iZiI6MTc1MTgxMjM1OS4zLCJzdWIiOiI2ODZhODkwN2I4ZTY4OWE3NTk1M2ZhYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KyzZoncEy8hRKEjAgezVdHcReBUMr1kdZ6FHGYcIvq8"
          }
        });

        const response = await data.json();
        set_movie_data(response.results);
      } catch (error) {
        console.log(error);
      }
    }

    if (movie_data.length === 0) {
      handleFetch();
    }
  }, []);
  const currentMovie = movie_data[currentPosition];

  return (
      <div className='row'>
        <div className="col-lg-1"></div>
        <div className="col-lg-7">
          {movie_data.length && <TrailerCard
            date={currentMovie}
            index={currentPosition}
            currentPosition={currentPosition}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />}
        </div>
        <div className='col-lg-3 my-5 px-2'>
          <NextRecommendations movies={movie_data} currentPosition={currentPosition}></NextRecommendations>
        </div>
        <div className="col-lg-1"></div>
      </div>
  )
}