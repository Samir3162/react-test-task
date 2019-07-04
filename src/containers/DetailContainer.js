import { connect } from 'react-redux';

import Details from '../scenes/Details';

const mapStateToProps = state => ({
  userData: state.signUp.data || [],
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
});

const DetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);

export default DetailsContainer;
