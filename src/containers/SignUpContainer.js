import { connect } from 'react-redux';

import SignUp from '../scenes/SignUp';
import signUp from '../actions/signUpAction';

const mapStateToProps = state => ({
  userData: state.signUp.data || [],
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  signUp: (companyDetail) => dispatch(signUp(companyDetail)),
});

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

export default SignUpContainer;
