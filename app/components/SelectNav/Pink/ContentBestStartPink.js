import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col,Thumbnail, Button} from 'react-bootstrap';

export default class ContentBestStartPink extends React.Component{


  render(){
    return (
      <div className='container-fluid'>
        <Row className='center'>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A1.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x200" src="./img/A1.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A1.jpg" />
          </Col>
          </Row>
       </div>
    )
  }
}
