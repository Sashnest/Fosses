import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import history from "../../../utils/history.js";

import {fieldShowCloseNew} from '../../../actions/Actions.js';
import ContentNewStartField from '../Field/ContentNewStartField.js';
import ContentNewAllField from '../Field/ContentNewAllField.js';


class ContentNewTitleField extends React.Component{
  constructor(props){
    super(props);
    this.showNew = this.showNew.bind(this);
  }
  showNew(val){
    this.props.dispatch(fieldShowCloseNew(val));
  }

  render() {
    return (
      <div className='container-fluid'>
          <Row className="center">
            <Col xsHidden smHidden mdHidden lg={1}></Col>
            <Col xs={12} sm={12} md={12} lg={10}>
              <Row>
                <div className='center'>
                  <span>New arrivals on FooseShoes</span>
                  <div className='show-shose'>
                    <Button  onClick={this.showNew.bind(this,'showNewField')}>Show All</Button>
                  </div>
                    {
                    (() => {
                      switch(this.props.projectReducer.newField) {
                        case 'closeNewField':
                           return <ContentNewStartField/>;
                        case 'showNewField':
                           return (
                             <div>
                               <ContentNewStartField/>
                               <ContentNewAllField/>
                             </div>
                           )
                      }
                    })()
                  }
                </div>
              </Row>
            </Col>
            <Col xsHidden smHidden mdHidden lg={1}></Col>
          </Row>
      </div>
      )
    }
  }
  export default connect(function(store) {
  	return {
  		projectReducer: store
  	}
  })(ContentNewTitleField);
