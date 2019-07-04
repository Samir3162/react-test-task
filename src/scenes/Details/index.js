import React, { useState, useEffect} from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Spinner } from 'reactstrap';
import AddOffice from './addOfficeModal'

const Detail = (props) => {
  const [details, setDetails] = useState({});
  const [isAddOffice, setIsAddOffice] = useState(false);
    useEffect(() => {
        console.log('inside detail', props.match.params.id);
        // props.getCompanyDetail(props.match.params.id);
    }, [])
    useEffect(() => {
      if(JSON.stringify(props.companyDetail) != '[]') {
        console.log('success API', props.companyDetail.data)
        const { city, company, monthly_rent, postal_code, street } = props.companyDetail.data;
        setDetails({
          city,
          company,
          monthlyRent: monthly_rent,
          postalCode: postal_code,
          street
        })
      }
  }, [props.companyDetail]);
  if (props.isLoading) {
    return (
    <div style={{ display: 'flex' , justifyContent: 'center'}}>
    <Spinner style={{width: '3rem', height: '3rem' }} />
    </div>);
  }
  return (
    <div style={{padding: 20}}>
      <Card>
        <CardBody>
          <CardTitle>Name: {details.company}</CardTitle>
          <CardSubtitle>Street: {details.street}</CardSubtitle>
          <CardText>Postal Code: {details.postalCode}</CardText>
          <CardText>City: {details.city}</CardText>
          <Button onClick={() => setIsAddOffice(!isAddOffice)}>Add Office</Button>
          {isAddOffice && 
            <AddOffice setIsAddOffice={setIsAddOffice} isAddOffice={isAddOffice} addNewOffice={props.addNewOffice} />}
        </CardBody>
      </Card>
    </div>
  );
};

export default Detail;