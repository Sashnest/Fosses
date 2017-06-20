import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import history from "../../../utils/history.js";

import {mellowShowCloseNew} from '../../../actions/Actions.js';
import ContentNewStartMellow from '../Mellow/ContentNewStartMellow.js';
import ContentNewAllMellow from '../Mellow/ContentNewAllMellow.js';


class ContentNewTitleMellow extends React.Component{
  constructor(props){
    super(props);
    this.showNew = this.showNew.bind(this);
  }
  showNew(val){
    this.props.dispatch(mellowShowCloseNew(val));
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
                    <Button  onClick={this.showNew.bind(this,'showNewMellow')}>Show All</Button>
                  </div>
                    {
                    (() => {
                      switch(this.props.projectReducer.newMellow) {
                        case 'closeNewMellow':
                           return <ContentNewStartMellow/>;
                        case 'showNewMellow':
                           return (
                             <div>
                               <ContentNewStartMellow/>
                               <ContentNewAllMellow/>
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
  })(ContentNewTitleMellow);
