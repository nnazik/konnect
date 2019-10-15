import React, { Component } from 'react';
import TimeWindowAccordion from '../../components/TimeWindowAccordion';
import ExhibitorAccordion from '../../components/ExhibitorAccordion';

class EventExhibitors extends Component {

    state = {
        Venue: 'USA',
        City: 'Newyork',
        EventID: 12012
    }

    render() {
        return (
            <div>
                <div className="ui top attached tabular menu">
                    <a className="item active" data-tab="exhibitors/1"><i className="map marker alternate icon"></i><span className="hideMobile">{this.state.Venue}, {this.state.City}</span></a>
                    <a className="item" data-tab="exhibitors/2"><i className="map marker alternate icon"></i><span className="hideMobile">{this.state.Venue}, {this.state.City}</span></a>
                </div>
                <div className="ui bottom attached tab segment thirdNest active" data-tab="exhibitors/1">
                    <h3 className="visibleMobile">{this.state.Venue}, {this.state.City}</h3>
                    <form className="ui form">
                        <div className="ui grid stackable">
                            <div className="seven wide column">
                                <div className="ui dividing header">
                                    <h3>Notes to All Exhibitors <i className="cog icon"></i><i className="sitemap icon"></i><i className="users icon"></i></h3>
                                </div>
                                <div className="field">
                                    <div className="textarea" contentEditable=""></div>
                                </div>
                            </div>
                            <div className="nine wide column">
                                <div className="timeWindowsContainer">
                                    <div className="ui dividing header">
                                        <h3>Exhibition Time windows <i className="cog icon"></i><i className="sitemap icon"></i><i className="users icon"></i></h3>
                                    </div>
                                    <TimeWindowAccordion method={"venue"} />
                                </div>
                            </div>
                            <div className="sixteen wide column">
                                <div className="ui dividing header">
                                    <h3>Request to Join as Exhibitor URL</h3>
                                </div>
                                <div className="field">
                                    <p>
                                        Use this URL on your event website or email to exhibitor prospects to allow them to join the event as exhibitors. <br></br>
                                        <a href="">https://www.konnect.events.com?exhjoin={this.state.EventID}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="ui grid">
                        <div className="sixteen wide column">
                            <div className="marginB10"></div>
                            <div className="ui button compact addNewExhibitor addToPanel"><i className="plus circle icon"></i><span className="hideMobile">Add Exhibitor</span></div>
                            <h3 id="exhibitorsAnchor" className="ui dividing header">Exhibitors</h3>
                            <div className="ui styled fluid accordion parentAccordion parentAccordionExhibitor">
                                <ExhibitorAccordion />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui bottom attached tab segment thirdNest" data-tab="exhibitors/2">
                    <h3 className="visibleMobile">{this.state.Venue}, {this.state.City}</h3>
                    CONTENT
            </div>
            </div>
        );
    }
}

export default EventExhibitors;