import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import ContentNewTitleMellow from './Mellow/ContentNewTitleMellow.js';
import ContentBestTitleMellow from './Mellow/ContentBestTitleMellow.js';

 class Mellow extends React.Component{
  constructor(props){
		super(props);
  }

  render() {
    return (
      <div>
        <ContentNewTitleMellow/>
        <ContentBestTitleMellow/>
      </div>
    )
  }
}

export default connect(function(store) {
  return {
    projectReducer: store
  }
})(Mellow);




// 	this.state ={
// 		page: "pink"
// 	}
// this.SelectNav = this.SelectNav.bind(this);
//
// }
//
//
//
//   SelectNav(val) {
// 	console.log("переход на страницу", val)
// 	this.setState({
// 		page:val
// 	});
// }

  //     <div>
  //     {
	// 				(() => {
   //
	// 					switch(this.state.page) {
	// 						case "pink":
	// 							return <Pink onClick={this.SelectNav.bind(this, 'pink')}/>;
	// 						case "field":
	// 							return <Field onClick={this.SelectNav.bind(this, 'field')}/>;
	// 						case "prada":
	// 							return <Prada onClick={this.SelectNav.bind(this, 'prada')}/>;
	// 						case "casadei":
	// 							return <Casadei onClick={this.SelectNav.bind(this, 'casadei')}/>;
  //             case "mellow":
	// 							return <Mellow onClick={this.SelectNav.bind(this, 'mellow')}/>;
	// 				}
	// 				})()
	// 			}
   //
   //
  //         <Row>
  //           <Col xsHidden smHidden mdHidden lg={1}></Col>
  //           <Col xs={12} sm={12} md={12} lg={10}>
  //               <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
  //                <Row className="clearfix">
  //                    <Nav bsStyle="tabs" className='navCenter'>
  //                      <NavItem eventKey="first">
  //                        <span>Pink Shoes<br/></span>
  //                        <span>Now af $145,99</span>
  //                      </NavItem>
  //                      <NavItem eventKey="second">
  //                        <span>Anna Field<br/></span>
  //                        <span>Limeted Edition</span>
  //                      </NavItem>
  //                      <NavItem eventKey="third">
  //                        <span>Prada<br/></span>
  //                        <span>Sammer is coming</span>
  //                      </NavItem>
  //                      <NavItem eventKey="fourth">
  //                        <span>Casadei<br/></span>
  //                        <span>All Colors avaiable</span>
  //                      </NavItem>
  //                      <NavItem eventKey="fifth">
  //                        <span>Mellow Yellow<br/></span>
  //                        <span>Free deliveri</span>
  //                      </NavItem>
  //                    </Nav>
  //                    <SlideShow/>
  //                    <Tab.Content animation>
  //                      <Tab.Pane eventKey="first">
  //                        <TabsContentNew/>
  //                        <TabsContentBest/>
  //                      </Tab.Pane>
  //                      <Tab.Pane eventKey="second">
  //                         <TabsContentNew/>
  //                        <TabsContentBest/>
  //                      </Tab.Pane>
  //                      <Tab.Pane eventKey="third">
  //                         <TabsContentNew/>
  //                        <TabsContentBest/>
  //                      </Tab.Pane>
  //                      <Tab.Pane eventKey="fourth">
  //                        <TabsContentNew/>
  //                        <TabsContentBest/>
  //                      </Tab.Pane>
  //                      <Tab.Pane eventKey="fifth">
  //                         <TabsContentNew/>
  //                        <TabsContentBest/>
  //                      </Tab.Pane>
  //                    </Tab.Content>
  //                </Row>
  //              </Tab.Container>
  //           </Col>
  //           <Col xsHidden smHidden mdHidden lg={1}></Col>
  //         </Row>
  //      </div>
  //      )
  //    }
  //  }
