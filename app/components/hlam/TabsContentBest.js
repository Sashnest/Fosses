import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import {showBest, CloseBest} from '../actions/Actions.js';
import TabsContentBestAll from './TabsContentBestAll.js';
import TabsContentBestStart from './TabsContentBestStart.js';

class TabsContentBest extends React.Component{
  constructor(props){
    super(props);
    this.ShowBest = this.ShowBest.bind(this);
    this.CloseBest = this.CloseBest.bind(this);
  }
  ShowBest(val){
    this.props.dispatch(showBest(val));
  }
  CloseBest(val){
    console.log(val);
    this.props.dispatch(CloseBest(val));
  }

  render() {
    return (
      <div className='center'>
        <span>New arrivals on FooseShoes</span>
        <Button onClick={this.ShowBest.bind(this,'showBest')}>Show All</Button>
        <Button onClick={this.CloseBest.bind(this, 'closeBest')}>Close All</Button>
        {
					(() => {
						switch(this.props.projectReducer.bestFoses) {
              case "closeBest":
								 return <TabsContentBestStart/>;
              case "showBest":
								 return (
                   <div>
                     <TabsContentBestStart/>
                     <TabsContentBestAll/>
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
  })(TabsContentBest);
