import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import TimeWindow from './TimeWindow';

export default class TimeWindowAccordion extends Component {
    
    state = { 
        activeIndex: 0,
        method: this.props.method     
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
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    Bump In
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <TimeWindow type={"bumpin"} method={this.state.method}/>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 2}
                    index={2}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    Exhibition
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                    <TimeWindow type={"exhibition"} method={this.state.method}/>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 3}
                    index={3}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    Bump Out
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                    <TimeWindow type={"bumpout"} method={this.state.method}/>
                </Accordion.Content>
            </Accordion>
        )
    }
}