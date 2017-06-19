import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';


export default class Logo extends React.Component{

  render(){
    return(
      <div className='container-fluid wraper-logo'>
          <Row>
            <Col xsHidden smHidden mdHidden lg={1}></Col>
            <Col xs={12} sm={10} md={8} lg={8}>
              <div className='logo'>
                <a  href="#">FOOSESHOES</a>
              </div>
            </Col>
            <Col xsHidden smHidden md={2} lg={2} className='wraper-login'>
                <div className='login'>
                  <a href="#">LOGIN</a>
                    <span>or</span>
                  <a href="#">REGISTER</a>
                </div>
            </Col>
            <Col xsHidden smHidden mdHidden lg={1}></Col>
          </Row>
       </div>
     )
   }
 }

{/* <Grid className='wraper-logo'></Grid>

<FormGroup>
  <InputGroup>
   <FormControl type="text" placeholder="Search..."/>
   <InputGroup.Addon>
     <Glyphicon glyph="search"/>
   </InputGroup.Addon>
 </InputGroup>
</FormGroup> */}
