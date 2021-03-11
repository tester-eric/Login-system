import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar } from 'react-bootstrap';



class Mynavbar extends React.Component {

  render() {
    return (
      <Navbar bg="dark" variant="blue">
             <Nav className="container-fluid" activeKey="/Login">
             <Nav.Item className="ml-auto"> 
            <Nav.Link href="/Login" >Login</Nav.Link>
            </Nav.Item>
            <Nav.Item > 
            <Nav.Link href="/Registration" >Registration</Nav.Link>
            </Nav.Item>
          </Nav>
    </Navbar>
    );

  }

}
export default Mynavbar;
