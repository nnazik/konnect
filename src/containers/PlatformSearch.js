import React, { Component } from 'react';

class platformSearch extends Component {

    render() {
        return (
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
                                                    <div className="ui checkbox">
                                                        <input type="checkbox" className="hidden" tabIndex="0" />
                                                        <label>APAC</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="field">
                                                    <div className="ui checkbox">
                                                        <input type="checkbox" className="hidden" tabIndex="0" />
                                                        <label>Asia</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="field">
                                                    <div className="ui checkbox">
                                                        <input type="checkbox" className="hidden" tabIndex="0" />
                                                        <label>Europe</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="field">
                                                    <div className="ui checkbox">
                                                        <input type="checkbox" className="hidden" tabIndex="0" />
                                                        <label>MENA</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="field">
                                                    <div className="ui checkbox">
                                                        <input type="checkbox" className="hidden" tabIndex="0" />
                                                        <label>North America</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="field">
                                                    <div className="ui checkbox">
                                                        <input type="checkbox" className="hidden" tabIndex="0" />
                                                        <label>Central America & Caribbean</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="field">
                                                    <div className="ui checkbox">
                                                        <input type="checkbox" className="hidden" tabIndex="0" />
                                                        <label>South America</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="field">
                                                    <div className="ui checkbox">
                                                        <input type="checkbox" className="hidden" tabIndex="0" />
                                                        <label>Sub-Saharan Africa</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="field">
                                                    <div className="ui checkbox">
                                                        <input type="checkbox" className="hidden" tabIndex="0" />
                                                        <label>Global</label>
                                                    </div>
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
        );
    }
}

export default platformSearch;