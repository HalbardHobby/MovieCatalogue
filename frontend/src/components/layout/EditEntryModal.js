import React from 'react';
import Modal from '../chunks/Modal';

const EditEntryModal = props => {

  const footer = <span><a class="waves-effect modal-close waves-light btn red">Cancel</a>   
    <a class="waves-effect modal-close waves-light btn">Update</a></span>;

  return (
    <div>
      <div className="fixed-action-btn">
        <button
          data-target="editModal"
          className="btn-floating btn-large waves-effect waves-light modal-trigger red">
          <i className="large material-icons">mode_edit</i>
        </button>
      </div>
      <Modal modalId="editModal" footer={footer}>
        <h4>Edit Movie</h4>
        <div className="container row">
          <div className="input-field col s12">
            <input id="primary_title" type="text" class="validate" />
            <label for="primary_title">Title</label>
          </div>
          <div className="input-field col s6">
            <input id="year" type="number" class="validate" />
            <label for="year">Year</label>
          </div>
          <div className="input-field col s6">
            <input id="runtime_minutes" type="number" class="validate" />
            <label for="runtime_minutes">Runtime Minutes</label>
          </div>
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">Textarea</label>
          </div>
          <div class="file-field input-field col s12">
            <div class="btn">
              <span>File</span>
              <input type="file" />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default EditEntryModal;