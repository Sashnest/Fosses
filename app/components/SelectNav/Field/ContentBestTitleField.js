import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import history from "../../../utils/history.js";

import {showAllNew, CloseNew} from '../../../actions/Actions.js';
// import TabsContentBest from '../../TabsContentBest.js';
import ContentBestStartField from '../Field/ContentBestStartField.js';
import ContentBestAllField from '../Field/ContentBestAllField.js';


class ContentBestTitleField extends React.Component{
  constructor(props){
    super(props);
    this.showNew = this.showNew.bind(this);
    this.CloseNew = this.CloseNew.bind(this);
  }
  showNew(val){
    this.props.dispatch(showAllNew(val));
  }
  CloseNew(val){
    console.log(val);
    this.props.dispatch(CloseNew(val));
  }
  render() {
    return (
      <div className='container-fluid'>
          <Row className="center">
            <Col xsHidden mdHidden mdHidden lg={1}></Col>
            <Col xs={12} md={12} md={12} lg={10}>
              <Row>
                <div className='center'>
                  <span>Best sellers of month</span>
                  <Button onClick={this.showNew.bind(this,'showNew')}>Show All</Button>
                    {
                    (() => {
                      switch(this.props.projectReducer.newfoses) {
                        case "closeNew":
                           return <ContentBestStartField/>;
                        case "showNew":
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
  })(ContentBestTitleField);
