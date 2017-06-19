import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Row} from 'react-bootstrap';

export default class Footer extends React.Component{

  render(){
    return(
      <div  className='container-fluid center-footer-botton'>
        <Row >
          <Col xsHidden smHidden mdHidden lg={1}></Col>
          <Col xs={12} md={12} md={4} lg={4}>
            <div className="footer-designed">
              <span >Copyright Fooseshos 2015.<br/>Designed by LiVolti</span>
            </div>
          </Col>
          <Col xs={12} md={12} md={4} lg={2}></Col>
          <Col xs={12} md={12} md={4} lg={4}>
            <div className="footer-map">
              <a href="#">Home/</a>
              <a href="#">Support/</a>
              <a href="#">Terms and Conditions/</a>
              <a href="#">Faqs/</a>
              <a href="#">Contact us</a>
            </div>
          </Col>
          <Col xsHidden smHidden mdHidden lg={1}></Col>
        </Row>
      </div>
    )
  }
}
