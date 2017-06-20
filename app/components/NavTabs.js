import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import Switch from './SelectNav/Switch.js';

class NavTabs extends React.Component{

  render() {
    return (
      <div className='container-fluid nav-center' >
          <Row>
            <Col xsHidden mdHidden mdHidden lg={1}></Col>
            <Col xs={12} md={12} md={12} lg={10}>
              <Row>
                <div className='tabs'>
                  <Switch click={this.click}/>
                </div>
              </Row>
            </Col>
            <Col xsHidden mdHidden mdHidden lg={1}></Col>
          </Row>
        </div>
      )
    }
  }

  export default connect(function(store) {
	return {
		projectReducer: store
  }
})(NavTabs);
