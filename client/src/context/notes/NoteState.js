import NoteContext from './noteContext';
import { useState } from 'react'

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6160384dbbba80367b2f24ba",
            "user_id": "61602ca933432e150eb14b84",
            "title": "Welcome",
            "description": "My First Note",
            "tag": "Normal",
            "date": "2021-10-08T12:23:41.227Z",
            "__v": 0
        },
        {
            "_id": "616055bfcf12ab0eadaa2a3b",
            "user_id": "61602ca933432e150eb14b84",
            "title": "Welcome Back",
            "description": "My Second Note",
            "tag": "Normal",
            "date": "2021-10-08T14:29:19.406Z",
            "__v": 0
        },
        {
            "_id": "6160384dbbba80367b2f24ba",
            "user_id": "61602ca933432e150eb14b84",
            "title": "Welcome",
            "description": "My First Note",
            "tag": "Normal",
            "date": "2021-10-08T12:23:41.227Z",
            "__v": 0
        },
        {
            "_id": "616055bfcf12ab0eadaa2a3b",
            "user_id": "61602ca933432e150eb14b84",
            "title": "Welcome Back",
            "description": "My Second Note",
            "tag": "Normal",
            "date": "2021-10-08T14:29:19.406Z",
            "__v": 0
        },
        {
            "_id": "6160384dbbba80367b2f24ba",
            "user_id": "61602ca933432e150eb14b84",
            "title": "Welcome",
            "description": "My First Note",
            "tag": "Normal",
            "date": "2021-10-08T12:23:41.227Z",
            "__v": 0
        },
        {
            "_id": "616055bfcf12ab0eadaa2a3b",
            "user_id": "61602ca933432e150eb14b84",
            "title": "Welcome Back",
            "description": "My Second Note",
            "tag": "Normal",
            "date": "2021-10-08T14:29:19.406Z",
            "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{ notes, setNotes }} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;