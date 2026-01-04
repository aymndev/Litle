
"use client";

import { useState } from "react";
import "./register.css";
import Link from "next/link";

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Account created successfully 🎉");
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h1 className="register-title">Create Account</h1>

                <div className="register-inputs">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button className="register-btn" onClick={handleRegister}>
                    Create Account
                </button>

                <p className="login-link">
                    Already have an account?{" "}
                    <Link href="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}
