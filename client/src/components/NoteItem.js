import React, { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const { deleteNote } = useContext(NoteContext);
    const {notes, updateNote} = props;

    return (
        <>
            <div className="col-md-3">
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">{notes.title}</h5>
                        <span className="position-absolute badge top-0 end-0 bg-dark bg-opacity-75" >{notes.tag}</span>
                        <p className="card-text">{notes.description}</p>
                        <i className="fa-solid fa-trash-can mx-2" onClick={() => { deleteNote(notes._id) }}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={ () => { updateNote(notes)}}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem;
