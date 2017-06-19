import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col,Thumbnail, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import history from '../../../utils/history.js';

import {CloseNew} from '../../../actions/Actions.js';

class ContentBestAllPrada extends React.Component{
  constructor(props){
    super(props);
    this.CloseNew = this.CloseNew.bind(this);
  }

CloseNew(val){
  console.log(val);
  this.props.dispatch(CloseNew(val));
}

  render(){
    return (
      <div className='container-fluid'>
        <Row className='center'>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A3.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x200" src="./img/A3.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A3.jpg" />
          </Col>
        </Row>
        <Row className='center'>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A3.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x200" src="./img/A3.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A3.jpg" />
          </Col>
        </Row>
        <Row className='center'>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A3.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x200" src="./img/A3.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A3.jpg" />
          </Col>
        </Row>
        <Row className='center'>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A3.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x200" src="./img/A3.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A3.jpg" />
          </Col>
        </Row>
        <Row className='center'>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A3.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x200" src="./img/A3.jpg" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Thumbnail href="#" alt="171x180" src="./img/A3.jpg" />
          </Col>
        </Row>
        <Button onClick={this.CloseNew.bind(this, 'closeNew')}>Close All</Button>
       </div>
    )
  }
}
export default connect(function(store) {
  return {
    projectReducer: store
  }
})(ContentBestAllPrada);
