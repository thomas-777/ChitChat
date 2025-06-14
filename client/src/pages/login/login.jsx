import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import "./Login.css";

export default function Login() {
    const [inputs, setInput] = useState({
        username: "",
        password: ""
    });
    const { login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(inputs);
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={inputs.username}
                        onChange={(e) => setInput({ ...inputs, username: e.target.value })}
                        className="login-input"
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={inputs.password}
                        onChange={(e) => setInput({ ...inputs, password: e.target.value })}
                        className="login-input"
                    />
                </div>
                <div className="input-group">
                    <button className="login-button">Login</button>
                </div>
                <div className="signup-link">
                    <Link to="/signup">Signup</Link>
                </div>
            </form>
        </div>
    );
}
