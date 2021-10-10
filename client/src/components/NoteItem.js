import React, { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const { deleteNote, editNote } = useContext(NoteContext)
    // eslint-disable-next-line
    const { _id, user_id, title, description, tag, date } = props.notes;
    return (
        <>
            <div className="col-md-3">
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <i className="fa-solid fa-trash-can mx-2" onClick={() => { deleteNote(_id) }}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { editNote(_id) }}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem;
