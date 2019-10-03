import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../assets/css/main.css';

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
                            <div className="title active">
                                <div className="ui grid">
                                    <div className="sixteen wide column middle aligned">
                                        <i className="dropdown icon"></i>Venue 1
                                                    </div>
                                </div>
                            </div>
                            <div className="content active">
                                <form className="ui form">
                                    <div className="ui grid stackable">
                                        <div className="seven wide column">
                                            <div className="companyContainer marginB20">
                                                <div className="ui dividing header">
                                                    <h3>Venue Company <i className="globe icon"></i></h3>
                                                </div>
                                                <div className="kcpCardContainer">
                                                </div>
                                                <div className="ui grid center aligned">
                                                    <div className="sixteen wide column">
                                                        <div className="ui button basic blue fluid addClient hasModal" data-modal="client"><i className="plus circle icon"></i>Add Venue</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contactsContainer">
                                                <div className="ui dividing header">
                                                    <h3>Venue Contacts <i className="globe icon"></i></h3>
                                                </div>
                                                <div className="kipCardContainer">
                                                </div>
                                                <div className="ui grid stackable center aligned">
                                                    <div className="sixteen wide column">
                                                        <div className="ui basic button blue fluid addContacts hasModal disabled" data-modal="contacts">
                                                            <i className="plus circle icon"></i>Add Contact
                                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nine wide column">
                                            <div className="field">
                                                <div className="timeWindowsContainer">
                                                    <div className="ui dividing header">
                                                        <h3>Venue Time Windows <i className="globe icon"></i></h3>
                                                    </div>
                                                    <div className="ui styled accordion">
                                                        <div className="title">
                                                            <div className="ui grid stackable">
                                                                <div className="sixteen wide column">
                                                                    <span className="titleMinWidth"><i className="dropdown icon"></i>Pre Event Access</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="transition visible">
                                                                <div className="item">
                                                                    <div className="ui three column grid">
                                                                        <div className="column">
                                                                            <span>Date</span>
                                                                            <div className="ui calendar datePicker">
                                                                                <div className="ui input left icon">
                                                                                    <i className="calendar icon"></i>
                                                                                    <input type="text" placeholder="Date" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="column">
                                                                            <span>Start</span>
                                                                            <div className="ui calendar startTime">
                                                                                <div className="ui input left icon">
                                                                                    <i className="time icon"></i>
                                                                                    <input type="text" placeholder="Start" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="column">
                                                                            <span>End</span>
                                                                            <div className="ui calendar endTime">
                                                                                <div className="ui input left icon">
                                                                                    <i className="time icon"></i>
                                                                                    <input type="text" placeholder="End" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ui grid">
                                                                        <div className="sixteen wide column">
                                                                            <span>Notes</span>
                                                                            <div className="textarea notes" contentEditable=""></div>
                                                                            <div className="ui circular compact mini basic button">
                                                                                <i className="plus circle icon"></i>Add Pre Event Access date
                                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="title">
                                                            <div className="ui grid stackable">
                                                                <div className="sixteen wide column">
                                                                    <span className="titleMinWidth"><i className="dropdown icon"></i>Event Time</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="transition hidden">
                                                                <div className="item">
                                                                    <div className="ui three column grid">
                                                                        <div className="column">
                                                                            <span>Date</span>
                                                                            <div className="ui calendar datePicker">
                                                                                <div className="ui input left icon">
                                                                                    <i className="calendar icon"></i>
                                                                                    <input type="text" placeholder="Date" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="column">
                                                                            <span>Start</span>
                                                                            <div className="ui calendar startTime">
                                                                                <div className="ui input left icon">
                                                                                    <i className="time icon"></i>
                                                                                    <input type="text" placeholder="Start" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="column">
                                                                            <span>End</span>
                                                                            <div className="ui calendar endTime">
                                                                                <div className="ui input left icon">
                                                                                    <i className="time icon"></i>
                                                                                    <input type="text" placeholder="End" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ui grid">
                                                                        <div className="sixteen wide column">
                                                                            <span>Notes</span>
                                                                            <div className="textarea notes" contentEditable=""></div>
                                                                            <div className="ui circular compact mini basic button">
                                                                                <i className="plus circle icon"></i>Add Event Time date
                                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="title">
                                                            <div className="ui grid stackable">
                                                                <div className="sixteen wide column">
                                                                    <span className="titleMinWidth"><i className="dropdown icon"></i>Post Event Access</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="transition">
                                                                <div className="item">
                                                                    <div className="ui three column grid">
                                                                        <div className="column">
                                                                            <span>Date</span>
                                                                            <div className="ui calendar datePicker">
                                                                                <div className="ui input left icon">
                                                                                    <i className="calendar icon"></i>
                                                                                    <input type="text" placeholder="Date" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="column">
                                                                            <span>Start</span>
                                                                            <div className="ui calendar startTime">
                                                                                <div className="ui input left icon">
                                                                                    <i className="time icon"></i>
                                                                                    <input type="text" placeholder="Start" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="column">
                                                                            <span>End</span>
                                                                            <div className="ui calendar endTime">
                                                                                <div className="ui input left icon">
                                                                                    <i className="time icon"></i>
                                                                                    <input type="text" placeholder="End" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ui grid">
                                                                        <div className="sixteen wide column">
                                                                            <span>Notes</span>
                                                                            <div className="textarea notes" contentEditable=""></div>
                                                                            <div className="ui circular compact mini basic button">
                                                                                <i className="plus circle icon"></i>Add Post Event Access date
                                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ui dividing header">
                                                <h3>Venue Requirements <i className="cog icon"></i><i className="sitemap icon"></i><i className="map marker alternate icon"></i></h3>
                                            </div>
                                            <div className="field">
                                                <div className="textarea" contentEditable=""></div>
                                            </div>

                                        </div>
                                        <div className="sixteen wide column saveButtons paddingT0">
                                            <div className="ui divider"></div>
                                            <div className="ui grid stackable">
                                                <div className="sixteen wide column right aligned">
                                                    <div className="ui button hasModal" data-modal="inviteModal">Save & Invite</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventVenue;