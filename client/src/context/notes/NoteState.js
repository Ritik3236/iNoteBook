import NoteContext from './noteContext';
import { useState } from 'react'

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE2MDJjYTkzMzQzMmUxNTBlYjE0Yjg0In0sImlhdCI6MTYzMzY5Mjg2Mn0.quWsLMG8zcdWNFLPePuHMt2cQ_OLSieyCWf0PoVxXXA';
    const [notes, setNotes] = useState([]);

    // * * * Fetching all notes [Done]
    const fetchAllNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: { 'auth-token': authToken, }
        })
        const noteData = await response.json()
        setNotes(noteData.allNotes)
    }

    // * * * Add a Note [Done]
    const addNote = async (title, description, tag) => {
        if (tag ==='') {tag = 'default'};
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken,
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json()
        console.log(note)
        setNotes(notes.concat(note.newNote))
    }

    // * * * Edit a Note
    const editNote = async (note) => {

         // Update : 'API CALL'
        let { _id, description, tag, title, } = note;
        if (tag ==='') {tag = 'default'};
        const response = await fetch(`${host}/api/notes/updatenote/${_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken,
            },
            body: JSON.stringify({ title, description, tag })
        }
        );
        let newNote = JSON.parse(JSON.stringify(notes));
        // logic to edit Note on Client Side
        for (let index = 0; index < newNote.length; index++) {
            const ele = newNote[index];
            if (ele._id === note._id) {
                newNote[index].title = title;
                newNote[index].description = description;
                newNote[index].tag = tag;
                break;
            }
        }

        setNotes(newNote)
        console.log(await response.json())
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