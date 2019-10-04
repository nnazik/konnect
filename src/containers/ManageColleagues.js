import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../assets/css/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileImg1 from '../assets/img/elliot.jpg';

class ManageColleagues extends Component {

    state = {
        Name: 'Steve jobs'
    }

    render() {
        return (
            <div className="pusher">
                <div className="mainContainer">
                    <div className="actionBar">
                        <Header />
                    </div>
                    <div className="mainContent">
                        <div className="ui container">
                            <div className="ui grid">
                                <div className="sixteen wide column">
                                    <div className="ui grid stackable">
                                        <div className="ten wide column left aligned">
                                            <h2>Manage Colleagues</h2>
                                        </div>
                                        <div className="six wide column right aligned hideMobile">
                                            <button className="ui button compact hasModal" data-modal="inviteByEmail">Invite Colleagues</button>
                                        </div>
                                        <div className="sixteen wide column right aligned visibleMobile paddingT0">
                                            <button className="ui button compact fluid hasModal" data-modal="inviteByEmail">Invite Colleagues</button>
                                        </div>
                                    </div>
                                    <div className="ui segment">
                                        <form className="ui form">
                                            <div className="ui grid stackable">
                                                <div className="sixteen wide column left aligned">
                                                    <h3 className="ui dividing header">Administrators</h3>
                                                    <div className="kipCardContainer">
                                                        <div className="ui three column grid stackable">
                                                            <div className="column">
                                                                <div className="ui mini form">
                                                                    <div className="field">
                                                                        <input placeholder="Position" type="text" />
                                                                    </div>
                                                                </div>
                                                                <div className="ui fluid card">
                                                                    <div className="content">
                                                                        <img className="right floated mini ui image circular" alt="" src={ProfileImg1} />
                                                                        <div className="header">
                                                                            <a href="/VPP.html" target="">{this.state.Name}</a>
                                                                        </div>
                                                                        <div className="meta">
                                                                        </div>
                                                                        <div className="description">
                                                                            mail@mail.com<br></br>
                                                                            1234 5678
                                                                        </div>
                                                                    </div>
                                                                    <div className="extra content">
                                                                        <div className="ui grid">
                                                                            <div className="ten wide column middle aligned">
                                                                                <div className="field">
                                                                                    <div className="ui toggle checkbox checked">
                                                                                        <input type="checkbox" name="" className="hidden" checked="checked" />
                                                                                        <label>Administrator</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="six wide column right aligned">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sixteen wide column">
                                                    <h3 className="ui dividing header">Company Colleagues</h3>
                                                    <div className="kipCardContainer">
                                                        <div className="ui three column grid stackable">
                                                            <div className="column">
                                                                <div className="ui mini form">
                                                                    <div className="field">
                                                                        <input placeholder="Position" type="text" />
                                                                    </div>
                                                                </div>
                                                                <div className="ui fluid card">
                                                                    <div className="content">
                                                                        <img className="right floated mini ui image circular" alt="" src={ProfileImg1} />
                                                                        <div className="header">
                                                                            <a href="/VPP.html" target="">{this.state.Name}</a>
                                                                        </div>
                                                                        <div className="meta">

                                                                        </div>
                                                                        <div className="description">
                                                                            mail@mail.com<br></br>
                                                                            1234 5678
                                                                        </div>
                                                                    </div>
                                                                    <div className="extra content">
                                                                        <div className="ui grid">
                                                                            <div className="ten wide column middle aligned">
                                                                                <div className="field">
                                                                                    <div className="ui toggle checkbox">
                                                                                        <input type="checkbox" name="" className="hidden" />
                                                                                        <label>Administrator</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="six wide column right aligned">
                                                                                <div className="ui circular compact mini basic icon button confirmRemove hasModal" data-modal="removeModal"><i className="trash icon"></i></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sixteen wide column">
                                                    <h3 className="ui dividing header">Join Requests Pending Approval</h3>
                                                    <div className="kipCardContainer">
                                                        <div className="ui three column grid stackable">
                                                            <div className="column">
                                                                <div className="ui fluid card">
                                                                    <div className="content">
                                                                        <img className="right floated mini ui image circular" alt="" src={ProfileImg1} />
                                                                        <div className="header">
                                                                            <a href="/VPP.html" target="">{this.state.Name}</a>
                                                                        </div>
                                                                        <div className="meta">
                                                                        </div>
                                                                        <div className="description">
                                                                            mail@mail.com<br></br>
                                                                            1234 5678
                                                                        </div>
                                                                    </div>
                                                                    <div className="extra content">
                                                                        <div className="ui two buttons">
                                                                            <div className="ui basic green button compact">Approve</div>
                                                                            <div className="ui basic red button compact">Decline</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sixteen wide column">
                                                    <h3 className="ui dividing header">Invites Pending Activation</h3>
                                                    <div className="kipCardContainer">
                                                        <div className="ui three column grid inactive stackable">
                                                            <div className="column">
                                                                <div className="ui fluid card">
                                                                    <div className="content">
                                                                        <img className="right floated mini ui image circular" alt="" src={ProfileImg1} />
                                                                        <div className="header">
                                                                            <a href="/VPP.html" target="">{this.state.Name}</a>
                                                                        </div>
                                                                        <div className="meta">

                                                                        </div>
                                                                        <div className="description">
                                                                            mail@mail.com<br></br>
                                                                            1234 5678
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sixteen wide column saveButtons paddingT0">
                                                    <div className="ui divider"></div>
                                                    <div className="ui grid">
                                                        <div className="sixteen wide column right aligned">
                                                            <div className="ui button">Save</div>
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
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default ManageColleagues;