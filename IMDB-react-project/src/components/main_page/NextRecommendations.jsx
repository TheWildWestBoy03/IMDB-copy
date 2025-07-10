import NextRecommendation from './NextRecommendation';

export default function NextRecommendations(props) {
    const {movies, currentPosition} = props

    console.log(movies)
    const first_recommendation_data = movies.length > 0 && movies[(currentPosition + 1) % movies.length]
    const second_recommendation_data = movies.length > 0 && movies[(currentPosition + 2) % movies.length]
    const third_recommendation_data = movies.length > 0 && movies[(currentPosition + 3) % movies.length]

    if (movies.length === 0) 
        return null

    return (
        <div>
            <p style={{color: 'yellow', fontWeight: 'bolder', fontSize: '1.25rem', marginBottom: '0px'}}>Up next</p>
            <div className='my-3'>
                <NextRecommendation data={first_recommendation_data}></NextRecommendation>
                <NextRecommendation data={second_recommendation_data}></NextRecommendation>
                <NextRecommendation data={third_recommendation_data}></NextRecommendation>
            </div>
            <a href="#" className='btn text-white fw-bold p-0' style={{fontSize: '1.25rem'}}>Browse trailers {'>'}</a>
        </div>
    )
}