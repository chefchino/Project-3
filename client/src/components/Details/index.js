import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Details = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
    return (
        <div>
            <Button color="success" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
                <ModalHeader>Modal title</ModalHeader>
                <ModalBody>
                    <h1>{props.title}</h1>
                    <h3>{props.price}</h3>
                    <h4 className="ratings">{props.rating}</h4>
                    <h4>Description</h4>
                    <p>{props.description}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Details;



// import React from "react";
// import "./style.css";

// function Details(props) {
//     return (
//         <div className="card">
//             <div className="img-container">
//                 <img src={props.image} alt="img" />
//             </div>
//             <div className="content">
                // <h1>{props.title}</h1>
                // <h3>{props.price}</h3>
                // <h4 className="ratings">{props.rating}</h4>
                // <h4>Description</h4>
                // <p>{props.description}</p>

//             </div>
//         </div>

//     );
// }

// export default Details;