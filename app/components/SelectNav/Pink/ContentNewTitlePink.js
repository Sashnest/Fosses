import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import history from "../../../utils/history.js";

import {pinkShowCloseNew} from '../../../actions/Actions.js';
import ContentNewStartPink from '../Pink/ContentNewStartPink.js';
import ContentNewAllPink from '../Pink/ContentNewAllPink.js';


class ContentNewTitlePink extends React.Component{
  constructor(props){
    super(props);
    this.showNew = this.showNew.bind(this);
  }
  showNew(val){
    this.props.dispatch(pinkShowCloseNew(val));
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
                    <Button  onClick={this.showNew.bind(this,'showNewPink')}>Show All</Button>
                  </div>
                    {
                    (() => {
                      switch(this.props.projectReducer.newPink) {
                        case 'closeNewPink':
                           return <ContentNewStartPink/>;
                        case 'showNewPink':
                           return (
                             <div>
                               <ContentNewStartPink/>
                               <ContentNewAllPink/>
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
  })(ContentNewTitlePink);
