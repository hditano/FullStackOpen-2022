import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import {LOGIN} from '../queries/login-query';

function Login({show, setToken}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [login, result] = useMutation(LOGIN);

    useEffect(() => {
        if (result.data) {
            const token = result.data.login.value;
            setToken(token)
            localStorage.setItem('user-token', token);
        }
    }, [result.data])

    if(!show) {
        return null;
    }

    const submit = (e) => {
        e.preventDefault();
        login({variables: {username, password}})
    }

  return (
    <>
    <h2>Login</h2>
    <label>Username</label>
    <form onSubmit={submit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type='text'/>
        <br></br>
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
        <br></br>
        <button>Sign in</button>
    </form>
    </>
  )
}

export default Login