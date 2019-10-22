import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import TimeWindow from './TimeWindow';

export default class VenueTimeWindowAccordion extends Component {
    
    state = { 
        activeIndex: 0,
        method: this.props.method,
        End : '01.00 p.m',
        Timezone:'GMT+5:30',
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
            <Accordion className="ui styled fluid">
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    Pre Event Access <span className="dateStartEndContainer">{this.state.Date}, {this.state.CreateTime} - {this.state.End} | {this.state.Timezone}</span><span className="dateStartEndContainer">{this.state.Date}, {this.state.CreateTime} - {this.state.End} | {this.state.Timezone}</span>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <TimeWindow type={"preevent"} method={this.state.method}/>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    Event Time
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <TimeWindow type={"eventtime"} method={this.state.method}/>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 2}
                    index={2}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    Post Event Access
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                    <TimeWindow type={"postevent"} method={this.state.method}/>
                </Accordion.Content>
            </Accordion>
        )
    }
}