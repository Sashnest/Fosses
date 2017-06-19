import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import history from "../utils/history.js";


import Pink from './SelectNav/Pink.js';
import Field from './SelectNav/Field.js';
import Prada from './SelectNav/Prada.js';
import Casadei from './SelectNav/Casadei.js';
import Mellow from './SelectNav/Mellow.js';


class NavTabsContent extends React.Component{
  constructor(props){
		super(props);
	}

  render(){
    return(
      <div>
        {
          (() => {
            switch(this.props.projectReducer.tab){
              case "pink":
                return <Pink/>;
              case "field":
                return <Field/>;
              case "prada":
                return <Prada/>;
              case "casadei":
                return <Casadei/>;
              case "mellow":
                return <Mellow/>;
              }
            })()
          }
        </div>
       )
     }
   }
   export default connect(function(store) {
   	return {
   		projectReducer: store
   	}
   })(NavTabsContent);




   // import TabsContentNewAll from './TabsContentNewAll.js';
   // import TabsContentNewStart from './TabsContentNewStart.js';
  //  {
  //    (() => {
  //      switch(this.props.projectReducer.newfoses){
  //        case "closeNew":
  //          return <TabsContentNewStart/>;
  //        case "showNew":
  //          return (
  //            <div>
  //               <TabsContentNewStart/>
  //               <TabsContentNewAll/>
  //             </div>
  //           )
  //         }
  //       })()
  //     }
