import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Profile from './components/Profile';
import SignUp from './components/Signup';
import Onboarding from './components/Onboarding';
import SearchClasses from './components/SearchClasses';
import SearchPunchpasses from './components/SearchPunchpasses';
import Modal from './components/Modal';

// import axiosWithAuth from './utils/axiosWithAuth';

import './App.css';

const initialAuthValue = {
  isAuth: false
}

const initialClientItems = {
  classes: [
      {
          id: 1,
          name: 'Sweat', 
          time: '1pm', 
          date: 'June 24',
          duration: '1 hour', 
          type: 'HIIT', 
          intensity: 3, 
          location: '114 Thompson St', 
          current_attendees: 13, 
          class_size: 25
      },
      {
          id: 2,
          name: 'Run run', 
          time: '3pm', 
          date: 'June 30',
          duration: '30 mins', 
          type: 'cardio', 
          intensity: 2, 
          location: '452 Broad St', 
          current_attendees: 22, 
          class_size: 25
      }
  ],
  punchpasses: [
      {
          id: 1,
          type: 'boxing', 
          punches_used: 5,
          total_punches: 10
      },
      {
          id: 2,
          type: 'HIIT', 
          punches_used: 7,
          total_punches: 15
      }
  ]
};

const initialModalInfo = {
  type: '',
  message: '',
  function: ''
}

const App = () => {

  const [isAuth, setIsAuth] = useState(initialAuthValue);
  const [isModal, setIsModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(initialModalInfo)
  const [clientItems, setClientItems] = useState(initialClientItems);
  const [clientClassSearch, setClientClassSearch] = useState([]);
  const [clientPunchpassSearch, setClientPunchpassSearch] = useState([]);

  return (
      <div className="App"> 
        <Header isAuth={isAuth.isAuth} setAuth={setIsAuth} />

        { 
          isModal ? 
          <Modal
              setIsModal={setIsModal}
              modalInfo={modalInfo} 
          /> 
          : null
        }
      
          <PrivateRoute
            isAuth={isAuth.isAuth}
            setIsModal={setIsModal}
            setModalInfo={setModalInfo}
            clientItems={clientItems} 
            setClientItems={setClientItems}
            exact path='/profile'
            component={Profile}
          />

          <Route path='/signup'>
            <SignUp setAuth={setIsAuth} />
          </Route>

          <Route path='/onboarding' component={Onboarding} />

          <Route path='/search-classes'>
            <SearchClasses 
              setIsModal={setIsModal}
              setModalInfo={setModalInfo}
              clientClassSearch={clientClassSearch}
              setClientClassSearch={setClientClassSearch}
              clientItems={clientItems}
              setClientItems={setClientItems}
            />
          </Route>

          <Route path='/search-punchpasses'>
            <SearchPunchpasses 
              setIsModal={setIsModal}
              setModalInfo={setModalInfo}
              clientPunchpassSearch={clientPunchpassSearch}
              setClientPunchpassSearch={setClientPunchpassSearch}
              clientItems={clientItems}
              setClientItems={setClientItems}
            />
          </Route>

          <Route path='/login'>
            {isAuth.isAuth ? <Redirect to='/profile' /> : <Login setAuth={setIsAuth} />}
          </Route>

          <Route exact path='/'>
            {isAuth.isAuth ? <Redirect to='/profile' /> : <Login setAuth={setIsAuth} />}
          </Route>
        
      </div>
  );
}

export default App;
