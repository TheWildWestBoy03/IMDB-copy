export default function Celebrity(props) {
    return (
        <li className="list-unstyled d-inline-block">
            <img
                src={props.baseUrl + props.information.profile_path}
                style={{
                    scrollSnapAlign: 'center',
                    minWidth: '200px',
                    minHeight: '200px',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                }}
                className="rounded-circle">
            </img>
            <div className="d-flex w-100 justify-content-center mt-2">
                <p className="m-0 text-white fw-bold me-3">{props.index + 1}</p>
                <p className="m-0 text-secondary"><span style={{fontSize: '1rem', color: '#4c7c34', fontWeight: 'bolder'}}>↑</span>{'('}{props.information.popularity}{')'}</p>
            </div>
            <p className="text-white fw-bold m-0">{props.information.original_name}</p>
        </li>
    )
}