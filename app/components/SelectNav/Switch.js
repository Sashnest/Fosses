import React from "react";
import {connect} from 'react-redux';

import {changeTab} from '../../actions/Actions.js';

 class Switch extends React.Component{
	constructor(props){
		super(props);
    this.active = this.active.bind(this);
	}
  active(val) {
    this.props.dispatch(changeTab(val));
  }

	render(){
    let cssClasses = "nav-link linkNav";

		return(
			<ul className="nav nav-tab nav-justified main-menu">
        <li className="nav-item">
          <a aria-expanded="true" className={this.props.projectReducer.tab === "pink" ? cssClasses + " active" : cssClasses} onClick={this.active.bind(this, "pink")}>
            <span className="main-menu-title">Pink Shoes<br/></span>
            <span>Now af $145,99</span>
          </a>
        </li>
        <li className="nav-item">
          <a className={this.props.projectReducer.tab === "field" ? cssClasses + " active" : cssClasses} onClick={this.active.bind(this, "field")}>
            <span className="main-menu-title">Anna Field<br/></span>
            <span>Limeted Edition</span>
          </a>
        </li>
        <li className="nav-item">
          <a className={this.props.projectReducer.tab === "prada" ? cssClasses + " active" : cssClasses} onClick={this.active.bind(this, "prada")}>
            <span className="main-menu-title">Prada<br/></span>
            <span>Sammer is coming</span>
          </a>
        </li>
        <li className="nav-item">
          <a className={this.props.projectReducer.tab === "casadei" ? cssClasses + " active" : cssClasses} onClick={this.active.bind(this, "casadei")}>
            <span className="main-menu-title">Casadei<br/></span>
            <span>All Colors avaiable</span>
          </a>
        </li>
        <li className="nav-item">
          <a className={this.props.projectReducer.tab === "mellow" ? cssClasses + " active" : cssClasses} onClick={this.active.bind(this, "mellow")}>
            <span className="main-menu-title">Mellow Yellow<br/></span>
            <span>Free deliveri</span>
          </a>
        </li>
      </ul>
		)
	}
}
export default connect(function(store) {
	return {
		projectReducer: store
	}
})(Switch);
