import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const About = () => {
    const a = useContext(noteContext)
    const {notes} = a
    return (
        <div>
            <h1>in about</h1>
            {console.log(notes)}
            <h2>{}</h2>
        </div>
    )
}

export default About
