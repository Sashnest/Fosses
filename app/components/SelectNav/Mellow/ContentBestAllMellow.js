import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col,Thumbnail, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import history from '../../../utils/history.js';

import {mellowShowCloseBest} from '../../../actions/Actions.js';

class ContentBestAllMellow extends React.Component{
  constructor(props){
    super(props);
    this.CloseBest = this.CloseBest.bind(this);
  }

CloseBest(val){
  console.log(val);
  this.props.dispatch(mellowShowCloseBest(val));
}

  render(){
    return (
      <div className='container-fluid'>
        <Row className='center'>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A5.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x200" src="./img/A5.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A5.jpg" />
          </Col>
        </Row>
        <Row className='center'>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A5.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x200" src="./img/A5.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A5.jpg" />
          </Col>
        </Row>
        <Row className='center'>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A5.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x200" src="./img/A5.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A5.jpg" />
          </Col>
        </Row>
        <Row className='center'>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A5.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x200" src="./img/A5.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A5.jpg" />
          </Col>
        </Row>
        <Row className='center'>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A5.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x200" src="./img/A5.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A5.jpg" />
          </Col>
        </Row>
        <div className='close-shose'>
          <Button  onClick={this.CloseBest.bind(this, 'closeBestMellow')}>Close All</Button>
        </div>
      </div>
    )
  }
}
export default connect(function(store) {
  return {
    projectReducer: store
  }
})(ContentBestAllMellow);
