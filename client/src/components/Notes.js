import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const { notes, fetchAllNotes } = useContext(NoteContext);
    useEffect(() => {
        fetchAllNotes()
    }, [])
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
