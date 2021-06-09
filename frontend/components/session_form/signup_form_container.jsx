import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signup, login, resetSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = ({ errors }) => ({

  errors: errors.session,
  formType: 'signup',
})

const mDTP = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
  processDemo: (user) => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  resetSessionErrors: () => dispatch(resetSessionErrors())
})


export default connect(mSTP, mDTP)(SessionForm);