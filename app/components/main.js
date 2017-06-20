import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import store from "../store/store.js";
import {Router} from "react-router";
import {Route} from "react-router-dom";

import Logo from './Logo.js';
import NavBarTitle from './NavBarTitle.js';
import Collection from './Collection.js';
import NavTabs from './NavTabs.js';
import SlideShow from './SlideShow.js';
import NavTabsContent from './NavTabsContent.js';
import BlogNews from './BlogNews.js';
import Widget from './Widget.js';
import Social from './Social.js';
import Footer from './Footer.js';


class App extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<Logo/>
				<NavBarTitle/>
				<Collection/>
				<NavTabs/>
				<SlideShow/>
			 	<NavTabsContent/>
				<BlogNews/>
				<Widget/>
				<Social/>{/*mail and social*/}
				<Footer/>{/*Footer*/}
			</div>
			)
		}
	}

ReactDOM.render((
	<Provider store={store}>
   <App/>
	</Provider>
), document.getElementById("app"));


// {/* <Provider store={store}>
// 	<Router history={history}> */}
// 			<Route exact={true} path="/" component={Enter}  />
