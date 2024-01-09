import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
       
        <Navbar expand="lg" className="bg-body-tertiary ">
        <img className='ms-5' style={{width:'75px'}} src="https://www.freepnglogos.com/uploads/audi-logo-2.png" alt="" />
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{width:'550px'}} className='justify-content-evenly' >
            <Nav.Link href="#home"> <b> Home</b></Nav.Link>
            <Nav.Link href="#link"><b>Used cars</b></Nav.Link>
            <Nav.Link href="#link"><b>Customer area</b></Nav.Link>
            <Nav.Link href="#link"><b>Innovation</b></Nav.Link>
            <Nav.Link href="#link"><b>Quick Links</b></Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
        <i style={{fontSize:'25px'}} className='justify-content-flex-end' class="fa-solid fa-magnifying-glass"></i>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header