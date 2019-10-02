import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../assets/css/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import DashboardEvent from '../containers/DashboardEvent';
//import PlatformSearch from '../containers/PlatformSearch';
import ManageConnection from '../containers/ManageConnections';

class dashboard extends Component {

    render() {
        return (
            <div className="pusher">
                <div className="mainContainer">
                    <div className="actionBar">
                        <Header/>
                    </div>
                    <div className="mainContent">
                        {/* <DashboardEvent/> */}
                        {/* <PlatformSearch/> */}
                        <ManageConnection/>
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default dashboard;