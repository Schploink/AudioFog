import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = ({ errors }) => ({

  errors: errors.session,
  formType: 'signup',
})

const mDTP = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
  processDemo: (user) => dispatch(login(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal())
})


export default connect(mSTP, mDTP)(SessionForm);