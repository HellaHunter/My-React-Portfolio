import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutMe () {
    return(
        <>
        <Container fluid id='aboutMe-container'>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <h1 className='display-4'>About Hunter O'Neal</h1>
                </Col>
            </Row>

            <br/>

            <Row>
                <Col sm={12} xs={12} md={12} lg={4} xl={4} className='d-flex justify-content-center'>
                    <img src="./resize-portfolio-img.jpg" alt='A headshot of Hunter ONeal' id='it-me'/>
                </Col>
                <Col sm={12} xs={12} md={12} lg={8} xl={8} id='aboutMe-text'>
                    <p>
                        Greetings, and welcome to my Web Developer Portfolio. My name is Hunter O'Neal and I am a graduate of the GA Tech Full-Stack Web Developing Bootcamp. This website is a collection of my work, both as a student and professionally. I am adept at a number of technologies and am well versed in creating APIs and utilizing third-party APIs. In fact, this whole site was made using React.js!
                    </p>

                    <br />

                    <p>
                        I am originally from Manchester, GA but I am currently located in Southern Illinois. I attended LaGrange College for 3 years in pursuit of an English Composition Degree, but decided that wasn't my passion and left to join the workforce. Since then, I have worked and acquired my CompTIA A+ certification and completed the GA Tech Web Development Bootcamp. I have many hobbies, some of which are:
                    </p>

                    <br/>
                    
                    <ul>
                        <li>Coding(duh)</li>
                        <li>Cooking</li>
                        <li>Writing</li>
                        <li>Traveling</li>
                        <li>And many more!</li>
                    </ul>

                    <br />

                    <p>
                        Thanks again for visiting my page, please feel free to contact me via email or LinkedIn. I am open to new opportunities and work, and I am very open to relocating. I look forward to hearing from you soon!
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}