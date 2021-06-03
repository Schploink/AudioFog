import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = (state, ownProps) => ({

    errors: state.errors,
    formType: 'login',
})

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user))
})


export default connect(mSTP, mDTP)(SessionForm);