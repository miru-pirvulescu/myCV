import React from 'react';
import logodark from '../../assets/img/Logo/logo-dark.png';

import {Navbar, Nav} from 'react-bootstrap';

const Header = () => {
    return(
    <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand className="col-1 justify-content-center" href="#home">
                    <img
                        src={logodark}
                        alt='logo'
                        height="25"
                    />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="light" className="col-9 justify-content-around" style={{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    }}>
                    <Nav.Link href="#about">About me</Nav.Link>
                    <Nav.Link href="#background">My Background</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>

                <Nav className="col-3 justify-content-around">
                    <Nav.Link href="https://www.linkedin.com/in/miruna-p%C3%AErvulescu-3684bb163/" target="_blank"><i className="fab fa-2x fa-linkedin"></i></Nav.Link>
                    <Nav.Link href="https://github.com/miru-pirvulescu" target="_blank"><i className="fab fa-2x fa-github-square"></i></Nav.Link>
                    <Nav.Link href="https://www.hackerrank.com/miru_pirvulescu" target="_blank"><i className="fab fa-2x fa-hackerrank"></i></Nav.Link>
                </Nav> 
            </Navbar.Collapse>
        </Navbar>
    </>
  );
}

export default Header;