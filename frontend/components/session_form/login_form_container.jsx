import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
// import LoginForm from './login_form';


const mSTP = ({errors}) => ({

    errors: errors.session,
    formType: 'login',
})

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
    processDemo: (user) => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
            Signup
        </button>
    ),
    closeModal: () => dispatch(closeModal())
})


// export default connect(mSTP, mDTP)(LoginForm);
export default connect(mSTP, mDTP)(SessionForm);