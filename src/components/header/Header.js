import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logodark from '../../assets/img/logo-dark.png';

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return(
    <>
        <Navbar bg='dark' variant='dark' sticky='top' defaultActiveKey="/home">
            <Navbar.Brand href="#home">
                <img
                    src={logodark}
                    alt='logo'
                    height="25"
                />
            </Navbar.Brand>
            <div className="col-10">
                <Nav className="row justify-content-center">
                    <Nav.Link href="../home/Home.js">Home</Nav.Link>
                    <Nav.Link href="/about">About me</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/documents">Documents</Nav.Link>
                    <Nav.Link href="/references">References</Nav.Link>
                </Nav>
            </div>
            <Nav className="ml-auto">
                <Nav.Link href="https://www.linkedin.com/in/miruna-p%C3%AErvulescu-3684bb163/" target="_blank"><i className="fab fa-lg fa-linkedin"></i></Nav.Link>
                <Nav.Link href="https://github.com/miru-pirvulescu" target="_blank"><i className="fab fa-lg fa-github-square"></i></Nav.Link>
                <Nav.Link href="https://www.hackerrank.com/miru_pirvulescu" target="_blank"><i className="fab fa-lg fa-hackerrank"></i></Nav.Link>
            </Nav>
        </Navbar>
    </>
  );
}

export default Header;