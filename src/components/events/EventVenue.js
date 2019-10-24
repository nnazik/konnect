import React, { Component } from 'react';
import VenueAccordion from '../VenueAccordion'

class EventVenue extends Component {


    state = {
        Editable: 'field'
    }

    componentDidUpdate() {
        if (this.props.data === 'Save') {
            if (this.state.Editable === 'field') {
                this.setState({ Editable: 'field disabled editable' })
            }
        }
    }

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
                                <div className={this.state.Editable}>
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
                            <div className="insideAccordionContainer">
                                {
                                    (this.props.data=='Save') ? <div className="ui selection dropdown">
                                        <div className="text"><i className="ui icon circle yellow"></i>None Allocated</div>
                                    </div> : <div></div>
                                }
                                <VenueAccordion status={this.props.data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventVenue;