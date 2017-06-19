import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {Row, Col} from 'react-bootstrap';



export default class Collection extends React.Component{


  render(){
    return(
      <div className='container-fluid top-collection'>
          <Row>
            <Col xsHidden smHidden md={1} lg={1}></Col>
            <Col xs={12} sm={12} md={5} lg={5}>
              <Row>
                <img  className="img-foto" src="img/1s.jpg"/>
              </Row>
            </Col>
            <Col xs={12} sm={12} md={5} lg={5}>
              <div>
                <div className="top-collection-price">
        					<span className="top-collection-price-sales">$145,99</span>
        				</div>
        				<div className="top-collection-title">
        					<span>Pink Shoes<br/>2016 Collection</span></div>
        				<div className="top-collection-text">
        					<span> Nunc non fermentum nunc. Sed ut ante
        						<br/> eget leo temprol consequat sit amet eu orci.
        						<br/> Donec dignissim dolor eget...
        					</span>
        				</div>
        				<div className="top-collection-social">
        					<a href="#"><i className="fa fa-eye" aria-hidden="true"></i></a>
        					<a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
        			  		<a href="#"><i className="fa fa-share-square-o" aria-hidden="true"></i></a>
        			  		<a href="#"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></a>
        	  			</div>
              </div>
            </Col>
            <Col xsHidden smHidden md={1} lg={1}></Col>
          </Row>
       </div>
    )
  }
}
