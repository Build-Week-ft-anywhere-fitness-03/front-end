import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component:Component, ...rest}) => {
    return <Route {...rest} render={(props) => {
        if (rest.isAuth) {
            return(
                <Component 
                    {...props}
                    {...rest}
                />)
        } else {
            return <Redirect to='/login' />
        }
    }} />
}

export default PrivateRoute;