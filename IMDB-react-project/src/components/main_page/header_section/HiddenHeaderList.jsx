export default function HiddenHeaderList(props) {
    const topics = props.subjects;

    console.log(topics);
    return (
        <>
            <h1 className="text-white fw-bold">{props.listTitle}</h1>
            <ul className="hidden-list">
               {topics.map((element) => {return (<li>{element}</li>)})}
            </ul>
        </>
    )
}