import React, { useEffect } from 'react';
import M from 'materialize-css';

const Modal = props => {
  
  useEffect(() => {
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems);
  }, [])
  
  return(
    <div>
      <div className="fixed-action-btn">
        <button
          data-target="editModal"
          className="btn-floating btn-large waves-effect waves-light modal-trigger red">
          <i className="large material-icons">mode_edit</i>
        </button>
      </div>
      <div id="editModal" className="modal">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    </div>
  );
}

export default Modal;