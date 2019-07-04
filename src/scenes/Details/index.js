import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Detail = (props) => {
  return (
    <div style={{padding: 20}}>
      <Card>
        <CardBody>
          <CardTitle>Name: Some</CardTitle>
          <CardSubtitle>Street: some Address</CardSubtitle>
          <CardText>Postal Code: 452001</CardText>
          <CardText>City: Indore</CardText>
          <Button>Add Office</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Detail;