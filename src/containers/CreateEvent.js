import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateEventTab from '../components/CreateEventTab';
import { Button } from 'semantic-ui-react';
import FixedMenu from '../components/FixedMenu';
import $ from 'jquery';

class createEvent extends Component {

    state = {
        EventStatus: 'Pending',
        EventName: 'Beach Fun',
        ClientCompany: 'Apple cop.',
        Venue: 'Tokiyo',
        Date: '2019/11/15'
    }

    updateEventStatus = () => {
        this.setState({ EventStatus: 'Save' })
    }

    componentDidMount() {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 130) {
                $('.fixedMenu').addClass('active');
            } else {
                $('.fixedMenu').removeClass('active');
            }
        });
    }

    render() {
        return (
            <div className="pusher">
                <div className="mainContainer">
                    <div className="actionBar">
                        <Header />
                    </div>
                    <div class="fixedMenu">
                        <FixedMenu />
                    </div>
                    <div className="infoBar">
                        <div className="ui container">
                            <div className="ui grid">
                                {
                                    (this.state.EventStatus === 'Save') ? <div className="eleven wide column middle aligned">
                                        <div className="eventInfo"><b>{this.state.EventName}</b> for {this.state.ClientCompany} in {this.state.Venue}. {this.state.Date}</div>
                                    </div> : <div className="eleven wide column middle aligned"></div>
                                }
                                <div className="five wide column right aligned saveButtons hideMobile">
                                    {
                                        (this.state.EventStatus === 'Save') ? <div><div className="ui button basic blue icon"><i className="file pdf icon"></i></div>
                                            <div className="ui button triggerEditableOptions">Edit</div></div> : <Button className="ui button" onClick={this.updateEventStatus}>Save</Button>
                                    }
                                </div>
                                <div className="five wide column right aligned saveButtons visibleMobile">
                                    {
                                        (this.state.EventStatus === 'Save') ? <div><div className="ui button basic blue icon"><i className="file pdf icon"></i></div>
                                            <div className="ui button triggerEditableOptions icon"><i className="pencil alternate icon"></i></div></div> : <Button onClick={this.updateEventStatus} className="ui button saveActions icon"><i className="save icon"></i></Button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ui container">
                        <CreateEventTab data={this.state.EventStatus} />
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default createEvent;