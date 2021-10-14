import React from 'react';
import { useHistory } from "react-router-dom";


const Login = () => {

    const History = useHistory();
    const host = "http://localhost:5000";
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Fetch : 'API CALL'
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": e.target[0].value,
                "password": e.target[1].value
            })
        })
        const loginData = await response.json();
        if (loginData.success) {
            localStorage.setItem('authToken', loginData.authToken);
            History.push('/home')
        }
        else { alert("Login failed") }
    }

    return (
        <>
            <div className="container mt-4">
                <form onSubmit={handleSubmit}>
                    <h1>Login Form</h1>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login
