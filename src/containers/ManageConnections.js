import React, { Component } from 'react';
import proImg from '../assets/img/joe.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';

class manageConnections extends Component {

    state = {
        Name: "John Dev",
        Headline: "Testing Data"
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
                                <div className="sixteen wide column maxWidth">
                                    <div className="ui grid">
                                        <div className="sixteen wide column left aligned">
                                            <h2>Manage Connections</h2>
                                        </div>
                                    </div>
                                    <div className="ui segment">
                                        <form className="ui form">
                                            <div className="ui grid">
                                                <div className="sixteen wide column left aligned">
                                                    <p>Connections are automatically made as you create events and invite external companies and people into events or when your company and colleagues are invited into an event.</p>
                                                    <p>You can also search the Konnect platform for profiles and star them as favourites.</p>
                                                    <div className="ui search searchCompanyAndPeople">
                                                        <div className="ui fluid icon input">
                                                            <input className="prompt" type="text" placeholder="Search" />
                                                            <i className="search icon"></i>
                                                        </div>
                                                        <div className="results"></div>
                                                    </div>
                                                </div>
                                                <div className="sixteen wide column left aligned">
                                                    <h3 className="ui dividing header">Address Book</h3>
                                                    <div className="abPeopleCompanies">
                                                        <div className="ui pointing secondary menu tabsNav">
                                                            <a className="active item" data-tab="people">People</a>
                                                            <a className="item" data-tab="companies">Companies</a>
                                                        </div>
                                                        <div className="ui active tab" data-tab="people">
                                                            <div className="ui search searchPeople marginT20 marginB20">
                                                                <div className="ui fluid icon input">
                                                                    <input className="prompt" type="text" placeholder="Search" />
                                                                    <i className="search icon"></i>
                                                                </div>
                                                                <div className="results"></div>
                                                            </div>
                                                            <div className="ui three column grid stackable">
                                                                <div className="column">
                                                                    <div className="ui fluid card">
                                                                        <div className="content">
                                                                            <span className="ui blue right corner label popupNotes" data-content="Private Contact">
                                                                                <i className="address card outline icon"></i>
                                                                            </span>
                                                                            <img className="right floated mini ui image circular" alt="" src={proImg} />
                                                                            <div className="header">
                                                                                <a href="/VPP.html" target="">{this.state.Name}</a>
                                                                            </div>
                                                                            <div className="meta">
                                                                                {this.state.Headline}
                                                                            </div>
                                                                            <div className="description">
                                                                                mail@mail.com<br />
                                                                                1234 5678
                                                                </div>
                                                                        </div>
                                                                        <div className="extra content">
                                                                            <div className="ui grid">
                                                                                <div className="ten wide column">
                                                                                    <div className="ui circular compact mini basic button confirmRemove hasModal active" data-modal="removeModal"><i className="star icon"></i>Remove from connections</div>
                                                                                </div>
                                                                                <div className="six wide column right aligned">
                                                                                    <div className="ui circular compact mini basic icon button editProfileBtn"><i className="pencil alternate icon"></i></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ui tab" data-tab="companies">
                                                            <div className="ui search searchCompany marginT20 marginB20">
                                                                <div className="ui fluid icon input">
                                                                    <input className="prompt" type="text" placeholder="Search" />
                                                                    <i className="search icon"></i>
                                                                </div>
                                                                <div className="results"></div>
                                                            </div>
                                                            <div className="ui three column grid stackable">
                                                                <div className="column">
                                                                    <div className="ui fluid card">
                                                                        <div className="content">
                                                                            <span className="ui blue right corner label popupNotes" data-content="Private Contact">
                                                                                <i className="address card outline icon"></i>
                                                                            </span>
                                                                            <img className="right floated mini ui image circular" alt="" src={proImg}></img>
                                                                            <div className="header">
                                                                                <a href="/VCP.html" target="_blank">{this.state.Name}</a>
                                                                            </div>
                                                                            <div className="meta">
                                                                                <a href="https://goo.gl/maps/n4DPECjGtgno53FL9" target=""><i className="map marker alternate icon"></i>Sydney</a><span> |</span><i className="phone icon"></i>9876 5432 </div>
                                                                            <div className="description"></div>
                                                                        </div>
                                                                        <div className="extra content">
                                                                            <div className="ui grid">
                                                                                <div className="ten wide column">
                                                                                    <div className="ui circular compact mini basic button confirmRemove hasModal active" data-modal="removeModal"><i className="star icon"></i>Remove from connections</div>
                                                                                </div>
                                                                                <div className="six wide column right aligned">
                                                                                    <div className="ui circular compact mini basic icon button editProfileBtn"><i className="pencil alternate icon"></i></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
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

export default manageConnections;