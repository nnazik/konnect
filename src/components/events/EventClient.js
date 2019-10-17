import React, { Component } from 'react';
import CompanyModel from '../CompanyModel';
import { Checkbox } from 'semantic-ui-react';
import EventClientToggle from '../ui/EventClientToggle'

class EventClient extends Component {

    render() {
        return (
            <form className="ui form">
                <div className="ui grid stackable">
                    <div className="seven wide column">
                        <div className="companyContainer marginB20">
                            <div className="field checkboxOnHeader">
                                <div className="ui dividing header">
                                    <h3>Client Company <i className="globe icon"></i></h3>
                                </div>
                                <Checkbox className="hidden" label="My company" />
                                <p>{this.props.data}</p>
                            </div>
                            <div className="kcpCardContainer"></div>
                            <div className="ui grid center aligned">
                                <div className="sixteen wide column">
                                    <CompanyModel type="client" />
                                </div>
                            </div>
                        </div>
                        <div className="contactsContainer">
                            <div className="ui dividing header">
                                <h3>Client Contacts <i className="globe icon"></i></h3>
                            </div>
                            <div className="kipCardContainer"></div>
                            <div className="ui grid center aligned">
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
                            <h3>Event Details <i className="globe icon"></i></h3>
                        </div>
                        <div className="field required">
                            <label>Event Title</label>
                            <div className="field">
                                <input type="text" name="" placeholder="Event Title" />
                            </div>
                        </div>
                        <div className="field">
                            <label>Event Description</label>
                            <div className="textarea" contentEditable=""></div>
                        </div>
                        <div className="field">
                            <EventClientToggle/>
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
        );
    }
}

export default EventClient;