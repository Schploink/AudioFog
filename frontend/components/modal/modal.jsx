import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
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