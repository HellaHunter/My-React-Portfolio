import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function Projects(props) {
    return (
        <>
        <Card>
            <Card.Img variant='top' src={props.imgURL} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.descr}
                </Card.Text>
                <Container>
                    <Row>
                        <Button href={props.appLink} target="_blank" rel="noopener noreferrer" variant="success">Check it Out</Button>
                    </Row>
                </Container>
                <br/>
                <Container>
                    <Row>
                        <Button href={props.githubRepo} target="_blank" rel="noopener noreferrer" variant="secondary">Github Repo</Button>
                    </Row>
                </Container>    
            </Card.Body>
        </Card>
        </>
    )
}

export default function Portfolio() {
    
    return (
        <>
        <Container id='portfolio-container'>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <h1 className='display-4'>Portfolio</h1>
                </Col>
            </Row>

            <br/>
            <br/>

            <Row xs={1} sm={2} md={3} xl={3} xxl={4} className='d-flex justify-content-center g-4'>
                <Col>
                <Projects
                    imgURL="./MHTSY.jpg"
                    name="MHTSY Music"
                    descr="A web app that helps you learn more about your favorite artists/songs"
                    appLink="https://hellahunter.github.io/MTHSY-Music-Clone/"
                    githubRepo="https://github.com/HellaHunter/MTHSY-Music-Clone"
                />
                </Col>

                <Col>
                <Projects
                    imgURL="./Weather-App.JPG"
                    name="What's the Weather"
                    descr="A simple 5 day weather forecast web application with a 3rd-party API"
                    appLink="https://hellahunter.github.io/What-s_the_Weather/"
                    githubRepo="https://github.com/HellaHunter/What-s_the_Weather"
                />
                </Col>

                <Col>
                <Projects
                    imgURL="./Whos-App.JPG"
                    name="Who's App"
                    descr="An Anonymous chatroom web application deployed with Heroku"
                    appLink="https://whooooos-app.herokuapp.com/dashboard"
                    githubRepo="https://github.com/MatthewShahamad/Whos-App"
                />
                </Col>

                <Col>
                <Projects
                    imgURL="./Work-Log.JPG"
                    name="Work Log"
                    descr="A simple hourly planner for a work day using Moment.js"
                    appLink="https://hellahunter.github.io/Calendar-Log/"
                    githubRepo="https://github.com/HellaHunter/Calendar-Log"
                />
                </Col>

                <Col>
                <Projects
                    imgURL="./README-gen.jpg"
                    name="README Generator"
                    descr="A README generator for projects using node.js and npm"
                    appLink="https://github.com/HellaHunter/ReadMe-Generator"
                    githubRepo="https://github.com/HellaHunter/ReadMe-Generator"
                />
                </Col>

                <Col>
                <Projects
                    imgURL="./Coding-Quiz.jpg"
                    name="Coding Quiz"
                    descr="A Simple javascript coding quiz with timer and local scoreboard"
                    appLink="https://hellahunter.github.io/Code-Quiz/"
                    githubRepo="https://github.com/HellaHunter/Code-Quiz"
                />
                </Col>
            </Row>
        </Container>
        </>
    )
}