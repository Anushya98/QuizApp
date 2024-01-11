import React, { useState, useEffect } from "react";
// import { Link, useHistory } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import "./styles/login.css";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const navigate = useNavigate();

    const handleSignUp = () => {
        // Perform your registration logic here
        // ...

        // After successful registration, navigate to another page
        navigate('/login');
    };

    return (
        <div className="login-container">
            <div className="form">
                <form className="login-box"
                // onSubmit={submitHandler}
                >
                    <Box
                        marginLeft="auto"
                        marginRight="auto"
                        width={300}
                        display="flex"
                        flexDirection={"column"}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography variant="h2">CREATE ACCOUNT </Typography>
                        <div className="user-box">
                            <TextField
                                label="Username"
                                type="name"
                                id="name_field"
                                className="input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                label="Email"
                                type="email"
                                id="email_field"
                                className="input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <TextField
                                label="Password"
                                type="password"
                                id="password_field"
                                className="input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <TextField
                                label=" Repeat Password"
                                type="password"
                                id="password_field"
                                className="input"
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                            />

                            <Button className="btn" onClick={handleSignUp}>
                                SIGN UP
                            </Button>
                            <Typography variant="body2">
                                Already have an account?{' '}
                                <Button color="primary" onClick={() => navigate('/login')}>
                                    Login
                                </Button>
                            </Typography>
                        </div>
                    </Box>
                </form>
            </div>
        </div>
    );
};

export default Register;