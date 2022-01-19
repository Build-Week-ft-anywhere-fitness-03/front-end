// Displays list of punchpasses for sale
// Can search by type, instructor, price
// Buy button on individual Punchpass that renders BuyPunchpass component


// List of available classes
// Can search by class time, date, duration, type, intensity level, location
// Can click button on individual class to register
// Clicking button renders confirmation modal
import React, { useEffect } from 'react';
// import axiosWithAuth from '../utils/axiosWithAuth';

import SearchPunchpass from './SearchPunchpass';

const mockGetClientPunchpassSearch = [
    {
        id: 3,
        type: 'cardio', 
        total_punches: 10,
        price: 150
    },
    {
        id: 4,
        type: 'HIIT', 
        total_punches: 10,
        price: 200
    }
]

const SearchPunchpasses = (props) => {

    const { setIsModal, setModalInfo, clientPunchpassSearch, setClientPunchpassSearch, clientItems, setClientItems } = props;

    const getData = () => {
        console.log('Inside SearchPunchpasses getData');
        setClientPunchpassSearch(mockGetClientPunchpassSearch);
        // axiosWithAuth()
        //     .get('/api/search-punchpasses')
        //     .then(res => {
        //         setClientPunchpassSearch(res.data);
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
                    <th>Type</th>
                    <th>Total punches</th>
                    <th>Price</th>
                </tr>
                {clientPunchpassSearch.map(el => (
                    <SearchPunchpass 
                        key={el.id} 
                        info={el} 
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

export default SearchPunchpasses;