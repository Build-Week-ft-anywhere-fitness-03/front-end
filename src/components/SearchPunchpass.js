// For clients --
// Displays type, punches used, punches available
// If viewed in SearchPunchpasses, has buy button and price
// Buy button renders BuyPunchpass modal

// For instructors --
// Displays type, punches, price, quantity
// Edit button that renders EditPunchpass
import React from 'react';

// import axiosWithAuth from './../utils/axiosWithAuth';

const SearchPunchpass = (props) => {

    const { setIsModal, info, clientItems, setClientItems, setModalInfo} = props;
    const { type, total_punches, price } = props.info;

    const handleAddClick = () => {
        if (clientItems.punchpasses.some(el => el.type === info.type)) {
            setIsModal(true);
            setModalInfo({
                type: 'confirm',
                message: 'You already have a punchpass of the same type. Are you sure you want to buy this punchpass?', 
                function: handleAddSubmitConfirm
            });
        } else {
            setIsModal(true);
            setModalInfo({
                type: 'confirm',
                message: `Please confirm to finalize this purchase. Your card will be charged $${price}.00`, 
                function: handleAddSubmit
            });
        }
    }

    const handleAddSubmitConfirm = () => {
        setIsModal(true);
        setModalInfo({
            type: 'confirm',
            message: `Please confirm to finalize this purchase. Your card will be charged $${price}.00`, 
            function: handleAddSubmit
        });
    }

    const handleAddSubmit = () => {
        console.log("Inside handleAddSubmit in SearchPunchpass");
            setIsModal(false);
            setClientItems({
                classes: [...clientItems.classes],
                punchpasses: [...clientItems.punchpasses, {
                    id: info.id,
                    type: type,
                    punches_used: 0,
                    total_punches: total_punches
                }]
            });
        // axiosWithAuth()
        //     .post('/api/buy-punchpass', info)
        //     .then(res => {
        //         //set class state in my classes to reflect backend change
        //         setClientItems({
        //             classes: [...clientItems.classes],
        //             punchpasses: [...clientItems.punchpasses, {
        //                 id: info.id,
        //                 type: type,
        //                 punches_used: 0,
        //                 total_punches: price
        //             }]
        //         });
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }

    return (
        <tr className='table-data-row' id='punchpass'>
            <td>{type}</td>
            <td>{total_punches}</td>
            <td>{price}</td>
            <td><button onClick={handleAddClick}>Buy</button></td>
        </tr>
    )
}

export default SearchPunchpass;