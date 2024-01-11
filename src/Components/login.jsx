import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform your registration logic here
        // ...

        // After successful registration, navigate to another page
        navigate('/Topic');
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
                        <Typography variant="h2">LOGIN</Typography>
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

                            <Button className="btn" onClick={handleLogin}>
                                LOGIN
                            </Button>
                            <Typography variant="body2">
                                <Link to="/password/forgot">Forgot Password?</Link>
                            </Typography>
                            <Typography variant="body2">
                                Don't have an account?{' '}
                                <Button color="primary" onClick={() => navigate('/register')}>
                                    Sign Up
                                </Button>
                            </Typography>
                        </div>
                    </Box>
                </form>
            </div>
        </div>
    );
};

export default Login;