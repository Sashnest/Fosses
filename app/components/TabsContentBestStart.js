import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col,Thumbnail, Button} from 'react-bootstrap';

export default class TabContentNewAll extends React.Component{


  render(){
    return (
      <div className='container-fluid'>
        <Row className='center'>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A1.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x200" src="./img/A2.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A3.jpg" />
          </Col>
          </Row>
       </div>
     )
   }
 }



 //
 //
 // <Col xs={12} >
 //   <Row>
 //     <Col xs={12} md={12} md={4} lg={4}>
 //
 //     </Col>
 //     <Col xs={12} md={12} md={4} lg={4}>
 //
 //     </Col>
 //     <Col xs={12} md={12} md={4} lg={4}>
 //
 //     </Col>
 //   </Row>
 // </Col>
