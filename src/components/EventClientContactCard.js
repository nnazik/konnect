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
            <div class="ui one column grid stackable">
                <div class="column">
                    <div class="contactRole">{this.state.ContactLabel} <div class="ui circular compact mini basic icon button editProfileBtn editableObjectHidden inactive hasModal" data-modal="editProfile"><i class="pencil alternate icon"></i></div>
                    </div>
                    <div class="ui fluid card">
                        <div class="content">
                            <img class="right floated mini ui image" alt="" src={ProImage} />
                            <div class="header">
                                <a href="/VPP.html" target="_blank">{this.state.CompanyName}</a>
                            </div>
                            <div class="meta">
                                {this.state.Position}
                            </div>
                            <div class="description">
                                mail@mail.com<br></br>
                                1234 5678
                            </div>
                        </div>
                        <div class="extra content editableObject">
                            <div class="ui grid">
                                <div class="eight wide column">

                                </div>
                                <div class="eight wide column right aligned">
                                    <div class="ui circular compact mini basic button confirmRemove hasModal" data-modal="removeModal"><i class="trash alternate icon"></i>Remove</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventClientContactCard;