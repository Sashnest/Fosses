import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import history from "../../../utils/history.js";

import {pinkShowCloseBest} from '../../../actions/Actions.js';
import ContentBestStartPink from '../Pink/ContentBestStartPink.js';
import ContentBestAllPink from '../Pink/ContentBestAllPink.js';


class ContentBestTitlePink extends React.Component{
  constructor(props){
    super(props);
    this.showNew = this.showNew.bind(this);

  }
  showNew(val){
    this.props.dispatch(pinkShowCloseBest(val));
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
                    <Button  onClick={this.showNew.bind(this,'showBestPink')}>Show All</Button>
                  </div>
                  {
                    (() => {
                      switch(this.props.projectReducer.bestPink) {
                        case 'closeBestPink':
                           return <ContentBestStartPink/>;
                        case 'showBestPink':
                           return (
                             <div>
                               <ContentBestStartPink/>
                               <ContentBestAllPink/>
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
  })(ContentBestTitlePink);
