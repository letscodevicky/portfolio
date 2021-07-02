import React from 'react';
import ReactDOM from 'react-dom';
 import './Modal.css';

 const Modal = (props) => {
     return ReactDOM.createPortal(
         <div className =' modal-overlay'>
             <div className = 'moda;-container'>
                 <div className="upper-sectio">

                 </div>
                 <div className="middle-section">

                 </div>
                 <div className="lower-section">
                     
                 </div>
             </div>
         </div>,
         document.getElementById('modal')
     );
 };
 export default Modal;