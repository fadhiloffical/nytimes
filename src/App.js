import React, {Component} from 'react'; 

import Layout from "./container/Layout"; 
import './App.css';
// import './assets/css/bootstrap.min.css';
// import './assets/css/featherlight.css';
// // import './assets/css/fontawesome.css';
// import './assets/css/rrssb.css';
// import './assets/css/slick.css';

//


class App extends Component {
  state = {  }
  render() { 
    
    return ( 
      <div className="App">
        <Layout/>
      </div>
     );
  }
}
 

export default (App);
