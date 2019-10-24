import React, { Component } from 'react'
import { Accordion, Icon, Popup} from 'semantic-ui-react'
import TimeWindow from './TimeWindow';

export default class VenueTimeWindowAccordion extends Component {

    state = {
        activeIndex: 0,
        method: this.props.method,
        End: '01.00 p.m',
        Timezone: 'GMT+5:30',
        CreateTime: '09.00 a.m',
        Date: '2019/10/25',
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state
        return (
            <Accordion>
                <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                >
                    <div className="ui grid stackable">
                        <div className="sixteen wide column">
                            <span className="titleMinWidth"><Icon name='dropdown' />Pre Event Access</span>
                            {
                                (this.props.status == 'Save') ? <div><span className="dateStartEndContainer">{this.state.Date}, {this.state.CreateTime} - {this.state.End} | {this.state.Timezone}</span><span className="dateStartEndContainer">{this.state.Date}, {this.state.CreateTime} - {this.state.End} | {this.state.Timezone}</span>
                                    <Popup content='Pre Event Access Notes: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam animi illum ipsum, mollitia optio ex esse magnam iste. Doloribus aliquam maiores repudiandae nulla vel quod deleniti iure fugiat! Minima, eos?' trigger={<Icon className="popupNotes" name='edit outline' />} />
                                </div> : <div></div>
                            }
                        </div>
                    </div>


                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <TimeWindow type={"preevent"} method={this.state.method} />
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 2}
                    index={2}
                    onClick={this.handleClick}
                >
                    <div className="ui grid stackable">
                        <div className="sixteen wide column">
                            <span className="titleMinWidth"><Icon name='dropdown' />Event Time</span>
                            {
                                (this.props.status == 'Save') ? <div>
                                    <span className="dateStartEndContainer">{this.state.Date}, {this.state.CreateTime} - {this.state.End} | {this.state.Timezone}</span>
                                    <Popup content='Event Time Notes: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam animi illum ipsum, mollitia optio ex esse magnam iste. Doloribus aliquam maiores repudiandae nulla vel quod deleniti iure fugiat! Minima, eos?' trigger={<Icon className="popupNotes" name='edit outline' />} />
                                </div> : <div></div>
                            }
                        </div>
                    </div>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                    <TimeWindow type={"eventtime"} method={this.state.method} />
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 3}
                    index={3}
                    onClick={this.handleClick}
                >
                    <div className="ui grid stackable">
                        <div className="sixteen wide column">
                            <span className="titleMinWidth"><Icon name='dropdown' />Post Event Access</span>
                            {
                                (this.props.status == 'Save') ? <div>
                                    <span className="dateStartEndContainer">{this.state.Date}, {this.state.CreateTime} - {this.state.End} | {this.state.Timezone}</span><span className="dateStartEndContainer">{this.state.Date}, {this.state.CreateTime} - {this.state.End} | {this.state.Timezone}</span>
                                    <Popup content='Post Event Access Notes: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam animi illum ipsum, mollitia optio ex esse magnam iste. Doloribus aliquam maiores repudiandae nulla vel quod deleniti iure fugiat! Minima, eos?' trigger={<Icon className="popupNotes" name='edit outline' />} />
                                </div> : <div></div>
                            }
                        </div>
                    </div>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                    <TimeWindow type={"postevent"} method={this.state.method} />
                </Accordion.Content>
            </Accordion>
        )
    }
}