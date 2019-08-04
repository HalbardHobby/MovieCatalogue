import React from 'react';
import Modal from '../chunks/Modal';

const LoginModal = props => {
  const footer = <span><a class="waves-effect modal-close waves-light btn red">Cancel</a>
    <a class="waves-effect modal-close waves-light btn">SignUp</a>
    <a class="waves-effect modal-close waves-light btn">SignIn</a></span>;
  return (
    <div>
      <Modal modalId="loginModal" footer={footer} >
      <h4>Sign Up & Sign In</h4>
      <div className="container row">
        <div className="input-field col s6">
          <input id="email" type="email" class="validate" />
          <label for="email">Email</label>
        </div>
        <div className="input-field col s6">
          <input id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      </Modal>
    </div>
  );
}

export default LoginModal;