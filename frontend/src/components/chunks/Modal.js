import React, { useEffect } from 'react';
import M from 'materialize-css';

const Modal = props => {

  useEffect(() => {
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems);
  }, [])

  return (
    <div>
      <div id={props.modalId} className="modal">
        <div className="modal-content">
          {props.children}
        </div>
        <div className="modal-footer">
          {props.footer}
        </div>
      </div>
    </div>
  );
}

export default Modal;