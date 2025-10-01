import { useState } from 'react';
import './NewListPageStylesheet.css'

export default function NewListPageBodyForm() {
    const [listName, setListName] = useState("");
    const [listDescription, setListDescription] = useState("");
    const [privacyType, setPrivacyType] = useState("Your list will be visible to everyone.");

    function submitData(event) {
        console.log("Front end finished");
    }

    return (
        <div className="new-list-page-form">
            <div className='list-title-section'>
                <input 
                    type='text' 
                    placeholder='Enter the name of your list'
                    style={{
                        borderRadius: '2px',
                        border: '2px solid gray',
                        padding: '12px'
                    }}
                    onChange={(event) => setListName(event.target.value)}
                    className='w-100'></input>
                <p style={{fontSize: '.75rem', color: 'gray'}}>{listName.length} of 255 characters</p>
            </div>
            <div className='list-description-section'>
                <textarea style={{
                        borderRadius: '2px',
                        border: '2px solid gray',
                        padding: '12px',
                        resize: 'vertical',
                        marginTop: '10px'
                }}
                        placeholder='Describe your list...'
                        onChange={(event) => setListDescription(event.target.value)}
                        rows={1}
                ></textarea>
                <p style={{fontSize: '.75rem', color: 'gray'}}>{listDescription.length} of 10000 characters</p>
            </div>
            <p style={{
                fontWeight: '700',
                color: 'black',
                marginTop: '10px',
                marginBottom: '8px'
            }}>List Type</p>

            <div className='list-type-section'>
                <div className='radio-container'>
                    <input type="radio" defaultChecked  name="new-list-type"></input><label>Titles</label>
                </div>
                <div className='radio-container'>
                    <input type="radio" name="new-list-type"></input><label>People</label>
                </div><div className='radio-container'>
                    <input type="radio"  name="new-list-type"></input><label>Images</label>
                </div><div className='radio-container'>
                    <input type="radio"  name="new-list-type"></input><label>Videos</label>
                </div>
            </div>

            <p style={{
                fontWeight: '700',
                color: 'black',
                marginTop: '25px',
                marginBottom: '8px'
            }}>Privacy setting</p>

             <div className='privacy-section'>
                <div className='radio-container'>
                    <input onChange={(e) => setPrivacyType("Your list will be visible to everyone.")}  name="list-privacy-type" type="radio" defaultChecked></input><label>Public</label>
                </div>
                <div className='radio-container'>
                    <input onChange={(e) => setPrivacyType("Others will not be able to view your list.")}  name="list-privacy-type" type="radio"></input><label>Private</label>
                </div>
            </div>
            <p style={{
                fontWeight: '400',
                color: 'black',
                marginTop: '10px',
            }}>{privacyType}</p>

            <button className='btn px-3 py-1 rounded-pill'
                    style={{
                        color: 'white',
                        fontWeight: '600',
                        backgroundColor: '#0e63be',
                        marginTop: '10px'
                    }}
                    onClick={(e) => submitData(e)}>Create</button>

        </div>
    )
}