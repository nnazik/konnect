import React, { Component } from 'react';
import CompanyModel from '../CompanyModel';
import { Checkbox } from 'semantic-ui-react';

class EventClient extends Component {

    render() {
        return (
            <form className="ui form">
                <div className="ui grid stackable">
                    <div className="seven wide column">
                        <div className="companyContainer marginB20">
                            <div className="field checkboxOnHeader">
                                <div className="ui dividing header">
                                    <h3>Event Management Company <i className="icon globe"></i></h3>
                                </div>
                                {/* <div className="ui checkbox">
                                    <input type="checkbox" className="hidden" tabIndex="0" />
                                    <label>My company</label>
                                </div> */}
                                <Checkbox className="hidden" label="My company"/>
                            </div>
                            <div className="ui grid center aligned">
                                <div className="sixteen wide column">
                                    {/* <div className="ui button basic blue fluid addClient hasModal" data-modal="client">
                                        <i className="plus circle icon"></i>Add Management Company
                                                        </div> */}
                                                        <CompanyModel type="manager"/>
                                </div>
                            </div>
                        </div>
                        <div className="contactsContainer">
                            <div className="ui dividing header">
                                <h3>Event Management Contacts <i className="icon globe"></i></h3>
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
                            <h3>Event Management Requirements <i className="icon globe"></i></h3>
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
        );
    }
}

export default EventClient;