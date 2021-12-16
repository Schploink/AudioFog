import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import {resetSessionErrors} from '../../actions/session_actions'

function Modal({ modal, closeModal, resetSessionErrors }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'upload':
      component = 
        <div className="readme-info">
          <div>
            Howdy, thank you for checking out my app!
          </div>
          <div className="more-info">
            For the live App, I have disabled the sound upload and delete functions
            Please check the <a href="https://github.com/Schploink/AudioFog#readme">Readme</a> to see a recorded demonstration of these functions!
          </div>
        </div>
      break;
    default:
      return null;
  }

  function handleModal () {
    closeModal(),
    resetSessionErrors()
  }

  return (
    <div className="modal-background" onClick={handleModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}


const mSTP = state => {
  return {
    modal: state.ui.modal
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    resetSessionErrors: () => dispatch(resetSessionErrors())
  };
};

export default connect(mSTP, mDTP)(Modal)