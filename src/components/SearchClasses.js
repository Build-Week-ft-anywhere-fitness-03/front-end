// List of available classes
// Can search by class time, date, duration, type, intensity level, location
// Can click button on individual class to register
// Clicking button renders confirmation modal
import React, { useEffect } from 'react';
// import axiosWithAuth from '../utils/axiosWithAuth';

import SearchClass from './SearchClass';

const mockGetClientClassSearch = [
    {
        id: 3,
        name: 'Run extra fast',
        time: '2pm',
        date: 'June 25',
        duration: '1 hr',
        type: 'cardio',
        intensity: 'hard',
        location: 'baseball stadium',
        current_attendees: 5,
        class_size: 25
    },
    {
        id: 4,
        name: 'Lift fast',
        time: '4pm',
        date: 'June 28',
        duration: '2 hrs',
        type: 'HIIT',
        intensity: 'medium',
        location: 'football stadium',
        current_attendees: 14,
        class_size: 20
    }
]

const SearchClasses = (props) => {

    const { setIsModal, setModalInfo, clientClassSearch, setClientClassSearch, clientItems, setClientItems } = props;

    const getData = () => {
        console.log('Inside SearchClasses getData');
        // filtering out full classes
        const nonFullClasses = mockGetClientClassSearch.filter(el => el.current_attendees < el.class_size);
        console.log('nonFullClasses: ', nonFullClasses);
        //filtering out remaining classes for which the client is currently signed up
        const filteredClasses = nonFullClasses.filter(el => !clientItems.classes.map(el => el.id).includes(el.id));
        const noResults = () => {
            setIsModal(true);
            setModalInfo({
                type: 'success',
                message: 'There are no other classes available.',
                function: null
            })
        }
        filteredClasses.length > 0 ? setClientClassSearch(filteredClasses) : noResults();

        // axiosWithAuth()
        //     .get('/api/search-classes')
        //     .then(res => {
        //         setClientClassSearch(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    useEffect(() => {
        getData();
    }, []); // eslint-disable-line

    return (
        <div className='container'>
            <table>
                <tbody>
                <tr className='table-header-row'>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th>Duration</th>
                    <th>Type</th>
                    <th>Intensity</th>
                    <th>Location</th>
                    <th>Current Attendees</th>
                    <th>Max Attendees</th>
                </tr>
                {clientClassSearch.map(el => (
                    <SearchClass 
                        key={el.id} 
                        info={el} 
                        setClientClassSearch={setClientClassSearch} 
                        setIsModal={setIsModal} 
                        setModalInfo={setModalInfo}
                        clientItems={clientItems}
                        setClientItems={setClientItems}
                    />
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default SearchClasses;