import React from 'react';
import logodark from '../../assets/img/logo-dark.png';

import {Navbar, Nav} from 'react-bootstrap';

const Header = () => {
    return(
    <>
        <Navbar bg='white' sticky='top' defaultActiveKey="#home">
                <Navbar.Brand className="col-1 justify-content-center" href="#home">
                    <img
                        src={logodark}
                        alt='logo'
                        height="25"
                    />
                </Navbar.Brand>
            
                <Nav variant="light" className="col-9 justify-content-around" style={{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    }}>
                    <Nav.Link href="../home/Home.js" >Home</Nav.Link>
                    <Nav.Link href="/about">About me</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/documents">Documents</Nav.Link>
                    <Nav.Link href="/references">References</Nav.Link>
                </Nav>

                <Nav className="col-2 justify-content-around">
                    <Nav.Link href="https://www.linkedin.com/in/miruna-p%C3%AErvulescu-3684bb163/" target="_blank"><i className="fab fa-lg fa-linkedin"></i></Nav.Link>
                    <Nav.Link href="https://github.com/miru-pirvulescu" target="_blank"><i className="fab fa-lg fa-github-square"></i></Nav.Link>
                    <Nav.Link href="https://www.hackerrank.com/miru_pirvulescu" target="_blank"><i className="fab fa-lg fa-hackerrank"></i></Nav.Link>
                </Nav> 
        </Navbar>
    </>
  );
}

export default Header;