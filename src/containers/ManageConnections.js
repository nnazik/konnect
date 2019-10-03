import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ManageConnectionTab from  '../components/ManageConnectionTab';

class manageConnections extends Component {

    state = {
        Name: "John Dev",
        Headline: "Testing Data"
    }

    render() {
        return (
            <div className="pusher">
                <div className="mainContainer">
                    <div className="actionBar">
                        <Header />
                    </div>
                    <div className="mainContent">
                        <div className="ui container">
                            <div className="ui grid">
                                <div className="sixteen wide column maxWidth">
                                    <div className="ui grid">
                                        <div className="sixteen wide column left aligned">
                                            <h2>Manage Connections</h2>
                                        </div>
                                    </div>
                                    <div className="ui segment">
                                        <form className="ui form">
                                            <div className="ui grid">
                                                <div className="sixteen wide column left aligned">
                                                    <p>Connections are automatically made as you create events and invite external companies and people into events or when your company and colleagues are invited into an event.</p>
                                                    <p>You can also search the Konnect platform for profiles and star them as favourites.</p>
                                                    <div className="ui search searchCompanyAndPeople">
                                                        <div className="ui fluid icon input">
                                                            <input className="prompt" type="text" placeholder="Search" />
                                                            <i className="search icon"></i>
                                                        </div>
                                                        <div className="results"></div>
                                                    </div>
                                                </div>
                                                <div className="sixteen wide column left aligned">
                                                    <h3 className="ui dividing header">Address Book</h3>
                                                    <div className="abPeopleCompanies">
                                                      <ManageConnectionTab/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default manageConnections;