import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../assets/css/main.css';
import proImg from '../../assets/img/joe.jpg';

class ManageConnectionPeople extends Component {
    state = {
        Name: "John Dev",
        Headline: "Testing Data"
    }
    render() {
        return (
            <div>
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
        );
    }
}

export default ManageConnectionPeople;