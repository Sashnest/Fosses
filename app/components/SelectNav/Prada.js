import React from 'react';
import ReactDOM from 'react-dom';
import {} from 'react-bootstrap';
import {connect} from 'react-redux';
import history from '../../utils/history.js';

import ContentNewTitlePrada from './Prada/ContentNewTitlePrada.js';
import ContentBestTitlePrada from './Prada/ContentBestTitlePrada.js';



class Prada extends React.Component {
  constructor(props) {
      super(props);
  }


  render(){
    return(
      <div>
        <ContentNewTitlePrada/>
        <ContentBestTitlePrada/>
      </div>
    )
  }
}
export default connect(function(store) {
  return {
    projectReducer: store
  }
})(Prada);
