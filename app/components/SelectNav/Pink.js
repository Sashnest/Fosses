import React from 'react';
import ReactDOM from 'react-dom';
import {} from 'react-bootstrap';
import {connect} from 'react-redux';

import ContentNewTitlePink from './Pink/ContentNewTitlePink.js';
import ContentBestTitlePink from './Pink/ContentBestTitlePink.js';


class Pink extends React.Component {
  constructor(props) {
      super(props);
  }


  render(){
    return(
      <div>
        <ContentNewTitlePink/>
        <ContentBestTitlePink/>
      </div>
    )
  }
}
export default connect(function(store) {
  return {
    projectReducer: store
  }
})(Pink);
