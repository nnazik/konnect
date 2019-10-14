import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../assets/css/main.css';
import VenueAccordion from '../VenueAccordion'

class EventVenue extends Component {

    render() {
        return (
            <div>
                <form className="ui form">
                    <div className="ui grid">
                        <div className="sixteen wide column">
                            <div className="companyContainer marginB20">
                                <div className="ui dividing header">
                                    <h3>Notes to All Venues <i className="cog icon"></i><i className="sitemap icon"></i><i className="map marker alternate icon"></i></h3>
                                </div>
                                <div className="field">
                                    <div className="textarea" contentEditable=""></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="ui grid">
                    <div className="sixteen wide column">
                        <div className="marginT10"></div>
                        <div className="ui button compact addNewVenue addToPanel"><i className="plus circle icon"></i><span className="hideMobile">Add Venue</span></div>
                        
                        <h3 id="venuesAnchor" className="ui dividing header">Venues</h3>
                        <div className="ui styled fluid accordion parentAccordion parentAccordionVenue">
                            <VenueAccordion/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventVenue;