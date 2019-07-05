import React, { useState, useEffect } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Spinner
} from 'reactstrap';
import AddOffice from './addOfficeModal'
import OfficeList from './OfficeList'

const Detail = (props) => {
  const [details, setDetails] = useState({});
  const [isAddOffice, setIsAddOffice] = useState(false);
  useEffect(() => {
    console.log('inside detail', props.match.params.id);
    if (!(props.companyListData && props.companyListData.data && props.companyListData.data[0])) {
      props.getCompanyList()
    }
  }, [])
  useEffect(() => {
    console.log('success APIasdasdasdas', props.companyListData)

    if (props.companyListData && props.companyListData.data && props.companyListData.data[0]) {

      const { id } = props.match.params
      const companyDetails = props.companyListData.data.find((val) => val.id == id)
      console.log('success APIasdasdasdas', companyDetails)
      if (companyDetails && companyDetails.city) {
        const { city, company, monthly_rent_sum, monthly_rent, postal_code, street } = companyDetails;
        setDetails({
          city,
          company,
          monthlyRent: monthly_rent,
          monthlyRentSum: monthly_rent_sum,
          postalCode: postal_code,
          street
        })
      }
    }
  }, [props.companyDetail]);
  return (
    <div style={{ padding: 20 }}>
    <h1>Company Detail</h1>
      <Card>
        <CardBody>

    <Button style={{position: 'absolute', right: 100}} onClick={() => props.history.push('/')}>COMPANY LIST</Button>
          <CardTitle>Name: {details.company}</CardTitle>
          <CardText>Street: {details.street}</CardText>
          <CardText>Postal Code: {details.postalCode}</CardText>
          <CardText>City: {details.city}</CardText>
          <CardText>Monthly Rent: {details.monthlyRent}</CardText>
          <CardText>Monthly Rent Sum: {details.monthlyRentSum}</CardText>
          <Button onClick={() => setIsAddOffice(!isAddOffice)}>Add Office</Button>
          {isAddOffice &&
            <AddOffice getOfficeList={props.getOfficeList} setIsAddOffice={setIsAddOffice} isAddOffice={isAddOffice} addNewOffice={props.addNewOffice} />}
        </CardBody>
      </Card>
      <OfficeList changeHeadquarter={props.changeHeadquarter} isLoading={props.isLoading} getOfficeList={props.getOfficeList} officeListdata={props.officeListdata} />
    </div>
  );
};

export default Detail;