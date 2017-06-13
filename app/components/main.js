import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar, NavDropdown, Nav, NavItem, MenuItem,Navbar, Grid, Row, Col,FormGroup, InputGroup,FormControl, Glyphicon,Label } from 'react-bootstrap';
import {Provider} from "react-redux";
import store from "../store/store.js";

import Logo from './Logo.js'
import NavBarTitle from './NavBarTitle.js';
import NavTabs from './NavTabs.js';
import BlogNews from './BlogNews.js';
import Widget from './Widget.js';
import Social from './Social.js';
import Footer from './Footer.js';


import {Router} from "react-router";
import {Route} from "react-router-dom";
// import history from "../utils/history.js";


class App extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<Logo/>
				<NavBarTitle/>
				<NavTabs/>{/* черный слайдер центр */}
				<BlogNews/>{/*Блок новостей серые кубики*/}
				<Widget/>
				<Social/>{/*mail and social*/}
				<Footer/>{/*Footer*/}
			</div>
			)
		}
	}

ReactDOM.render((
	<Provider store={store}>
   <App />
	 </Provider>
// {/* <Provider store={store}>
// 	<Router history={history}> */}
// 			<Route exact={true} path="/" component={Enter}  />
), document.getElementById("app"));







// // import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// // //import injectTapEventPlugin from 'react-tap-event-plugin';
