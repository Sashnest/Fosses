import React from 'react';
import ReactDOM from 'react-dom';
import {Grid,Row, Col, Navbar, Nav, NavItem, Glyphicon, Label, Clearfix}from 'react-bootstrap';

export default class NavBarTitle extends React.Component{
  constructor(props) {
      super(props);
}
      render(){
        return(
          <div className='container-fluid'>
            <Row>
              <Col xsHidden smHidden mdHidden lg={1}></Col>
              <Col xs={12} sm={12} md={12} lg={10}>
                <Row>
                  <Navbar collapseOnSelect className='navb'>
                    <Navbar.Header>
                      <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse className='wraper-collapse' >
                      <Row className='nav-small'>
                      <Nav>
                        <NavItem className='nav-i'  href="#">Home</NavItem>
                        <NavItem className='nav-i'  href="#">Products</NavItem>
                        <NavItem className='nav-i' href="#">About</NavItem>
                        <NavItem className='nav-i'  href="#">Pages</NavItem>
                        <NavItem className='nav-i'  href="#">Blog</NavItem>
                        <NavItem className='nav-i item' href="#">Contact</NavItem>
                      </Nav>
                      <Nav className='right'>
                        <NavItem className='nav-i' href="#">
                          <i className="fa fa-star-o"/>
                          <Label bsStyle="default">30</Label>
                        </NavItem>
                        <NavItem className='nav-i item' href="#">
                          <i className="fa fa-cart-arrow-down"/>
                          <Label bsStyle="success">0</Label>
                        </NavItem>
                      </Nav>
                    </Row>
                    </Navbar.Collapse>
                  </Navbar>
                </Row>
              </Col>
              <Col xsHidden smHidden mdHidden lg={1}></Col>
            </Row>
          </div>
        )
      }
    }
