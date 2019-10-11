import React, { Component } from 'react';
import CompanyModel from '../CompanyModel';
import TimeWindowAccordion from '../../components/TimeWindowAccordion';

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
                                    <TimeWindowAccordion method={"venue"}/>
                                    {/* <div className="ui styled fluid accordion parentAccordion">
                                        <div className="title">
                                            <div className="ui grid stackable">
                                                <div className="sixteen wide column">
                                                    <span className="titleMinWidth"><i className="dropdown icon"></i>Bump In</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="field transition visible">
                                                <div className="ui checkbox">
                                                    <input type="checkbox" tabIndex="0" className="hidden" />
                                                    <label>Same as venue</label>
                                                </div>
                                            </div>
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
                                                                <i className="plus circle icon"></i>Add bump-in date
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title">
                                            <div className="ui grid stackable">
                                                <div className="sixteen wide column">
                                                    <span className="titleMinWidth"><i className="dropdown icon"></i>Exhibition</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="field transition visible">
                                                <div className="ui checkbox">
                                                    <input type="checkbox" tabIndex="0" className="hidden" />
                                                    <label>Same as venue</label>
                                                </div>
                                            </div>
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
                                                                <i className="plus circle icon"></i>Add Exhibition date
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title">
                                            <div className="ui grid stackable">
                                                <div className="sixteen wide column">
                                                    <span className="titleMinWidth"><i className="dropdown icon"></i>Bump Out</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="field transition visible">
                                                <div className="ui checkbox">
                                                    <input type="checkbox" tabIndex="0" className="hidden" />
                                                    <label>Same as venue</label>
                                                </div>
                                            </div>
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
                                                                <i className="plus circle icon"></i>Add bump-out date
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
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
                                <div className="title active">
                                    <div className="ui grid">
                                        <div className="sixteen wide column middle aligned">
                                            <i className="dropdown icon"></i>Exhibitor 1
                                    </div>
                                    </div>
                                </div>
                                <div className="content active">
                                    <form className="ui form">
                                        <div className="ui grid stackable">
                                            <div className="seven wide column">
                                                <div className="companyContainer marginB20">
                                                    <div className="ui dividing header">
                                                        <h3>Exhibitor Company <i className="cog icon"></i><i className="sitemap icon"></i><i className="building icon"></i></h3>
                                                    </div>
                                                    <div className="kcpCardContainer">

                                                    </div>
                                                    <div className="ui grid center aligned">
                                                        <div className="sixteen wide column">
                                                            {/* <div className="ui button basic blue fluid addClient hasModal" data-modal="client"><i className="plus circle icon"></i>Add Exhibitor</div> */}
                                                            <CompanyModel type="exhibitor"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="contactsContainer">
                                                    <div className="ui dividing header">
                                                        <h3>Exhibitor Contacts <i className="cog icon"></i><i className="sitemap icon"></i><i className="building icon"></i></h3>
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
                                                <div className="ui dividing header">
                                                    <h3>Stand Number <i className="cog icon"></i><i className="sitemap icon"></i><i className="building icon"></i></h3>
                                                </div>
                                                <div className="field">
                                                    <input type="text" name="" placeholder="Stand Number" />
                                                </div>
                                                <div className="ui dividing header">
                                                    <h3>Notes to Specific Exhibitor <i className="cog icon"></i><i className="sitemap icon"></i><i className="building icon"></i></h3>
                                                </div>
                                                <div className="field">
                                                    <div className="textarea" contentEditable=""></div>
                                                </div>
                                                <div className="timeWindowsContainer">
                                                    <div className="ui dividing header">
                                                        <h3>Exhibitor Specific Time windows <i className="cog icon"></i><i className="sitemap icon"></i><i className="building icon"></i></h3>
                                                    </div>
                                                    <TimeWindowAccordion method={"exhibition"}/>
                                                    {/* <div className="ui styled accordion">
                                                        <div className="title">
                                                            <div className="ui grid stackable">
                                                                <div className="sixteen wide column">
                                                                    <span className="titleMinWidth"><i className="dropdown icon"></i>Bump In</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="field">
                                                                <div className="ui checkbox">
                                                                    <input type="checkbox" tabIndex="0" className="hidden" />
                                                                    <label>Same as exhibition</label>
                                                                </div>
                                                            </div>
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
                                                                                <i className="plus circle icon"></i>Add bump-in date
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
                                                            <div className="field">
                                                                <div className="ui checkbox">
                                                                    <input type="checkbox" tabIndex="0" className="hidden" />
                                                                    <label>Same as exhibition</label>
                                                                </div>
                                                            </div>
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
                                                                    <span className="titleMinWidth"><i className="dropdown icon"></i>Bump Out</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="field">
                                                                <div className="ui checkbox">
                                                                    <input type="checkbox" tabIndex="0" className="hidden" />
                                                                    <label>Same as exhibition</label>
                                                                </div>
                                                            </div>
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
                                                                                <i className="plus circle icon"></i>Add Bump Out date
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
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
                <div className="ui bottom attached tab segment thirdNest" data-tab="exhibitors/2">
                    <h3 className="visibleMobile">{this.state.Venue}, {this.state.City}</h3>
                    CONTENT
            </div>
            </div>
        );
    }
}

export default EventExhibitors;