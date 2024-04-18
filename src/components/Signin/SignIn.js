import React, {useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {Box, Button, Container, TextField, Typography} from "@mui/material";

import './index.css'

export const SignIn = ({setIsLoggedIn}) => {
    const hardcodedCredentials = {
        username: 'admin',
        password: 'admin'
    };
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        let errorMessage = null
        if (!username || !password) {
            errorMessage = "Please enter both username and password.";
        }
        if (username !== hardcodedCredentials.username) {
            errorMessage = "Incorrect username.";
        }

        if (password !== hardcodedCredentials.password) {
            errorMessage = "Incorrect password.";
        }
        if (errorMessage) {
            toast.error(errorMessage);
            e.preventDefault();
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    };

    return (
        <Container className="container" sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '100px'
        }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5" className="title">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <Link to='/users'>
                        <Button
                            onClick={handleSubmit}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Container>
    );
};


export default SignIn;