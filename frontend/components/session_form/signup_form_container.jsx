import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = (state, ownProps) => ({

  errors: state.errors,
  formType: 'signup',
})

const mDTP = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal())
})


export default connect(mSTP, mDTP)(SessionForm);