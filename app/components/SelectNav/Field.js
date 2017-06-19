import React from 'react';
import ReactDOM from 'react-dom';
import {} from 'react-bootstrap';
import {connect} from 'react-redux';

import ContentNewTitleField from './Field/ContentNewTitleField.js';
import ContentBestTitleField from './Field/ContentBestTitleField.js';



class Field extends React.Component {
  constructor(props) {
      super(props);
  }


  render(){
    return(
      <div>
        <ContentNewTitleField/>
        <ContentBestTitleField/>
      </div>
    )
  }
  }
  export default connect(function(store) {
  return {
    projectReducer: store
  }
  })(Field);
