import React, { useState } from 'react'
import { Typography, Button } from '@mui/material'
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = () => {

    }

    return (
        <div className='login'>
            <div className="loginContainer">
                <form action="" className="loginForm" onSubmit={submitHandler}>
                    <Typography variant="h4">
                        <p>A</p>
                        <p>D</p>
                        <p>M</p>
                        <p>I</p>
                        <p style={{ marginRight: "1vmax" }}>N</p>

                        <p>P</p>
                        <p>A</p>
                        <p>N</p>
                        <p>E</p>
                        <p>L</p>
                    </Typography>
                    <div>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type='submit' variant='contained'>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login