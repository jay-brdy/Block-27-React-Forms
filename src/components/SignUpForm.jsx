import { useState } from 'react'
import React from 'react'

export default function SignUpForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("Hello! Thanks for submitting");
    }

    return (
        <>
            <h2>Sign Up!</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </label>

                <label>
                    Password:
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </label>

                <button>Submit</button>

            </form>

        </>
    );
}