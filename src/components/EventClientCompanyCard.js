import React, { Component } from 'react';
import proImage from '../assets/img/elliot.jpg'

class EventClientContactCard extends Component {

    state={
        CompanyName:'Apple co.'
    }

    render() {
        return (
            <div className="ui one column grid">
            <div className="column">
                <div className="ui fluid card">
                    <div className="content">
                        <img className="right floated mini ui image" alt="" src={proImage}/>
                        <div className="header">
                            <a href="/VCP.html" target="">{this.state.CompanyName}</a>
                        </div>
                        <div className="meta">
                            <a href="https://goo.gl/maps/n4DPECjGtgno53FL9" target=""><i className="map marker alternate icon"></i>Sydney</a><span>|</span><i className="phone icon"></i>9876 5432
                        </div>
                    </div>
                    <div className="extra content editableObject">
                        <div className="ui grid">
                            <div className="ten wide column">

                            </div>
                            <div className="six wide column right aligned">
                                <div className="ui circular compact mini basic button confirmRemove hasModal" data-modal="removeModal"><i className="trash alternate icon"></i>Remove</div>
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