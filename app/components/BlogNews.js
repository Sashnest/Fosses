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
          <Col xsHidden smHidden mdHidden lg={1}></Col>
          <Col xs={12} sm={12} md={10} lg={10}>
            <div className="news"></div>
          </Col>
          <Col xsHidden smHidden mdHidden lg={1}></Col>
        </Row>
        <Row className='wraper-news'>
          <Col xsHidden smHidden mdHidden lg={1}></Col>
          <Col xs={12} sm={12} md={4} lg={2} className="wraper-blog-first">
              <div className="blog-first">
                <span className="news-title"> FREE SHIPPING </span>
                <span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</span>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3} className="wraper-blog-sekond">
              <div className="blog-sekond">
                <span className="news-title"> TESTIMONIALS </span>
                <span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit.</span>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={5} className="wraper-blog-third">
              <div className="blog-third">
                <span className="news-title">BLOG NEWS</span>
                <div className="news-data-maseg">
                  <div className="news-data">
                    <span>APR  01 </span>
                  </div>
                  <span className="news-maseg-title">The best for you blog!</span>
                  <span className="news-maseg">Vivamus metus turpis, bibendum vitae euismod.The best for you blog!<br/></span>
                </div>
                <div className="news-data-maseg">
                  <div className="news-data">
                    <span>APR  05 </span><br/>
                  </div>
                  <span className="news-maseg-title">What an ecommerce theme!</span>
                  <span className="news-maseg">Vulputate vel nibh. Class aptent taciti sociosqu ad litora
                  </span>
                </div>
                <div className="news-data-maseg">
                  <div className="news-data">
                    <span>APR  15 </span>
                  </div>
                  <span className="news-maseg-title">The best for you blog!</span>
                  <span className="news-maseg">Vivamus metus turpis, bibendum vitae euismod.The best for you blog!<br/></span>
                </div>
                <div className="news-data-maseg">
                  <div className="news-data">
                    <span>APR  20 </span><br/>
                  </div>
                  <span className="news-maseg-title">What an ecommerce theme!</span>
                  <span className="news-maseg">Vulputate vel nibh. Class aptent taciti sociosqu ad litora
                  </span>
                </div>
                <div className="news-data-maseg">
                  <div className="news-data">
                    <span>MAY  30 </span><br/>
                  </div>
                  <span className="news-maseg-title">What an ecommerce theme!</span>
                  <span className="news-maseg">Vulputate vel nibh. Class aptent taciti sociosqu ad litora
                  </span>
                </div>
              </div>
            </Col>
          <Col xsHidden smHidden mdHidden lg={1}></Col>
          </Row>
       </div>
    )
  }
}
