import React from 'react';
import Modal from '../chunks/Modal';

const CreateEntryModal = props => {
  return (
    <div>
      <div className="fixed-action-btn">
        <button
          data-target="editModal"
          className="btn-floating btn-large waves-effect waves-light modal-trigger red">
          <i className="large material-icons">mode_edit</i>
        </button>
      </div>
      <Modal modalId="editModal">
        <h4>Edit Movie</h4>
        <p>A bunch of text</p>
      </Modal>
    </div>
  );
}

export default CreateEntryModal;