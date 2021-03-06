import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    let location = useLocation();
    const handleLogout = () => {
        localStorage.removeItem("authToken")
        console.log(localStorage.getItem("authToken"));
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>

                    </ul>
                    <form className="d-flex">
                        {!localStorage.getItem("authToken") && <div>
                            <Link className="btn btn-primary mx-2" to='/login' type="submit">Login</Link>
                            <Link className="btn btn-primary mx-2" to='/signup' type="submit">Sign Up</Link></div>}
                        {localStorage.getItem("authToken") && <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar