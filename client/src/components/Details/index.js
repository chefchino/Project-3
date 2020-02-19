import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./style.css";

const Details = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
    return (
        <div>
            <Button id="BtnDetail"color="success" onClick={toggle}>Details</Button>
            <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
                <ModalHeader>{props.title}</ModalHeader>
                <ModalBody>
                <div className="img-container" style={{ backgroundImage: `url(${props.image})`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `contain`, }}
            />
                    <h3>${props.price}</h3>
                    <h4>Rating: {props.rating}</h4>
                    <h4>Description</h4>
                    <p>{props.description}</p>
                </ModalBody>
                <ModalFooter>
                    
                    <Button className="btn btn-success"id="detailBtn"  onClick={toggle}>Close</Button>
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