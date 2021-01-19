import React from 'react'
import {Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'

export const ShippingForm = props => {
  return (
    <div className="shipping-form">
      <Row>
        <Col sm="12" md={{size: 6, offset: 3}} className="text-center">
          <h2>Checkout</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm="12" md={{size: 10, offset: 0}}>
          <Form>
            <h2>Shipping Adress:</h2>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input name="email" placeholder="Ex: jsnow@email.com" />
            </FormGroup>
            <FormGroup>
              <Label for="fullName">Full Name</Label>
              <Input name="fullName" placeholder="Ex: John Snow" />
            </FormGroup>
            <FormGroup>
              <Label for="streetAddress">Street Adress</Label>
              <Input name="streetAddress" placeholder="Ex: 123 Snow Moutain" />
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <Input name="city" placeholder="Ex: Snow City" />
            </FormGroup>
            <FormGroup>
              <Label for="state">State/Province</Label>
              <Input name="state" placeholder="Ex: Snow State" />
            </FormGroup>
            <FormGroup>
              <Label for="zipcode">Zipcode</Label>
              <Input name="zipcode" placeholder="Ex: 12345" />
            </FormGroup>

            <div />
            <h2>Payment Method:</h2>
            <FormGroup>
              <Label for="cardNumber">Card Number</Label>
              <Input name="cardNumber" placeholder="1111 1111 1111 1111" />
            </FormGroup>
            <FormGroup>
              <Label for="expiration">Expiration Date</Label>
              <Input name="expiration" placeholder="MM/YY" />
            </FormGroup>
            <FormGroup>
              <Label for="securityCode">Security Code</Label>
              <Input name="securityCode" placeholder="CVC" />
            </FormGroup>
            <p>Billing address same as shipping</p>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
