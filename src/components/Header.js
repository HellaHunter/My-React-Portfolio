import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    
    return (
        <>
        
            {[false].map((expand) => (
                <Navbar key={expand} id='header' expand={expand}>
                    <a href='/' id='name-text'><h1 className='display-1'>Hunter O'Neal</h1></a>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className='navigation-collapse'
                        >
                            <Offcanvas.Header closebutton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Look Around
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className='justify-content-end flex-grow-1 pe-3'>
                                    <Nav.Link href='/'>Home</Nav.Link>
                                    <Nav.Link href='/AboutMe'>About Me</Nav.Link>
                                    <Nav.Link href='/Portfolio' id='portfolio'>Portfolio</Nav.Link>
                                    <NavDropdown
                                        title='Contact Me'
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href='/EmailForm' id='emailForm'>Email Me</NavDropdown.Item>
                                        <NavDropdown.Item href="https://www.linkedin.com/in/hunter-o-neal-7514a285" target="_blank" rel="noopener noreferrer">LinkedIn</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href='./NewestWebResume.pdf' download id='resume'>Resume</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                </Navbar>
            ))}
        
        </>
      );
}

