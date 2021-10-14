import React from 'react';
import Notes from './Notes';
import AddNewNote from './AddNewNote';
const Home = (props) => {
    return (
        <>
            <AddNewNote showAlert ={props.showAlert} />
            <Notes showAlert ={props.showAlert} />
        </>
    )
}

export default Home
