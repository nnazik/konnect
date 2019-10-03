import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../assets/css/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateEventTab from '../components/CreateEventTab';

class createEvent extends Component {

    render() {
        return (
            <div className="pusher">
                <div className="mainContainer">
                    <div className="actionBar">
                        <Header />
                    </div>
                    <div className="infoBar">
                        <div className="ui container">
                            <div className="ui grid">
                                <div className="eleven wide column middle aligned">
                                </div>
                                <div className="five wide column right aligned saveButtons hideMobile">
                                    <a href="CE-08.html" className="ui button">Save</a>
                                </div>
                                <div className="five wide column right aligned saveButtons visibleMobile">
                                    <a href="CE-08.html" className="ui button icon"><i className="save icon"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ui container">
                        <CreateEventTab/>
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default createEvent;