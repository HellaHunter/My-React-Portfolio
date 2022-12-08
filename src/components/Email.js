import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

export default function Email() {
  return (
    <Container id='email-container'>
        <Row>
            <Col className='d-flex justify-content-center'>
                <h1 className='display-5'>Email Me!</h1>
            </Col>
        </Row>

        <br/>

        <Row>
            <Col className='d-flex justify-content-center'>
                <p>Feel free to email me with questions regarding my current projects, employment, or anything else. Just enter your email and a message, then click submit. Thanks!</p>
            </Col>
        </Row>

        <br/>
        
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                Please enter a valid email, thank you!
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
  );
}