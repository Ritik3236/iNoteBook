import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import Modal from './Modal';


const Notes = () => {
    const { notes, fetchAllNotes, editNote } = useContext(NoteContext);
    useEffect(() => {
        fetchAllNotes()
        // eslint-disable-next-line
    }, [])
    const refEdit = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({
        _id: '',
        title: '',
        description: "",
        tag: "Default"
    })
    const updateNote = (currentNote) => {
        refEdit.current.click();
        setNote({
            _id: currentNote._id, title: currentNote.title, description: currentNote.description, tag: currentNote.tag
        })
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        editNote(note);
        refClose.current.click();
    }
    const noteProps = { note, onChange, onSubmit, updateNote, refClose, refEdit }
    return (
        <>
            <Modal noteProps={noteProps} />
            <div className="my-3 container">
                <div className="row">
                    <h2> Your Notes</h2>
                    {notes.map(notes => { return (<NoteItem key={notes._id} notes={notes} updateNote={updateNote} />) })}
                </div>
            </div>
        </>
    )
}

export default Notes
