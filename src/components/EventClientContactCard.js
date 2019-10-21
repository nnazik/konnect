import React, { Component } from 'react';
import ProImage from '../assets/img/elliot.jpg'

class EventClientContactCard extends Component {

    state = {
        ContactLabel: '0718564356',
        CompanyName: 'John dev',
        Position: 'Manager'
    }

    render() {
        return (
            <div className="ui one column grid stackable">
                <div className="column">
                    <div className="contactRole">{this.state.ContactLabel} <div className="ui circular compact mini basic icon button editProfileBtn editableObjectHidden inactive hasModal" data-modal="editProfile"><i className="pencil alternate icon"></i></div>
                    </div>
                    <div className="ui fluid card">
                        <div className="content">
                            <img className="right floated mini ui image" alt="" src={ProImage} />
                            <div className="header">
                                <a href="/VPP.html" target="">{this.state.CompanyName}</a>
                            </div>
                            <div className="meta">
                                {this.state.Position}
                            </div>
                            <div className="description">
                                mail@mail.com<br></br>
                                1234 5678
                            </div>
                        </div>
                        
                        {/* <div className="extra content editableObject">
                            <div className="ui grid">
                                <div className="eight wide column">
                                </div>
                                <div className="eight wide column right aligned">
                                    <div className="ui circular compact mini basic button confirmRemove hasModal" data-modal="removeModal"><i className="trash alternate icon"></i>Remove</div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default EventClientContactCard;