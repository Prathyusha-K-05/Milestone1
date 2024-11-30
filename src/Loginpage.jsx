import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function LoginPage() {
    return (
        <div className="container">
            <div className="login-section">
                <h1 className="log">Log In</h1>
                <div className="all">
                    <form>
                        <label htmlFor="username" className="title">Username</label>
                        <input type="text" className="user all" placeholder="Enter your username" />

                        <label htmlFor="password" className="title">Password</label>
                        <input type="password" className="pswrd all" placeholder="Enter your password" />
                        <Link to="/Home"><button type="submit">Login</button></Link>
                        
                    </form>
                </div>

                <div className="alternative-login">
                    <p>Or</p>
                    <button className="google-login">
                        <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="Google Icon" className="img2" />
                        Continue With Google
                    </button>
                    <p>New user? <Link to="/signup">Sign up here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
