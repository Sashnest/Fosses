import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import Switch from './SelectNav/Switch.js';

class NavTabs extends React.Component{

  render() {
    return (
      <div className='container-fluid nav-center' >
          <Row>
            <Col xsHidden mdHidden mdHidden lg={1}></Col>
            <Col xs={12} md={12} md={12} lg={10}>
              <Row>
                <div>
                  <div className="card">
                    <div className="card-block">
                      <div className="form-header bg-primary ap-header-ul">
                        <Switch click={this.click}/>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
            <Col xsHidden mdHidden mdHidden lg={1}></Col>
          </Row>
        </div>
      )
    }
  }

  export default connect(function(store) {
	return {
		projectReducer: store
  }
})(NavTabs);




          // <Row>
          //   <Col xsHidden smHidden mdHidden lg={1}></Col>
          //   <Col xs={12} sm={12} md={12} lg={10}>
          //       <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
          //        <Row className="clearfix">
          //            <Nav bsStyle="tabs" className='navCenter'>
          //              <NavItem eventKey="first">
          //                <span>Pink Shoes<br/></span>
          //                <span>Now af $145,99</span>
          //              </NavItem>
          //              <NavItem eventKey="second">
          //                <span>Anna Field<br/></span>
          //                <span>Limeted Edition</span>
          //              </NavItem>
          //              <NavItem eventKey="third">
          //                <span>Prada<br/></span>
          //                <span>Sammer is coming</span>
          //              </NavItem>
          //              <NavItem eventKey="fourth">
          //                <span>Casadei<br/></span>
          //                <span>All Colors avaiable</span>
          //              </NavItem>
          //              <NavItem eventKey="fifth">
          //                <span>Mellow Yellow<br/></span>
          //                <span>Free deliveri</span>
          //              </NavItem>
          //            </Nav>
          //            <SlideShow/>
          //            <Tab.Content animation>
          //              <Tab.Pane eventKey="first">
          //                <TabsContentNew/>
          //                <TabsContentBest/>
          //              </Tab.Pane>
          //              <Tab.Pane eventKey="second">
          //                 <TabsContentNew/>
          //                <TabsContentBest/>
          //              </Tab.Pane>
          //              <Tab.Pane eventKey="third">
          //                 <TabsContentNew/>
          //                <TabsContentBest/>
          //              </Tab.Pane>
          //              <Tab.Pane eventKey="fourth">
          //                <TabsContentNew/>
          //                <TabsContentBest/>
          //              </Tab.Pane>
          //              <Tab.Pane eventKey="fifth">
          //                 <TabsContentNew/>
          //                <TabsContentBest/>
          //              </Tab.Pane>
          //            </Tab.Content>
          //        </Row>
          //      </Tab.Container>
          //   </Col>
          //   <Col xsHidden smHidden mdHidden lg={1}></Col>
          // </Row>
