import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const Signup = (props) => {
    const { showAlert } = props
    const History = useHistory();
    const host = "http://localhost:5000";
    const [credentials, setCredentials] = useState({ name: '', email: '', password: '', c_password: '' })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials
        // Fetch : 'API CALL'
        const response = await fetch(`${host}/api/auth/signup`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        })
        const signupData = await response.json();
        if (signupData.success) {
            localStorage.setItem('authToken', signupData.authToken);
            History.push('/home')
        }
        else {
            // alert(`Signup failed > ${signupData.message[0].msg}`);
            showAlert('danger', `${signupData.message[0].msg ? signupData.message[0].msg : signupData.message}`)
        }
        // console.log(signupData.message);
    }

    const onChange = (e) => {
        e.preventDefault();
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container mt-4">
                <form onSubmit={handleSubmit}>
                    <h1>Signup Form</h1>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="name" className="form-control" name="name" id="name" aria-describedby="name" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" onChange={onChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" placeholder="Password" className="form-control" name="password" id="password" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" className="form-control" name="c_password" id="c_password" onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Signup

