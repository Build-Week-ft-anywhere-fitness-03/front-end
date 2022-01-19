// Option to signup as a client or an instructor
// Form that accepts name, username, password
// Posts new user to add user endpoint
// On success, pushes to Onboarding

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// import axiosWithAuth from './../utils/axiosWithAuth';

const initialValues = {
    name: '',
    email: '',
    username: '',
    password: '',
    password2: ''
}

const SignUp = (props) => {

    const [state, setState] = useState(initialValues)
    console.log(state);

    const history = useHistory();

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault(e)
        console.log("Submitted");

        // delete this and uncomment below when endpoint is setup
        history.push('/onboarding');
        props.setAuth({
            isAuth: true
        })

        // axiosWithAuth()
        //     .post('http://localhost:5000/api/signup', data)
        //     .then(res => {
        //     localStorage.setItem("token", res.data.payload);
        //     history.push('/onboarding');
        //     props.setAuth({
        //         isAuth: true
        //     })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    return (
        <div className='container'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                 <label>Name:
                    <input
                        type='text'
                        name='name'
                        value={state.name}
                        onChange={handleChange}
                    />
                </label>
                <label>Email:
                    <input
                        type='email'
                        name='email'
                        value={state.email}
                        onChange={handleChange}
                    />
                </label>
                <label>Username:
                    <input
                        type='text'
                        name='username'
                        value={state.username}
                        onChange={handleChange}
                    />
                </label>
                <label>Password: 
                    <input
                        type='password'
                        name='password'
                        value={state.password}
                        onChange={handleChange}
                    />
                </label>
                <label>Password: 
                    <input
                        type='password'
                        name='password2'
                        value={state.password2}
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUp;