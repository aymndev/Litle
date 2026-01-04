"use client";
import { useState } from "react";
import "./page.css"
import Link from "next/link";



export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        alert(`Username: ${username}\nPassword: ${password}`);
    };
    const forgetPass = () => {
        alert(`we have a problem right now trying next time Mr ${username}`);

    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Welcome Back</h1>

                <div className="login-inputs">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter your username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className="login-btn" onClick={handleLogin}>
                    Log In
                </button>

                <div className="login-links">
                    <a href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            forgetPass();

                        }}>Forgot password?</a>
                    <Link href="/register">Create new account</Link>
                </div>
            </div>
        </div>
    );
}