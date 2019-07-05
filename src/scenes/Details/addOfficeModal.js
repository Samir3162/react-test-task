
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, } from 'reactstrap';
import { withRouter } from "react-router";

const ModalExample = (props) => {

    const [street, setStreet] = useState('');
    const [postalAddress, setPostalAddress] = useState('');
    const [city, setCity] = useState('');
    const [monthlyRent, setMonthlyRent] = useState('');
    const closeBtn = <button className="close" onClick={() => setIsAddOffice(!isAddOffice)}>&times;</button>;
    const { setIsAddOffice, isAddOffice } = props;
    
    const onFormSubmit = (e) => {

    if(street && postalAddress && city && monthlyRent && props.match.params.id) {
        e.preventDefault();
        const companyDetail = {
          "street": street,
          "postal_code": postalAddress,
          "city": city,
          "monthly_rent": monthlyRent,
          "company": props.match.params.id
        }
        props.addNewOffice(companyDetail).then(({action}) => {
            setIsAddOffice(false);
            props.getOfficeList(props.match.params.id)
        })
    } else {
        alert('Enter valid detail')
    }
      }
    return (
        <div>
            <Modal isOpen={isAddOffice} toggle={() => setIsAddOffice(!isAddOffice)}>
                <ModalHeader toggle={() => setIsAddOffice(!isAddOffice)} close={closeBtn}>Add Office</ModalHeader>

                <ModalBody>
                <Form style={{ padding: 10 }}>
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
                        <Input value={monthlyRent} onChange={(e) => setMonthlyRent(e.target.value)} type="number" name="number" id="monthlyRent" placeholder="Monthly rent" />
                    </FormGroup>
                    <Button onClick={onFormSubmit}>Submit</Button>
                </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default withRouter(ModalExample);