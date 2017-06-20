import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import history from "../../../utils/history.js";

import {casadieShowCloseBest} from '../../../actions/Actions.js';
import ContentBestStartCasadei from '../Casadei/ContentBestStartCasadei.js';
import ContentBestAllCasadei from '../Casadei/ContentBestAllCasadei.js';


class ContentBestTitleCasadei extends React.Component{
  constructor(props){
    super(props);
    this.showBest = this.showBest.bind(this);
  }
  showBest(val){
    this.props.dispatch(casadieShowCloseBest(val));
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
                    <Button  onClick={this.showBest.bind(this, 'showBestCasadie')}>Show All</Button>
                  </div>
                    {
                    (() => {
                      switch(this.props.projectReducer.bestCasadie) {
                        case 'closeBestCasadie':
                           return <ContentBestStartCasadei/>;
                        case 'showBestCasadie':
                           return (
                             <div>
                               <ContentBestStartCasadei/>
                               <ContentBestAllCasadei/>
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
  })(ContentBestTitleCasadei);
