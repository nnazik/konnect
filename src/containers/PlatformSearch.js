import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Checkbox } from 'semantic-ui-react';

class platformSearch extends Component {

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
                                            <h2>Platform Search</h2>
                                        </div>
                                    </div>
                                    <div className="ui segment">
                                        <form className="ui form">
                                            <div className="ui grid">
                                                <div className="sixteen wide column left aligned">
                                                    <h3 className="ui dividing header">Region</h3>
                                                    <div className="ui four column grid regionOptions">
                                                        <div className="column">
                                                            <div className="field">
                                                                <Checkbox className="hidden" label="APAC" tabIndex="0" />
                                                            </div>
                                                        </div>
                                                        <div className="column">
                                                            <div className="field">
                                                                <Checkbox className="hidden" label="Asia" tabIndex="0" />
                                                            </div>
                                                        </div>
                                                        <div className="column">
                                                            <div className="field">
                                                                <Checkbox className="hidden" label="Europe" tabIndex="0" />
                                                            </div>
                                                        </div>
                                                        <div className="column">
                                                            <div className="field">
                                                                <Checkbox className="hidden" label="MENA" tabIndex="0" />
                                                            </div>
                                                        </div>
                                                        <div className="column">
                                                            <div className="field">
                                                                <Checkbox className="hidden" label="North America" tabIndex="0" />
                                                            </div>
                                                        </div>
                                                        <div className="column">
                                                            <div className="field">
                                                                <Checkbox className="hidden" label="Central America & Caribbean" tabIndex="0" />
                                                            </div>
                                                        </div>
                                                        <div className="column">
                                                            <div className="field">
                                                                <Checkbox className="hidden" label="South America" tabIndex="0" />
                                                            </div>
                                                        </div>
                                                        <div className="column">
                                                            <div className="field">
                                                                <Checkbox className="hidden" label="Sub-Saharan Africa" tabIndex="0" />
                                                            </div>
                                                        </div>
                                                        <div className="column">
                                                            <div className="field">
                                                                <Checkbox className="hidden" label="Global" tabIndex="0" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ui search searchCompanyAndPeople marginT30">
                                                        <div className="ui fluid icon input">
                                                            <input className="prompt" type="text" placeholder="Search" />
                                                            <i className="search icon"></i>
                                                        </div>
                                                        <div className="results"></div>
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

export default platformSearch;