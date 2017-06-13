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
                    <Navbar.Collapse>
                      <Nav>
                        <NavItem eventKey={1} href="#">Home</NavItem>
                        <NavItem eventKey={2} href="#">Products</NavItem>
                        <NavItem eventKey={2} href="#">About</NavItem>
                        <NavItem eventKey={2} href="#">Pages</NavItem>
                        <NavItem eventKey={2} href="#">Blog</NavItem>
                        <NavItem eventKey={2} href="#">Contact</NavItem>
                      </Nav>
                      <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                          <Glyphicon glyph="star-o" />
                          <Label bsStyle="default">30</Label>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                          <Glyphicon glyph="cart-arrow-down"/>
                          <Label bsStyle="success">0</Label>
                        </NavItem>
                      </Nav>
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
