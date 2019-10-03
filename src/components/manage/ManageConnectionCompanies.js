import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../assets/css/main.css';
import proImg from '../../assets/img/joe.jpg';

class ManageConnectionCompanies extends Component {
    state = {
        Name: "John Dev",
        Headline: "Testing Data"
    }
    render() {
        return (
            <div>
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
        );
    }
}

export default ManageConnectionCompanies;