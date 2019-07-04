import { connect } from 'react-redux';

import Details from '../scenes/Details';
import { addNewOffice, getOfficeList, changeHeadquarter } from '../actions/companyAction';

const mapStateToProps = state => ({
  companyDetail: state.companyDetail.data || {},    
  OfficeListdata: state.companyDetail.OfficeListdata,
  isLoading: state.companyDetail.isLoading,
  companyListData: state.companyList.data || {}
});

const mapDispatchToProps = dispatch => ({
  addNewOffice: (companyId) => dispatch(addNewOffice(companyId)),
  getOfficeList: (companyId) => dispatch(getOfficeList(companyId)),
  changeHeadquarter: (companyId, officeId) => dispatch(changeHeadquarter(companyId, officeId))

});

const DetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);

export default DetailsContainer;
