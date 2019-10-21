import React, { Component } from 'react';
import CompanyModel from '../CompanyModel'
import { Checkbox } from 'semantic-ui-react'
import EventClientToggle from '../ui/EventClientToggle'
import EventClientCompanyCard from '../EventClientCompanyCard'
import EventClientContactCard from '../EventClientContactCard'

class EventClient extends Component {

    state = {
        KCP_Name: 'Steve jobs',
        KIP_Name: 'Apple co',
        Date: '2019/10/25',
        CreateTime: '09.00 a.m',
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
            <form className="ui form">
                <div className="ui grid stackable">
                    <div className="seven wide column">
                        <div className="companyContainer marginB20">
                            <div className="field checkboxOnHeader">
                                <div className="ui dividing header">
                                    <h3>Client Company <i className="globe icon"></i></h3>
                                </div>
                                <Checkbox className="hidden" label="My company" />
                            </div>
                            {
                                (this.props.data == 'Save') ? <div className="kcpCardContainer"><EventClientCompanyCard /></div> :
                                    <div className="ui grid center aligned">
                                        <div className="sixteen wide column">
                                            <CompanyModel type="client" />
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className="contactsContainer">
                            <div className="ui dividing header">
                                <h3>Client Contacts <i className="globe icon"></i></h3>
                            </div>
                            {
                                (this.props.data == 'Save') ? <div className="kipCardContainer"><EventClientContactCard /></div> :
                                    <div className="ui grid center aligned">
                                        <div className="sixteen wide column">
                                            <div className="ui basic button blue fluid addContacts hasModal disabled" data-modal="contacts">
                                                <i className="plus circle icon"></i>Add Contact
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="nine wide column">
                        <div className="ui dividing header">
                            <h3>Event Details <i className="globe icon"></i></h3>
                        </div>
                        <div className="field required">
                            <label>Event Title</label>
                            <div className={this.state.Editable}>
                                <input type="text" name="" placeholder="Event Title" />
                            </div>
                        </div>
                        <div className={this.state.Editable}>
                            <label>Event Description</label>
                            <div className="textarea" contentEditable=""></div>
                        </div>
                        <div className="field">
                            <EventClientToggle />
                        </div>
                        {
                            (this.props.data == 'Save') ? <div><div className="ui dividing header">
                                <h3>Client Internal Notes <i className="building icon"></i></h3>
                            </div>
                                <div className={this.state.Editable}>
                                    <div className="textarea" contentEditable="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsum aut sit modi sequi voluptatem, a quam beatae, sapiente blanditiis id maxime! In reiciendis nemo illo tempora iusto facere
                                        minus!
                                    </div>
                                </div>
                            </div> : <div></div>
                        }

                    </div>
                    <div className="sixteen wide column saveButtons paddingT0">
                        <div className="ui divider"></div>
                        <div className="ui grid stackable">
                            <div className="ten wide column middle aligned">
                                {
                                    (this.props.data == 'Save') ? <div> <div className="ui circular compact mini basic button confirmRemove hasModal" data-modal="removeModal"><i className="trash alternate icon"></i> Delete Event</div>
                                        &nbsp;&nbsp;&nbsp;Event created by {this.state.KIP_Name} from {this.state.KCP_Name}, {this.state.Date} {this.state.CreateTime}</div>
                                        : <div></div>
                                }
                            </div>
                            <div className="six wide column right aligned hideMobile">
                                {
                                    (this.props.data == 'Save') ? <div><div className="ui button basic blue icon"><i className="file pdf icon"></i></div>
                                        <div className="ui button triggerEditableOptions">Edit</div></div> : <div className="ui button hasModal" data-modal="inviteModal">Save & Invite</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default EventClient;