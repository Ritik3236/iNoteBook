import NoteContext from './noteContext';
import { useState } from 'react'

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE2MDJjYTkzMzQzMmUxNTBlYjE0Yjg0In0sImlhdCI6MTYzMzY5Mjg2Mn0.quWsLMG8zcdWNFLPePuHMt2cQ_OLSieyCWf0PoVxXXA';

    const [notes, setNotes] = useState([]);

    // * * * Fetching all notes
    const fetchAllNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: { 'auth-token': authToken, }
        })
        const noteData = await response.json()
        setNotes(noteData.allNotes)

    }

    // * * * Add a Note
    const addNote = async (title, description, tag) => {

        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken,
            },
            body: JSON.stringify({ title, description, tag })
        });
        console.log(response)

        const note = {
            // TODO : API CALL
            "_id": "616055bfcf12ab0ead0aa2a3b",
            "user_id": "61602ca933432e150eb14b84",
            "title": title,
            "description": description,
            "tag": tag,
            "date": Date.now(),
        }
        setNotes(notes.concat(note))
    }

    // * * * Edit a Note
    const editNote = async (id, title, description, tag) => {

        // Edit : 'Api Call'
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken,
            },
            body: JSON.stringify({ title, description, tag })
        });

        console.log(response)
    }



    // * * * Delete a Note [Done]
    const deleteNote = async (id) => {

        // Delete : 'API CALL'
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: { 'auth-token': authToken, }
        })
        console.log(response)

        const newNote = notes.filter((notes) => { return notes._id !== id })
        setNotes(newNote)
    }

    // * * * returning props
    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, fetchAllNotes }} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;