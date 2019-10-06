import React, { Component } from 'react';
import imgkcp3 from '../assets/img/elliot.jpg'
import {Link} from "react-router-dom";


class CreateKenetProfile3 extends Component {

    render() { 
        return (  
            <form className="ui form">
            <div className="ui stacked">
                <div className="ui grid">
                    <div className="sixteen wide column">
                        <p>To complete your profile, you need to be associated with a company.</p>
                        <h3>Search for a company to join or create a new one below</h3>
                    </div>
                </div>
                <div className="ui grid">
                    <div className="sixteen wide column limitWidthSearch paddingT0">
                        <div className="field">
                            <div className="ui search searchCompany">
                                <div className="ui fluid icon input">
                                    <input className="prompt" type="text" placeholder="Search"/>
                                    <i className="search icon"></i>
                                </div>
                                <div className="results"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="kcpCardContainer">
                    <div className="ui  grid">
                        <div className="column">
                            <div className="ui fluid card">
                                <div className="content left aligned">
                                    <img className="right floated mini ui image" src={imgkcp3}/>
                                    <div className="header">
                                        Company Name
                                    </div>
                                    <div className="meta">
                                        <a href="https://goo.gl/maps/n4DPECjGtgno53FL9" target="_blank"><i className="map marker alternate icon"></i>Sydney</a><span>|</span><i className="phone icon"></i>9876 5432
                                    </div>
                                    <div className="description">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    </div>
                                </div>
                                <div className="extra content">
                                    <div className="ui grid">
                                        <div className="sixteen wide column">
                                            <p>&nbsp;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui grid">
                    <div className="sixteen wide column paddingT0">
                        <div className="ui button">Request to Join Selected</div>
                    </div>
                </div>
                <div className="ui grid">
                    <div className="sixteen wide column">
                        <h3>Create a new company</h3>
                        <div className="twoButtonsSet">
                            <Link as={Link} to = '/CompanyTitle/0' className="ui button basic small blue" >Sole Trader/Proprietor</Link>
                            <Link as ={Link} to ='/CompanyTitle/1' className="ui button basic small blue">Incorporated Company</Link>
                        </div>
                    </div>
                    <div className="sixteen wide column paddingT0 paddingB0">
                        <div className="ui divider"></div>
                    </div>
                    <div className="sixteen wide column left aligned">
                        <p className="smallText">An associated company acts as an account holder for your profile. Your profile can be associated with multiple companies, but each personal profile must always be associated with at least one company.</p>
                        <p className="smallText">This is because events are "owned" by companies not individuals and access to events is controlled through company permissions.</p>
                    </div>
                </div>
            </div>
        </form>
        );
    }
}
 
export default CreateKenetProfile3;