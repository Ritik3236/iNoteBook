import React, { useContext } from 'react';
import NoteContext from '../context/notes/noteContext'

const Home = () => {
    const { notes, setNotes } = useContext(NoteContext);
    console.log(notes)
    return (
        <>
            <form className="container">
                <div className="mb-3">
                    <label htmlFor="eie" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="eie" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="eip" className="form-label">Password</label>
                    <input type="password" className="form-control" id="eip" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="my-3 container">
                <h2> Your Notes</h2>
                <p>
                    hi
                    {notes.map((e) => { return (' ' + e.title + ' ') })}

                </p>
            </div>
        </>
    )
}

export default Home
