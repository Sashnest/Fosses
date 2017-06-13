import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar, NavDropdown, Nav, NavItem, MenuItem,Navbar, Grid, Row, Col,FormGroup, InputGroup,FormControl, Glyphicon,Label } from 'react-bootstrap';

export default class BlogNews extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className='container-fluid'>
        <Row className='wraper-news'>
          <div className="news"></div>
          <Col xs={12} sm={12} md={4} lg={3} className="wraper-blog-first">
            <div className="blog-first">
              <span className="news-title"> FREE SHIPPING </span>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={3} className="wraper-blog-sekond">
            <div className="blog-sekond">
              <span className="news-title"> TESTIMONIALS </span>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="wraper-blog-third">
            <div className="blog-third">
              <span className="news-title">BLOG NEWS</span>
              <div className="news-data">
                <span>APR  01 </span>
              </div>
              <span className="news-maseg-title">Nice clian. The best for you blog!</span>
              <span className="news-maseg">Vivamus metus turpis, bibendum vitae euismod.The best for you blog!<br/></span>
              <div className="news-data">
                <span>APR  05 </span><br/>
              </div>
              <span className="news-maseg-title">What an ecommerce theme!</span>
              <span className="news-maseg">Vulputate vel nibh. Class aptent taciti sociosqu ad litora
              </span>
              <div className="news-data">
                <span>APR  15 </span>
              </div>
              <span className="news-maseg-title">Nice clian. The best for you blog!</span>
              <span className="news-maseg">Vivamus metus turpis, bibendum vitae euismod.The best for you blog!<br/></span>
              <div className="news-data">
                <span>APR  20 </span><br/>
              </div>
              <span className="news-maseg-title">What an ecommerce theme!</span>
              <span className="news-maseg">Vulputate vel nibh. Class aptent taciti sociosqu ad litora
              </span>
              <div className="news-data">
                <span>MAY  30 </span><br/>
              </div>
              <span className="news-maseg-title">What an ecommerce theme!</span>
              <span className="news-maseg">Vulputate vel nibh. Class aptent taciti sociosqu ad litora
              </span>
            </div>
          </Col>
          </Row>
       </div>
    )
  }
}

   //
   //
  //  <Col xs={12} className='center'>
  //    <Row >
  //
  //      <Col xs={12} md={12} md={4} lg={3} >
  //
  //      </Col>
  //      <Col xs={12} md={12} md={4} lg={3} >
  //
  //      </Col>
  //      <Col xs={12} md={12} md={4} lg={6} >
  //
  //      </Col>
  //    </Row>
  //  </Col>
