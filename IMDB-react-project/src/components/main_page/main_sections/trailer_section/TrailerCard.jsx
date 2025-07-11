import { useState } from 'react';

export default function TrailerCard(props) {
    const baseImageUrl = "https://image.tmdb.org/t/p/w500";
    const { backdrop_path, poster_path, original_title } = props.date;
    const [emphasizingPlaySymbol, setEmphasizingPlaySymbol] = useState('white')
    const index = props.index 
    const currentPosition = props.currentPosition

    if (currentPosition == index) {
        return (
            <div className='my-5 d-flex justify-content-end flex-wrap position-relative me-2 p-0'>
                <img
                    src={baseImageUrl + backdrop_path}
                    alt='backdrop_image'
                    className='img-fluid'
                    style={{ width: '100%', borderRadius: '16px' }}
                />
                <button
                    onClick={props.handleDecrement}
                    className="btn p-2 border-1" 
                    style={{
                    position: 'absolute',
                    backgroundColor: 'black',
                    left: '0%',
                    opacity: '.5',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '2rem',
                    fontWeight: 'bolder',
                    color: 'white'
                }}>
                    {'<'}
                </button>
    
                <button
                    onClick={props.handleIncrement}
                    className="btn p-2 border-1" 
                    style={{
                    position: 'absolute',
                    backgroundColor: 'black',
                    right: '0%',
                    opacity: '.5',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '2rem',
                    fontWeight: 'bolder',
                    color: 'white'
                }}>
                    {'>'}
                </button>
    
                <div className='d-flex position-absolute justify-content-start bottom-0' style={{ left: '5%', right: '0%' }}>
                    <img
                        src={baseImageUrl + poster_path}
                        alt='position-absolute poster_path'
                        className='shadow img-fluid'
                        style={{ maxHeight: '10rem', maxWidth: '7rem' }}
                    />
                    <div onMouseLeave={() => setEmphasizingPlaySymbol('white')} onMouseEnter={() => setEmphasizingPlaySymbol('#e6b919')} className="d-flex justify-content-start align-items-end w-100">
                        <div className='d-flex'>
                            <a href="#" className='text-decoration-none text-white fw-bold' style={{ display: 'inline-block', width: '7.5rem', height: '7.5rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke={emphasizingPlaySymbol} style={{ height: '7.5rem', width: '7.5rem' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                </svg>
                            </a>
                            <div className='d-flex flex-column justify-content-center'>
                                <h3 className="flex justify-content-start align-items-end text-white fw-bold margin-0"><a href="#" className='text-decoration-none text-white fw-bold'>{original_title}</a></h3>
                                <p style={{color: 'gray', fontSize: '1.5rem', margin: '0'}}> Watch The Trailer </p>
                                <div className="d-flex justify-content-start gap-4">
                                    <p>👍 64</p>
                                    <p>❤️👏 35</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    return null
}
