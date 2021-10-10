import React, { useContext, useState } from 'react';
import NoteContext from '../context/notes/noteContext';

const AddNewNote = () => {

    const { addNote } = useContext(NoteContext)
    const [note, setNote] = useState({
        title: '',
        description: "",
        tag: "Default"
    })

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
    }

    return (
        <div>
            <div className="container my-3">
                <h2>Add a Note</h2>
                <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" name="title" className="form-control" id="title" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" name="description" id="description" onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={onSubmit}>Add Note</button>
                </form>
            </div>
        </div>
    )
}
export default AddNewNote;
