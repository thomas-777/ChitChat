import { Link } from "react-router-dom";
import { useState } from 'react';
import useSignup from "../../hooks/useSignup";
import "./Signup.css";

export default function Signup() {
    const [inputs, setInput] = useState({
        fullname: "",
        username: "",
        password: "",
        confirmpassword: ""
    });

    const { loading, signup } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className="signup-container">
            <h1 className="signup-title">Signup</h1>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Enter fullname"
                        value={inputs.fullname}
                        onChange={(e) => setInput({ ...inputs, fullname: e.target.value })}
                        className="signup-input"
                    />
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={inputs.username}
                        onChange={(e) => setInput({ ...inputs, username: e.target.value })}
                        className="signup-input"
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={inputs.password}
                        onChange={(e) => setInput({ ...inputs, password: e.target.value })}
                        className="signup-input"
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Confirm password"
                        value={inputs.confirmpassword}
                        onChange={(e) => setInput({ ...inputs, confirmpassword: e.target.value })}
                        className="signup-input"
                    />
                </div>
                <div className="input-group">
                    <button className="signup-button" disabled={loading}>
                        {loading ? "Signing up..." : "Signup"}
                    </button>
                </div>
                <div className="login-link">
                    <Link to="/login">Already have an account?</Link>
                </div>
            </form>
        </div>
    );
}
