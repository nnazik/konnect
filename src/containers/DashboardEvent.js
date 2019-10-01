import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../assets/css/main.css';
import 'react-calendar/dist/Calendar'
import 'clndr/src/clndr'

class dashboardEvent extends Component {

    render() {
        return (
            <div className="ui container">
                <div className="ui grid">
                    <div className="sixteen wide column">
                        <h2 id="toScheduledEvents" className="ui dividing header">Scheduled Events</h2>
                        <div className="visibleMobile">
                            <div className="ui grid">
                                <div className="eight wide column">
                                    <div className="ui button basic blue compact fluid"><i className="undo icon"></i>Event History</div>
                                </div>
                                <div className="eight wide column">
                                    <a href="CE-01.html" className="ui button compact fluid"><i className="plus circle icon"></i>Create Event</a>
                                </div>
                            </div>
                        </div>
                        <div className="createEvent hideMobile">
                            <div className="ui button basic blue compact"><i className="undo icon"></i>Event History</div>
                        </div>
                        <div className="ui segment">
                            <div className="ui grid">
                                <div className="sixteen wide column center aligned">
                                    <br></br>
                                    <br></br>
                                    <h3 className="marginT0">Your associated companies currently have no scheduled events</h3>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui grid stackable">
                    <div className="sixteen wide column">
                        <h2 className="ui dividing header">Your Calendar</h2>
                        <div className="visibleMobile marginB60"></div>
                        <div className="ui segment">
                            <div className="dashboardCalendar clearCalendar">
                                <script type="text/template" id="template-calendar-months">
                                    <div className="clndr-controls top">
                                        <div className="clndr-previous-button"><i className="caret left icon"></i></div>
                                        <div className="clndr-next-button"><i className="caret right icon"></i></div>
                                    </div>
                                </script>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default dashboardEvent;