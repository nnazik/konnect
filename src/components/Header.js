import React, { Component } from 'react';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';
import ProfileImage from '../assets/img/profile.png';
import { Link } from 'react-router-dom';
import InviteColleaguesModel from './InviteColleaguesModel';
import ChangeCompanyDropdown from './ChangeCompanyDropdown';

class header extends Component {

    state = {
        Name: "John Dev",
        Company1: "MAS",
        Company2: "Hemas"
    }

    handleProfileToggle=()=>{
        const el = findDOMNode(this.refs.ProfileToggle);
        $(el).slideToggle();
    }

    handleManageCompanyToggle=()=>{
        const el = findDOMNode(this.refs.CompanyToggle);
        $(el).slideToggle();
    }

    render() {
        return (
            <header className="hideMobile">
                <div className="ui grid">
                    <div className="three wide column center aligned middle aligned">
                        {/* <h1><a href="dashboard-events-01.html">konnect</a></h1> */}
                        <h1><Link to="/dashboard">konnect</Link></h1>
                    </div>
                    <div className="ten wide column paddingL0 paddingR0">
                        <ul className="ui five column grid stackable mainMenu">
                            <li className="column center aligned middle aligned itemMenu">
                                <Link to="/createevent"><i className="plus circle icon"></i>Create Event</Link>
                            </li>
                            <li className="column center aligned middle aligned itemMenu">
                                {/* <a href="SKP.html"><i className="search icon"></i>Platform Search</a> */}
                                <Link to="/platformsearch"><i className="search icon"></i>Platform Search</Link>
                            </li>
                            <li className="column center aligned middle aligned itemMenu">
                                {/* <a className="inviteByEmailBtn hasModal" data-modal="inviteByEmail"><i className="user plus icon"></i>Invite Colleagues</a> */}
                                <InviteColleaguesModel Name="Nazik" AdminName="David" CompanyName="Apple.co"/>
                            </li>
                            <li className="column center aligned middle aligned itemMenu">
                                {/* <a href="AB-01.html"><i className="address book icon"></i>Manage Connections</a> */}
                                <Link to="/manageconnection"><i className="address book icon"></i>Manage Connections</Link>
                            </li>
                            <li onClick={this.handleManageCompanyToggle} className="column center aligned middle aligned itemMenu">
                                <span className="displaySubMenu"><i className="building icon"></i>Manage Company</span>
                                <ul ref="CompanyToggle" className="subMenu">
                                    <li><Link to="/companyprofile">Company Profile</Link></li>
                                    <li><Link to="/managecolleague">Manage Colleagues</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="three wide column">
                        <div className="profileInfo">
                            <img src={ProfileImage} alt="" className="ui fluid image circular"></img>
                            <div className="headerCompanySelector">
                                <span className="userName">{this.state.Name}</span>
                                <ChangeCompanyDropdown/>
                                {/* <div className="ui dropdown dropdownChangeCompany">
                                    <div className="text">{this.state.Company1}</div>
                                    <i className="dropdown icon"></i>
                                    <div className="menu">
                                        <div className="item">{this.state.Company1}</div>
                                        <div className="item">{this.state.Company2}</div>
                                    </div>
                                </div> */}
                            </div>
                            <div onClick={this.handleProfileToggle} className="ui button mini circular compact icon displaySettings">
                                <i className="cog icon"></i>
                            </div>
                        </div>
                        <ul ref="ProfileToggle" className="subMenu">
                            <li><a href="MP.html">Edit Profile</a></li>
                            <li><Link to="/">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default header;