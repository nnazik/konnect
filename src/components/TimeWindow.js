import React, { Component } from 'react';
import { DateInput,TimeInput } from 'semantic-ui-calendar-react';

class TimeWindow extends Component {

    state = {
        date: '',
        startTime: '',
        endTime: '',
    };

    handleChange = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    }

    render() {
        return (
            <div>
                <div className="field transition visible">
                    <div className="ui checkbox">
                        <input type="checkbox" tabIndex="0" className="hidden" />
                        <label>Same as venue</label>
                    </div>
                </div>
                <div className="transition visible">
                    <div className="item">
                        <div className="ui three column grid">
                            <div className="column">
                                <span>Date</span>
                                {/* <div className="ui calendar datePicker">
                                    <div className="ui input left icon">
                                        <i className="calendar icon"></i> */}
                                <DateInput  name="date" placeholder="Date" value={this.state.date} iconPosition="left" onChange={this.handleChange}
                                />
                                {/* </div>
                                </div> */}
                            </div>
                            <div className="column">
                                <span>Start</span>
                                {/* <div className="ui calendar startTime">
                                    <div className="ui input left icon">
                                        <i className="time icon"></i>
                                        <input type="text" placeholder="Start" />
                                    </div>
                                </div> */}
                                <TimeInput name="start" placeholder="Start" value={this.state.startTime} iconPosition="left" onChange={this.handleChange} />
                            </div>
                            <div className="column">
                                <span>End</span>
                                {/* <div className="ui calendar endTime">
                                    <div className="ui input left icon">
                                        <i className="time icon"></i>
                                        <input type="text" placeholder="End" />
                                    </div>
                                </div> */}
                                <TimeInput name="end" placeholder="End" value={this.state.endTime} iconPosition="left" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="ui grid">
                            <div className="sixteen wide column">
                                <span>Notes</span>
                                <div className="textarea notes" contentEditable=""></div>
                                <div className="ui circular compact mini basic button">
                                    <i className="plus circle icon"></i>
                                    {(() => {
                                        switch (this.props.type) {
                                            case "bumpin": return 'Add bump-in date';
                                            case "exhibition": return 'Add Exhibition date';
                                            default: return 'Add bump-out date'
                                        }
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimeWindow;