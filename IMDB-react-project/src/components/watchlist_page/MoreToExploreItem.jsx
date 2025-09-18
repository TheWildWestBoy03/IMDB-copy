export default function MoreToExploreItem(props) {
    const type = props.type;
    const description = props.description;
    const suggestiveImage = props.image;

    return (
        <div className="d-flex justify-content-between p-1 align-items-center position-relative" style={{border: '1px solid #e0e0e0', borderRadius: '8px', marginBottom: '8px'}}>
            <div>
                <p style={{position: "absolute", top: 0}}>{type}</p>
                <p style={{position: "absolute", bottom: 0, fontSize: '0.75rem', color: 'gray'}}>{description}</p>
            </div>
            <img style={{
                height: '100px',
                width: '80px',
                borderRadius: '8px'
            }} src={props.image}></img>
        </div>
    )
}