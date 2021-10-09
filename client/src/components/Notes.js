import React, { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    // eslint-disable-next-line
    const { notes, setNotes } = useContext(NoteContext);
    return (
        <>
            <div className="my-3 container">
                <div className="row">
                    <h2> Your Notes</h2>
                    {notes.map(notes => { return (<NoteItem key={notes._id} notes={notes} />) })}
                </div>
            </div>
        </>
    )
}

export default Notes
