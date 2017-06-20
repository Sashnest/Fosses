import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import history from "../../../utils/history.js";

import {fieldShowCloseBest} from '../../../actions/Actions.js';
import ContentBestStartField from '../Field/ContentBestStartField.js';
import ContentBestAllField from '../Field/ContentBestAllField.js';


class ContentBestTitleField extends React.Component{
  constructor(props){
    super(props);
    this.showBest = this.showBest.bind(this);
  }
  showBest(val){
    this.props.dispatch(fieldShowCloseBest(val));
  }

  render() {
    return (
      <div className='container-fluid'>
          <Row className="center">
            <Col xsHidden smHidden mdHidden lg={1}></Col>
            <Col xs={12} sm={12} md={12} lg={10}>
              <Row>
                <div className='center'>
                  <span>Best sellers of month</span>
                  <div className='show-shose'>
                    <Button  onClick={this.showBest.bind(this,'showBestField')}>Show All</Button>
                  </div>
                    {
                    (() => {
                      switch(this.props.projectReducer.bestField) {
                        case 'closeBestField':
                           return <ContentBestStartField/>;
                        case 'showBestField':
                           return (
                             <div>
                               <ContentBestStartField/>
                               <ContentBestAllField/>
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
  })(ContentBestTitleField);
