import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Header from "../components/Header/Header";
import LandingPage from '../components/Page/LandingPage/LandingPage';

import SearchPage from '../components/Page/SearchPage/SearchPage'
// import SearchPage from "../components/SearchPage/SearchPage"
// import MainPage from "../components/MainPage/MainPage";
// import About from  "../components/About/About"
// import Portfolio from  "../components/Portfolio/Portfolio"
// import Contact from  "../components/Contact/Contact"
// import Error from  "../components/Error/Error"

// import history from '../history';
// import createBrowserHistory from 'history/createBrowserHistory'

const Layout = () => {
    return ( 
        // <Router history={createBrowserHistory()}>
        // <Router>
            // <Header/>
                // <Switch>
                //     {/* <Route exact path="/" component={MainPage}/>
                //     <Route exact path="/about" component={About}/>
                //     <Route exact path="/portfolio" component={Portfolio}/>
                //     <Route exact path="/contact" component={Contact}/> */}
                //     {/* <Route  component={Error}/> */}
                // </Switch>
            
        // </Router>
        <>
        <div id="ny-site-wrapper">
        <div id="ny-main-container">
            <div className="container">
        
        <Router>
        <Header/>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/search" component={SearchPage}/>
                <Route
                    render={() => (
                    <div className="error">
                        <h1>Error 404: Not Found</h1>
                        <Link to="/">Go Home</Link>
                    </div>)}
                />
            </Switch>
        </Router>
            
        </div>
        </div>
        </div>

        

        
        {/* <SearchForm/> */}
        </>
     );
}
 
export default Layout;