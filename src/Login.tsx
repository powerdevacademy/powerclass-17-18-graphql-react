import { useMutation, gql } from '@apollo/client';
import React, { useEffect, useState } from 'react';

const LOGIN = gql`
    mutation Login ($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
        }
    }
`;


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [ login, {error, data} ] = useMutation(LOGIN, { 
        variables: { username, password }
    });

    useEffect(() => {
        data && console.log('TOKEN', data.login?.token);
    }, [data]);

    const _onSubmit = async (e: React.FormEvent)=> {
        e.preventDefault();
        try{
            await login();
        } catch(e) {
            console.log('ERR LOGIN', e);
        }
    };

    return(
    <form className="form-signin" onSubmit={_onSubmit}>
        <h3>Log In</h3>

        <input type="text" 
                onChange={e => setUsername(e.target.value)}
                className="form-control" 
                placeholder="Email address" 
                required />
        <input type="password" 
                onChange={e => setPassword(e.target.value)}
                className="form-control" 
                placeholder="Password" 
                required />
        <input type="submit" 
                className="btn btn-primary" />

        <p className="mt-5 mb-3 text-muted">&copy; POWER DEV ACADEMY 2020</p>
    </form> 
);
};

export default Login;