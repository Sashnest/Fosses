import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Row} from 'react-bootstrap';

export default class Footer extends React.Component{

  render(){
    return(
      <div  className='container-fluid center-footer-botton'>
        <Row >
          <Col xsHidden smHidden mdHidden lg={1}></Col>
          <Col xs={6} md={12} md={4} lg={4} className='wraper-footer-l'>
            <div className="footer-designed">
              <span >Copyright Fooseshos 2015.<br/>Designed by LiVolti</span>
            </div>
          </Col>
          <Col xsHidden mdHidden md={4} lg={2}></Col>
          <Col xs={6} md={12} md={4} lg={4} className='wraper-footer-r'>
            <div className="footer-map">
              <a href="#">Home/</a>
              <a href="#">Support/</a>
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
