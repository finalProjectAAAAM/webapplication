import React, { useState ,useEffect} from "react";
import { createGlobalStyle } from "styled-components";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import * as Components from "./components.jsx";
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HttpsIcon from '@mui/icons-material/Https';
import Cookies from 'js-cookie';
import {Link, useNavigate } from 'react-router-dom';
const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

    * {
        box-sizing: border-box;
    }

    body {
        background: #f6f5f7;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: "Montserrat", sans-serif;
        height: 100vh;
        margin: -20px 0 100px;
    }
`;

function Auth() {
    const [signIn, setSignIn] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate()
    const handleSignUp = () => {
        if (!name || !email || !password || !confirmPassword) {
            setError('All fields are required');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        axios.post('http://localhost:3001/auth/signup', { name, email, pwd })
            .then(response => {
                toast.success('Sign up successful'); 
                console.log(response.data);
            })
            .catch(error => {
                setError('Error signing up');
            });
    };

    const handleSignIn = () => {
        if (!email || !password) {
            setError('Email and password are required');
            return;
        }
        axios.post('http://localhost:3001/auth/login', { email, password })
            .then(response => {
                const { token } = response.data;
                console.log(token);
            })
            .catch(error => {
                setError('Invalid email or password');
            });
            authenticateUser(email, password)
            .then(response => {
                const { token } = response.data;
                Cookies.set('token', token, { expires: 1 });
                window.location.href = '/dashboard';
            })
            .catch(error => {
                setError('Invalid email or password');
            });
    };


    return (
        <>
            <GlobalStyle />
            <ToastContainer />
            <Components.Container>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        <div style={{ position: 'relative' }}>
                            <Components.Input type='text' placeholder='Name' style={{ paddingLeft: '40px' }} 
                            value={name}
                            onChange={(e)=> setName(e.target.value)}/>
                            <PersonIcon style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px' }} />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <Components.Input type='email' placeholder='Email' style={{ paddingLeft: '40px' }} onChange={(e) => setEmail(e.target.value)} />
                            <MailOutlineIcon style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px' }} />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <Components.Input type='password' placeholder='Password' style={{ paddingLeft: '40px' }} onChange={(e) => setPassword(e.target.value)} />
                            <HttpsIcon style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px' }} />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <Components.Input type='password' placeholder='Confirm Password' style={{ paddingLeft: '40px' }} onChange={(e) => setConfirmPassword(e.target.value)} />
                            <HttpsIcon style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px' }} />
                        </div>
                        {error && <Components.Error>{error}</Components.Error>}
                        <Components.Button onClick={handleSignUp}>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>
                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Sign in</Components.Title>
                        <div style={{ position: 'relative' }}>
                            <Components.Input type='email' placeholder='Email' style={{ paddingLeft: '40px' }} onChange={(e) => setEmail(e.target.value)} />
                            <MailOutlineIcon style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px' }} />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <Components.Input type='password' placeholder='Password' style={{ paddingLeft: '40px' }} onChange={(e) => setPassword(e.target.value)} />
                            <HttpsIcon style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px' }} />
                        </div>
                        {error && <Components.Error>{error}</Components.Error>}
                        <Components.Anchor as={Link} to="/password-reset">Forgot your password?</Components.Anchor>
                        <Components.Button onClick={handleSignIn}>Sign In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>
                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>
                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => {
                setSignIn(true);
                navigate('/dashboard'); 
            }}>
                Sign Up
            </Components.GhostButton>
                        </Components.LeftOverlayPanel>
                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter Your personal details and start journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => setSignIn(false)}>
                            Sign In
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </>
    );
}

export default Auth;
