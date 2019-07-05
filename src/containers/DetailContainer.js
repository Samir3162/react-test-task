import { connect } from 'react-redux';

import Details from '../scenes/Details';
import { addNewOffice, getOfficeList, changeHeadquarter } from '../actions/companyAction';
import { getCompanyList } from '../actions/companyListAction'

const mapStateToProps = state => ({
  companyDetail: state.companyDetail.data || {},    
  officeListdata: state.companyDetail.officeListdata,
  isLoading: state.companyDetail.isLoading,
  companyListData: state.companyList.data || {}
});

const mapDispatchToProps = dispatch => ({
  addNewOffice: (companyId) => dispatch(addNewOffice(companyId)),
  getOfficeList: (companyId) => dispatch(getOfficeList(companyId)),
  changeHeadquarter: (companyId, officeId) => dispatch(changeHeadquarter(companyId, officeId)),
  getCompanyList: () => dispatch(getCompanyList()),  
});

const DetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);

export default DetailsContainer;
