// For clients --
// Displays name, time, date, duration, type, intensity, location
// Has reschedule button that renders RescheduleClass
// Has delete button

// For instructors --
// Displays name, time, date, duration, type, intensity, location, current registered attendees, max class size
// Has edit button that renders EditClass
// Has delete button
import React from 'react';

import RescheduleClass from './RescheduleClass';

// import axiosWithAuth from '../utils/axiosWithAuth';

const Class = (props) => {

    const { setIsModal, setModalInfo, clientItems, setClientItems } = props;

    const punchpassMatch = clientItems.punchpasses.filter(el => el.type === props.info.type)[0];

    const handleRescheduleClick = () => {
        setIsModal(true);
        setModalInfo({
            type: 'select',
            message: <RescheduleClass 
                setIsModal={setIsModal} 
                setModalInfo={setModalInfo} 
                classInfo={props.info} 
                clientItems={clientItems}
                setClientItems={setClientItems} />,
            function: null
        })
    }

    const handleDeleteClick = () => {
        setIsModal(true);
        setModalInfo({
            type: 'confirm',
            message: 'Are you sure you want to cancel this reservation? If you signed up for this class with a punchpass, a punch will added back to your punchpass.',
            function: handleDeleteSubmit
        })
    }

    const handleDeleteSubmit = () => {
        setIsModal(false);
        setClientItems({
            classes: [...clientItems.classes.filter(el => el.id !== props.info.id)],
            punchpasses: [...clientItems.punchpasses.map(el => {
                    if (el.id === punchpassMatch.id && el.punches_used > 0) {
                        return {
                            ...el, 
                            punches_used: el.punches_used - 1
                        };
                    } else if (el.id === punchpassMatch.id && el.punches_used === 0) {
                        return {
                            ...el, 
                            total_punches: el.total_punches + 1
                        };
                    } else {
                        return el;
                    }
                })
            ]
        })
        // axiosWithAuth()
        //     .delete(`/api/delete/client-class/${props.info.id}`)
        //     .then(res => {
        //         setIsModal(false);
        //         setClientItems({
        //             classes: [...clientItems.classes.filter(el => el.id !== props.info.id)],
        //             punchpasses: [...clientItems.punchpasses]
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    const { name, time, date, duration, type, intensity, location, current_attendees, class_size } = props.info;
    return (
        <tr className='table-data-row' id='class'>
            <td>{name}</td>
            <td>{time}</td>
            <td>{date}</td>
            <td>{duration}</td>
            <td>{type}</td>
            <td>{intensity}</td>
            <td>{location}</td>
            <td>{current_attendees}</td>
            <td>{class_size}</td>
            <td><button onClick={handleRescheduleClick}>Reschedule</button></td>
            <td><button onClick={handleDeleteClick}>Cancel Reservation</button></td>
        </tr>
    )
}

export default Class;