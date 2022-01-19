// For clients --
// Displays type, punches used, punches available
// If viewed in SearchPunchpasses, has buy button and price
// Buy button renders BuyPunchpass modal

// For instructors --
// Displays type, punches, price, quantity
// Edit button that renders EditPunchpass
import React from 'react';

// import axiosWithAuth from './../utils/axiosWithAuth';

const Punchpass = (props) => {

    const { setIsModal, setModalInfo, clientItems, setClientItems } = props;
    const { type, punches_used, total_punches } = props.info;

    const handleDeleteClick = () => {
        setIsModal(true);
        setModalInfo({
            type: 'confirm',
            message: 'Are you sure you want to delete this punchpass? Any remaining punches will be lost.',
            function: handleDeleteSubmit
        })
    }

    const handleDeleteSubmit = () => {
        setIsModal(false);
        setClientItems({
            classes: [...clientItems.classes],
            punchpasses: [...clientItems.punchpasses.filter(el => el.id !== props.info.id)]
        })
        // axiosWithAuth()
        //     .delete(`/api/delete/client-punchpass/${props.info.id}`)
        //     .then(res => {
        //         setIsModal(false);
        //         setClientItems({
        //             classes: [...clientItems.classes],
        //             punchpasses: [...clientItems.punchpasses.filter(el => el.id !== props.info.id)]
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    return (
        <tr className='table-data-row' id='punchpass'>
            <td>{type}</td>
            <td>{punches_used}</td>
            <td>{total_punches}</td>
            <td>{total_punches - punches_used}</td>
            <td><button onClick={handleDeleteClick}>Remove pass</button></td>
        </tr>
    )
}

export default Punchpass;