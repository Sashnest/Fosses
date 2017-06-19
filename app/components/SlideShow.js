import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';


export default class SlideShow extends React.Component{

  render(){
    return(
      <div className='container-fluid'>
          <Row className="collection">
            <Col xsHidden mdHidden mdHidden lg={1}></Col>
            <Col xs={12} md={12} md={12} lg={10}>
              <Row>
                <Col xs={12} md={12} md={4} lg={4}>
                  <Thumbnail href="#" src="./img/c1.jpg" className="collection-foto"/>
                </Col>
                <Col xs={12} md={12} md={4} lg={4}>
                  <Thumbnail href="#" src="./img/c2.jpg" className="collection-foto"/>
                </Col>
                <Col xs={12} md={12} md={4} lg={4}>
                  <Thumbnail href="#" src="./img/c3.jpg" className="collection-foto"/>
                </Col>
              </Row>
            </Col>
            <Col xsHidden mdHidden mdHidden lg={1}></Col>
          </Row>
      </div>
    )
  }
}
