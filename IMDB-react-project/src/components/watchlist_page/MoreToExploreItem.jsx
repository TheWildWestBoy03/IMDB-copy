import { useState } from "react";

export default function MoreToExploreItem(props) {
    const [mouseOver, setMouseOver] = useState(false);

    const type = props.type;
    const description = props.description;
    const suggestiveImage = props.image;

    return (
        <div onMouseOver={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onClick={() => window.location = props.link}
             className="d-flex justify-content-between p-1 align-items-center position-relative" 
             style={{border: '1px solid #e0e0e0', borderRadius: '8px', marginBottom: '8px',
                cursor: mouseOver === true ? 'pointer' : 'default',
             }}>
            <div>
                <p style={{position: "absolute", 
                            top: 0, 
                            textDecoration: mouseOver === true ? 'underline' : 'none',
                            }}>{type}</p>
                <p style={{position: "absolute", bottom: 0, fontSize: '0.75rem', color: 'gray'}}>{description}</p>
            </div>
            <img style={{
                height: '100px',
                width: '80px',
                borderRadius: '8px'
            }} src={suggestiveImage}></img>
        </div>
    )
}