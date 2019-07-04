import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
import axios from 'axios'

const SignUp = (props) => {
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [postalAddress, setPostalAddress] = useState('');
  const [city, setCity] = useState('');
  const [monthlyRent, setMonthlyRent] = useState('');
  const onFormSubmit = (e) => {
    e.preventDefault();
    const companyDetail = {
      "name": name,
      "street": street,
      "postal_code": postalAddress,
      "city": city,
      "monthly_rent": monthlyRent
    }
    console.log('state', companyDetail)
    props.signUp(companyDetail)
  }
  useEffect(() => {
    if (props.userData.length) {
      console.log('user Detail', props.userDatas);
      props.history.push('/id/123');
    }

    // axios.get('http://192.168.1.168:8080/api/companies/detail/7')
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(myJson) {
    //   console.log(JSON.stringify(myJson));
    // });
  }, [props.userData]);

  if (props.isLoading) {
    return (
    <div style={{ display: 'flex' , justifyContent: 'center'}}>
    <Spinner style={{width: '3rem', height: '3rem' }} />
    </div>);
  }
  return (
    <Form style={{ padding: 100 }}>

      <FormGroup required>
        <Label for="examplePassword">Name</Label>
        <Input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="Type your company name here" />
      </FormGroup>
      <FormGroup required>
        <Label for="exampleEmail">Street</Label>
        <Input value={street} onChange={(e) => setStreet(e.target.value)} type="text" name="text" id="street" placeholder="Street Name" />
      </FormGroup>


      <FormGroup required>
        <Label for="examplePassword">Postal Code</Label>
        <Input value={postalAddress} onChange={(e) => setPostalAddress(e.target.value)} type="text" name="text" id="postalCode" placeholder="Postal Code" />
      </FormGroup>
      <FormGroup required>
        <Label for="examplePassword">City</Label>
        <Input value={city} onChange={(e) => setCity(e.target.value)} type="text" name="text" id="city" placeholder="City" />
      </FormGroup>
      <FormGroup required>
        <Label for="examplePassword">Monthly Rent</Label>
        <Input value={monthlyRent} onChange={(e) => setMonthlyRent(e.target.value)} type="text" name="text" id="monthlyRent" placeholder="Monthly rent" />
      </FormGroup>
      <Button onClick={onFormSubmit}>Submit</Button>
    </Form>
  );
}
export default SignUp