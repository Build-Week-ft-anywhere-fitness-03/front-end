import React from 'react';

import './../styles/Modal.css';

const Modal = (props) => {

    const { modalInfo, setIsModal } = props;

    const handleModalCancel = (e) => {
        setIsModal(false);
        // e.stopPropagation();
    };

    if (modalInfo.type === 'success') {
        return (
            <div className='modal-container'>
                <div className='modal' >
                    <div>{modalInfo.message ? modalInfo.message : 'Success'}</div>
                    <button onClick={handleModalCancel}>Ok</button>
                </div>
            </div>
        ) 
    } else if (modalInfo.type === 'confirm') {
        return (
            <div className='modal-container'>
                <div className='modal'>
                    <div>{modalInfo.message ? modalInfo.message : 'Are you sure?'}</div>
                    <button onClick={handleModalCancel}>Nevermind</button>
                    <button onClick={modalInfo.function}>Confirm</button>
                </div>
            </div>
        ) 
    } else if (modalInfo.type === 'select') {
        return (
            <div className='modal-container'>
                <div className='modal'>
                    <div>{modalInfo.message ? modalInfo.message : 'There was an error'}</div>
                    <button onClick={handleModalCancel}>Cancel</button>
                </div>
            </div>
        ) 
    } else {
        return (
            <div className='modal-container'>
                <div className='modal'>
                    <div>There was an error</div>
                    <button onClick={handleModalCancel}>Ok</button>
                </div>
            </div>
        )
    }





    // if (typeModal === 'cancelClass') {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <div>Are you sure you want to cancel this class? This can't be undone.</div>
    //                 <button onClick={handleModalCancel}>Nevermind</button>
    //                 <button onClick={handleClassCancel}>Confirm</button>
    //             </div>
    //         </div>
    //     )
    // } else if (typeModal === 'rescheduleClass') {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <div>Please select a class from the options below.</div>
    //                 <button onClick={handleModalCancel}>Nevermind</button>
    //                 <button onClick={handleClassReschedule}>Confirm</button>
    //             </div>
    //         </div>
    //     )
    // } else if (typeModal === 'cancelPunchpass') {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <div>Are you sure you want to remove this punchpass? This can't be undone and you will lose any remaining punches on this pass.</div>
    //                 <button onClick={handleModalCancel}>Nevermind</button>
    //                 <button onClick={handlePunchpassCancel}>Confirm</button>
    //             </div>
    //         </div>
    //     )
    // } else if (typeModal === 'success') {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <div>Success</div>
    //                 <button onClick={handleModalCancel}>Ok</button>
    //             </div>
    //         </div>
    //     )
    // } else if (typeModal === 'signUpClass') {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <div>You've successfully signed up for this class. You can reschedule or remove this class in your profile.</div>
    //                 <button onClick={handleModalCancel}>Ok</button>
    //             </div>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <div>There was an error</div>
    //                 <button onClick={handleModalCancel}>Ok</button>
    //             </div>
    //         </div>
    //     )
    // }
    
    
    
}

export default Modal;