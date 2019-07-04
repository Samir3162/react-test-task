import { connect } from 'react-redux';

import CompanyList from '../scenes/CompanyList';
import { getCompanyList } from '../actions/companyListAction';
const mapStateToProps = state => ({
    companyListData: state.companyList.data || {},
    isLoading: state.companyList.isLoading
});

const mapDispatchToProps = dispatch => ({
    getCompanyList: () => dispatch(getCompanyList()),  

});

const CompanyListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CompanyList);

export default CompanyListContainer;
