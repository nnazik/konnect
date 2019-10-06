import React, { Component } from 'react';
import imgkcp2 from '../assets/img/elliot.jpg'

class CreateKenetProfile2 extends Component {
    state = {
        isCompanyJoin: true


    }

    onClickHandle = (e) => {
        this.props.CompanyJoin(true)
    }


    render() {
        return (
            <form className="ui form">
                <div className="ui stacked">
                    <div className="ui grid">
                        <div className="sixteen wide column">
                            <p>To complete your profile, you need to be associated with a company.</p>
                            <p className="limitWidth">Good news! A company profile already exists for a company with your email domain. You can request to join it below.</p>
                        </div>
                    </div>
                    <div className="marginB20"></div>
                    <div className="kcpCardContainer">
                        <div className="ui  grid">
                            <div className="column">
                                <div className="ui fluid card">
                                    <div className="content left aligned">
                                        <img alt="" className="right floated mini ui image" src={imgkcp2} />
                                        <div className="header">
                                            Company Name
                                        </div>
                                        <div className="meta">
                                            <a href="https://goo.gl/maps/n4DPECjGtgno53FL9" target=""><i className="map marker alternate icon"></i>Sydney</a><span>|</span><i className="phone icon"></i>9876 5432
                                        </div>
                                        <div className="description">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                    </div>
                                    <div className="extra content" >
                                        <div className="ui grid">
                                            <div className="sixteen wide column">
                                                <div className="ui button" onClick={this.onClickHandle}>Request to Join</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ui grid">
                        <div className="sixteen wide column">
                            <p className="limitWidth">If this is not the company you wish to associate with you can search for an alternative or create a new company.</p>
                            <div className="twoButtonsSet">
                                <div className="ui button small basic blue">Sole Trader/Proprietor</div>
                                <div className="ui button small basic blue">Incorporated Company</div>
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

export default CreateKenetProfile2;