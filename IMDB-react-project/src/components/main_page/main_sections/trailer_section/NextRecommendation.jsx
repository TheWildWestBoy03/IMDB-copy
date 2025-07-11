import { useState } from "react";

export default function NextRecommendation(props) {
    const baseImageUrl = "https://image.tmdb.org/t/p/w500";
    const { backdrop_path, poster_path, original_title } = props.data;
    const [emphasizingPlaySymbol, setEmphasizingPlaySymbol] = useState('white')

    return (
        <div className="d-flex p-3 pb-0 w-100" style={{backgroundColor: '#121212'}}>
            <img src={baseImageUrl + poster_path} className="img-fluid rounded" style={{maxHeight: '8rem', maxWidth: 'auto'}}></img>
            <div className="mx-3">
                <a href="#" className='text-decoration-none text-white' style={{ display: 'inline-block', width: '3rem', height: '3rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke={emphasizingPlaySymbol} style={{ height: '3rem', width: '3rem' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                    </svg>
                </a>
                <p className="text-white" style={{fontSize: '1.25rem'}}>{original_title}</p>
                <p className="text-white">Watch The Trailer</p>
            </div>
        </div>
    )
}