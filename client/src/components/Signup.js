import React ,{useRef} from 'react'

const Signup = () => {

    const handleSubmit =() => {
        
    }

    return (
        <>
            <div className="container mt-4">
                <form onSubmit={handleSubmit}>
                    <h1>Login Form</h1>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="name" className="form-control" name="name" id="name" aria-describedby="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" placeholder="Password" className="form-control" name="password" id="password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" className="form-control" name="confirm_password" id="confirm_password" />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Signup

