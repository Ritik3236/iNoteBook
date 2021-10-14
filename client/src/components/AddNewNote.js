import React, { useContext, useState } from 'react';
import NoteContext from '../context/notes/noteContext';

const AddNewNote = () => {

    const { addNote } = useContext(NoteContext)
    const [note, setNote] = useState({
        title: '',
        description: "",
        tag: ''
    })

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (localStorage.getItem("authToken")) {
            addNote(note.title, note.description, note.tag);
            setNote({ title: '', description: '', tag: '' })
        }
        else { alert("invalid login Details") }

    }

    return (
        <div>
            <div className="container my-3">
                <h2>Add a Note</h2>
                <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input placeholder="Min 5 word" type="text" name="title" className="form-control" id="title" value={note.title} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input placeholder="Min 5 word" type="text" className="form-control" name="description" id="description" value={note.description} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" name="tag" id="tag" value={note.tag} onChange={onChange} />
                    </div>
                    <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={onSubmit}>Add Note</button>
                </form>
            </div>
        </div>
    )
}
export default AddNewNote;
