import React, { Component } from 'react';
import CompanyModel from '../CompanyModel';
import { Checkbox } from 'semantic-ui-react';
import EventClientCompanyCard from '../EventClientCompanyCard'
import EventClientContactCard from '../EventClientContactCard'

class EventClient extends Component {

    state = {
        KCP_Name: 'Steve jobs',
        KCP_Name: 'Apple co',
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
                                    <h3>Event Management Company <i className="icon globe"></i></h3>
                                </div>
                                <Checkbox className="hidden" label="My company" />
                            </div>
                            {
                                (this.props.data == 'Save') ? <div className="kcpCardContainer"><EventClientCompanyCard /></div> :
                                    <div className="ui grid center aligned">
                                        <div className="sixteen wide column">
                                            <CompanyModel type="manager" />
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className="contactsContainer">
                            <div className="ui dividing header">
                                <h3>Event Management Contacts <i className="icon globe"></i></h3>
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
                            <h3>Event Management Requirements <i className="icon globe"></i></h3>
                        </div>
                        <div className={this.state.Editable}>
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