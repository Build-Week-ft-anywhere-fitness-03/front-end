// Shows a user how to use the application
// Renders conditional info depending on if the user is a client or instructor
import React from 'react';
import { useHistory } from 'react-router-dom';

const Onboarding = (props) => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/profile');
    }

    return (
        <div className='container'>
            <h2>Welcome, {props.name}! Here's how to use this app.</h2>
            <p>First....</p>
            <button onClick={handleClick}>Done</button>
        </div>
    )
};

export default Onboarding;