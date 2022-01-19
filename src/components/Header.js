// Has logo and name of application
// Has nav bar that links to My Profile, Classes, and Punchpasses
// Has logout button that logs out a user (removes token and pushes to Login)
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Header = (props) => {

    const history = useHistory();

    const handleLogout = async () => {
        // delete this first setState and uncomment below when endpoint is setup
        props.setAuth({
          isAuth: false
        })
        history.push('/login');
        // await asyncChangeWindow();
    
        // axiosWithAuth()
        // .post('/api/logout')
        // .then(res => {
        //   localStorage.removeItem('token');
        //   history.push('/login');
        //   setState({
        //     isAuth: false
        //   })
        // })
        // .catch(err => {
        //   console.log(err);
        // })
      }

    //   const handleSearchPunchpassesClick = () => {
    //     history.push('/search-punchpasses');
    //   }



    return(
        <div className='container' id='header'>
            <h1>Anywhere Fitness</h1>
            <div className='nav'>
                {!props.isAuth ? <Link to='/signup'>Sign Up</Link> : <div></div>}
                {props.isAuth ? <Link to='/profile'>Profile</Link> : <div></div>}
                {props.isAuth ? <Link to='/search-classes'>Search Classes</Link>: <div></div>}
                {props.isAuth ? <Link to='/search-punchpasses'>Search Punchpasses</Link>: <div></div>}
                {props.isAuth ? <Link to='#' onClick={handleLogout}>Logout</Link> : <div></div>}
            </div>
        </div>
    )
}

export default Header;