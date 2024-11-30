import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function SignUpPage() {
    return (
        <div className="container">
            <div className="login-section">
                <h1 className="log">Create Account</h1>
                <div className="all">
                    <form>
                        <label htmlFor="username" className="title">Username</label>
                        <input type="text" className="user all" placeholder="Enter your username" />

                        <label htmlFor="country" className="title">Select your country:</label>
                        <select id="country" name="country">
                            <option value="india">India</option>
                            <option value="united-states">United States</option>
                            <option value="germany">Germany</option>
                            <option value="singapore">Singapore</option>
                            <option value="malaysia">Malaysia</option>
                            <option value="australia">Australia</option>
                            <option value="spain">Spain</option>
                        </select>

                        <label htmlFor="password" className="title">Password</label>
                        <input type="password" className="pswrd all" placeholder="Enter your password" />

                        <button type="submit">Sign up</button>
                    </form>
                </div>

                <div className="alternative-login">
                    <p>Or</p>
                    <p>Already have an account? <Link to="/">Login here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;

