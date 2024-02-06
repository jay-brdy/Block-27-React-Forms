import { useState } from 'react'
import React from 'react'

export default function SignUpForm({setToken}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        
        if (username.length < 8) {
            setError("Username must be 8 characters or greater!");
            return;
        };

        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
                method: "POST",
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();
            console.log(result);

            setToken(result.token);
            setSuccessMessage(result.message);
            setSubmitted(true);
        } catch (error) {
            setError(error.message);
        }
    }


    return (
        <>
            <h2>Sign Up!</h2>
            {successMessage && <p>{successMessage}</p>}
            {submitted &&  username && <p>Your username is: {username}</p>}
            {error && <p>{error}</p>}

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