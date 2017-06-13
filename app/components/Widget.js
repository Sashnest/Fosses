import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Row} from 'react-bootstrap';


export default class Widget extends React.Component{

  render(){
    return(
      <div className='container-fluid'>
        <Row className='widget'>
          <Col xs={12} md={12} md={4} lg={4}>
            <span className="widget-title">TEXT WIDGET</span>
            <span className="text-footer"><br/>Donec sed adio dui. Nulla vitae elit libero,
              a pharetra augue. Nullam id dolor id nibh ultricies
            </span>
          </Col>
          <Col xs={12} md={12} md={4} lg={4}>
            <span className="widget-title"> TWITTER WIDGET</span>
            <div className="text-footer">
              <span className="widget-text" >@ericafustero </span>
              <span>Why thank you. You work looks awesome by the way!</span>
              <span className="widget-text"> @ treemelody </span><br/> 19 days ago
              <br/>
              <span className="widget-text" >@ericafustero </span>
              <span>Why thank you. You work looks awesome by the way!</span>
              <span className="widget-text"> @ treemelody </span><br/> 21 days ago
            </div>
          </Col>
          <Col xs={12} md={12} md={4} lg={4}>
            <span className="widget-title"> FLICKR WIDGET</span>
            <div className="foter-widget">
              <a href="#"><img src="img/f1.jpg"/></a>
              <a href="#"><img src="img/f2.jpg"/></a>
              <a href="#"><img src="img/f3.jpg"/></a>
              <a href="#"><img src="img/f4.jpg"/></a>
              <a href="#"><img src="img/f5.jpg"/></a>
              <a href="#"><img src="img/f6.jpg"/></a>
            </div>
          </Col>
        </Row>
       </div>
    )
  }
}
