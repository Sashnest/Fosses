import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import history from "../utils/history.js";

import {showAllNew, CloseNew} from '../actions/Actions.js';
import TabsContentBest from './TabsContentBest.js';
import TabsContentNewAll from './TabsContentNewAll.js';
import TabsContentNewStart from './TabsContentNewStart.js';

class TabsContentNew extends React.Component{
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
      <div className='center'>
        <span>New arrivals on FooseShoes</span>
        <Button onClick={this.showNew.bind(this,'showNew')}>Show All</Button>
        <Button onClick={this.CloseNew.bind(this, 'closeNew')}>Close All</Button>
        {
					(() => {
						switch(this.props.projectReducer.newfoses) {
              case "closeNew":
								 return <TabsContentNewStart/>;
              case "showNew":
								 return (
                   <div>
                     <TabsContentNewStart/>
                     <TabsContentNewAll/>
                   </div>
                 )
						}
					})()
				}
      </div>
      )
    }
  }
  export default connect(function(store) {
  	return {
  		projectReducer: store
  	}
  })(TabsContentNew);
