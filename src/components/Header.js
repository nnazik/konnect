import React, { Component } from 'react';
import ProfileImage from '../assets/img/profile.png';

class header extends Component {

    state = {
        Name: "John Dev",
        Company1: "MAS",
        Company2: "Hemas"
    }

    render() {
        return (
            <header className="hideMobile">
                <div className="ui grid">
                    <div className="three wide column center aligned middle aligned">
                        <h1><a href="dashboard-events-01.html">konnect</a></h1>
                    </div>
                    <div className="ten wide column paddingL0 paddingR0">
                        <ul className="ui five column grid stackable mainMenu">
                            <li className="column center aligned middle aligned itemMenu">
                                <a href="CE-01.html"><i className="plus circle icon"></i>Create Event</a>
                            </li>
                            <li className="column center aligned middle aligned itemMenu">
                                <a href="SKP.html"><i className="search icon"></i>Platform Search</a>
                            </li>
                            <li className="column center aligned middle aligned itemMenu">
                                <a className="inviteByEmailBtn hasModal" data-modal="inviteByEmail"><i className="user plus icon"></i>Invite Colleagues</a>
                            </li>
                            <li className="column center aligned middle aligned itemMenu">
                                <a href="AB-01.html"><i className="address book icon"></i>Manage Connections</a>
                            </li>
                            <li className="column center aligned middle aligned itemMenu">
                                <span className="displaySubMenu"><i className="building icon"></i>Manage Company</span>
                                <ul className="subMenu">
                                    <li><a href="MC.html">Company Profile</a></li>
                                    <li><a href="IC-01.html">Manage Colleagues</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="three wide column">
                        <div className="profileInfo">
                            <img src={ProfileImage} alt="" className="ui fluid image circular"></img>
                            <div className="headerCompanySelector">
                                <span className="userName">{this.state.Name}</span>
                                <div className="ui dropdown dropdownChangeCompany">
                                    <div className="text">{this.state.Company1}</div>
                                    <i className="dropdown icon"></i>
                                    <div className="menu">
                                        <div className="item">{this.state.Company1}</div>
                                        <div className="item">{this.state.Company2}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui button mini circular compact icon displaySettings">
                                <i className="cog icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default header;