import React, { useState, useEffect} from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Spinner } from 'reactstrap';
import AddOffice from './addOfficeModal'
import OfficeList from './OfficeList'

const Detail = (props) => {
  const [details, setDetails] = useState({});
  const [isAddOffice, setIsAddOffice] = useState(false);
    useEffect(() => {
        console.log('inside detail', props.match.params.id);
    }, [])
    useEffect(() => {
      if(props.companyListData && props.companyListData.data) {

        const { id } = props.match.params
        const companyDetails = props.companyListData.data.find((val) => val.id == id)
        console.log('success APIasdasdasdas', companyDetails)

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
  }, [props.companyDetail]);
  return (
    <div style={{padding: 20}}>
      <Card>
        <CardBody>
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
      <OfficeList changeHeadquarter={props.changeHeadquarter} isLoading={props.isLoading} getOfficeList={props.getOfficeList} OfficeListdata={props.OfficeListdata} />
    </div>
  );
};

export default Detail;