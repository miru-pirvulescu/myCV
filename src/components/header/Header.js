import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logolight from '../../assets/img/logo-light.png';
import logodark from '../../assets/img/logo-dark.png';

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({theme, page}) => {
    return(
    <>
        <Navbar bg={theme} variant={theme} sticky='top'>
            <Navbar.Brand href="#home">
                <img
                    src={theme == 'light' ? logolight : logodark}
                    alt='logo'
                    height="30"
                />
            </Navbar.Brand>
            <div className="col-10">
                <Nav className="row justify-content-center">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About me</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#documents">Documents</Nav.Link>
                    <Nav.Link href="#references">References</Nav.Link>
                </Nav>
            </div>
            <Nav className="ml-auto">
                <Nav.Link href="https://www.linkedin.com/in/miruna-p%C3%AErvulescu-3684bb163/" target="_blank"><i className="fab fa-lg fa-linkedin"></i></Nav.Link>
                <Nav.Link href="https://github.com/miru-pirvulescu" target="_blank"><i className="fab fa-lg fa-github-square"></i></Nav.Link>
                <Nav.Link href="https://www.hackerrank.com/miru_pirvulescu" target="_blank"><i className="fab fa-lg fa-hackerrank"></i></Nav.Link>
                <Nav.Item>
                    {theme == 'light' ? 
                        <Nav.Link href="#homeLight"><i className="fas fa-lg fa-lightbulb"></i></Nav.Link>
                        :
                        <Nav.Link href="#homeDark"><i className="far fa-lg fa-lightbulb"></i></Nav.Link>
                    }
                    
                </Nav.Item>
            </Nav>
        </Navbar>
    </>
  );
}

export default Header;