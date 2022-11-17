import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'


function Header() {
  return (
    <div>
     <Navbar bg="light">
      <Container>
      {/* <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUTons-i52Av5YhIMqTpZkA_7HJguMTKr1w&usqp=CAU"></img> */}

        <Navbar.Brand href="#home">Weather Forecast</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> */}
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
          {/* </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
    </div>

  )
}

export default Header