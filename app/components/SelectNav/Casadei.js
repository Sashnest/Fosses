import React from 'react';
import ReactDOM from 'react-dom';
import {} from 'react-bootstrap';
import {connect} from 'react-redux';

import ContentNewTitleCasadei from './Casadei/ContentNewTitleCasadei.js';
import ContentBestTitleCasadei from './Casadei/ContentBestTitleCasadei.js';



class Casadei extends React.Component {
  constructor(props) {
      super(props);
  }


  render(){
    return(
      <div>
        <ContentNewTitleCasadei/>
        <ContentBestTitleCasadei/>
      </div>
    )
  }
}
export default connect(function(store) {
  return {
    projectReducer: store
  }
})(Casadei);
