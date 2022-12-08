import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer () {
    return(
        <>
        <Container fluid id='footer-container'>
            <Row>
                <Col className='d-flex justify-content-between'>
                    <a href='/EmailForm'><img src="./email-icon.png" alt='Email icon that links to email form page' width={50} height={50}/></a>
                    <a href='https://www.linkedin.com/in/hunter-o-neal-7514a285' target="_blank" rel="noopener noreferrer"><img src='./linkedIn.png' alt='icon of linkedIn' width={50} height={50}/></a>
                    <a href='https://github.com/HellaHunter' target="_blank" rel="noopener noreferrer"><img src='./github-icon.png' alt='an icon of github' width={50} height={50}/></a>
                </Col>
            </Row>
        </Container>
        </>
    )
}