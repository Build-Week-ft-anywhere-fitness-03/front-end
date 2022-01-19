// For clients -- 
// Shows classes with ability to reschedule and delete individual classes. Reschedule button renders RescheduleClass modal
// Button to redirect to search classes page
// Shows punchpasses 
// Button to redirect to search punchpasses page

// For instructors --
// Shows classes with ability to edit and delete individual classes. Edit renders EditClass modal
// Button to create class, which renders CreateClass modal
// Shows punchpasses with ability to edit and delete. Edit renders EditPunchpass modal
// Button to create punchpass, which renders CreatePunchpass modal

import React, { useEffect } from 'react';
// import axiosWithAuth from './../utils/axiosWithAuth';

import ClassList from './ClassList';
import PunchpassList from './PunchpassList';

const Profile = (props) => {

    const { setIsModal, setModalInfo, clientItems, setClientItems } = props;
    
    const getData = () => {
        console.log("Inside Profile getData");
        setClientItems(clientItems)
        // axiosWithAuth()
        //     .get('/api/client-items')
        //     .then(res => {
        //         setClientItems(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    useEffect(() => {
        getData();
    }, [clientItems]); // eslint-disable-line

    return ( 
        <div className='container'>

            <h2>Profile page</h2>

            <h3>Your Classes</h3>
            <div id='class-list-container'>
                <ClassList 
                    classes={clientItems.classes} 
                    setIsModal={setIsModal}
                    setModalInfo={setModalInfo}
                    clientItems={clientItems}
                    setClientItems={setClientItems}
                />
            </div>
            
            <h3>Your Punchpasses</h3>
            <div id='punchpass-list-container'>
                <PunchpassList 
                    punchpasses={clientItems.punchpasses} 
                    setIsModal={setIsModal} 
                    setModalInfo={setModalInfo}
                    clientItems={clientItems}
                    setClientItems={setClientItems}
                />
            </div>

        </div>
    )
}

export default Profile;