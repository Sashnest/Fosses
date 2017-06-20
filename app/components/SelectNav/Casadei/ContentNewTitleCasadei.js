import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import history from "../../../utils/history.js";

import {casadieShowCloseNew} from '../../../actions/Actions.js';
import ContentNewStartCasadei from '../Casadei/ContentNewStartCasadei.js';
import ContentNewAllCasadei from '../Casadei/ContentNewAllCasadei.js';


class ContentNewTitleCasadei extends React.Component{
  constructor(props){
    super(props);
    this.showNew = this.showNew.bind(this);
  }
  showNew(val){
    this.props.dispatch(casadieShowCloseNew(val));
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
                    <Button  onClick={this.showNew.bind(this,'showNewCasadie')}>Show All</Button>
                  </div>
                    {
                    (() => {
                      switch(this.props.projectReducer.newCasadie) {
                        case 'closeNewCasadie':
                           return <ContentNewStartCasadei/>;
                        case 'showNewCasadie':
                           return (
                             <div>
                               <ContentNewStartCasadei/>
                               <ContentNewAllCasadei/>
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
  })(ContentNewTitleCasadei);
