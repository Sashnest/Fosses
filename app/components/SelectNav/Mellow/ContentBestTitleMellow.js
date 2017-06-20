import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import history from "../../../utils/history.js";

import {mellowShowCloseBest} from '../../../actions/Actions.js';
import ContentBestStartMellow from '../Mellow/ContentBestStartMellow.js';
import ContentBestAllMellow from '../Mellow/ContentBestAllMellow.js';


class ContentBestTitleMellow extends React.Component{
  constructor(props){
    super(props);
    this.showBest = this.showBest.bind(this);
  }
  showBest(val){
    this.props.dispatch(mellowShowCloseBest(val));
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
                    <Button  onClick={this.showBest.bind(this,'showBestMellow')}>Show All</Button>
                  </div>
                    {
                    (() => {
                      switch(this.props.projectReducer.bestMellow) {
                        case "closeBestMellow":
                           return <ContentBestStartMellow/>;
                        case "showBestMellow":
                           return (
                             <div>
                               <ContentBestStartMellow/>
                               <ContentBestAllMellow/>
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
  })(ContentBestTitleMellow);
