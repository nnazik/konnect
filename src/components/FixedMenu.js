import React, { Component } from 'react'
import { Container, Menu, Grid, Button } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {

    state = {
        activeItem: 'CLIENT',
        EventName: 'Beach Fun',
        ClientCompany: 'Apple cop.',
        Venue: 'Tokiyo',
        Date: '2019/11/15'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div className="fixedMenu">
                <div className="infoBar">
                    <Container>
                        <Grid>
                            {
                                (this.props.status === 'Save') ? <div className="eleven wide column middle aligned">
                                    <div className="eventInfo"><b>{this.state.EventName}</b> for {this.state.ClientCompany} in {this.state.Venue}. {this.state.Date}</div>
                                </div> : <div className="eleven wide column middle aligned"></div>
                            }
                            <div className="five wide column right aligned saveButtons hideMobile">
                                {
                                    (this.props.status === 'Save') ? <div><div className="ui button basic blue icon"><i className="file pdf icon"></i></div>
                                    <div className="ui button triggerEditableOptions">Edit</div></div> : <Button className="ui button" onClick={this.props.updateStatus}>Save</Button>
                                }
                            </div>
                            <div className="five wide column right aligned saveButtons visibleMobile">
                                {
                                    (this.props.status === 'Save') ? <div><div className="ui button basic blue icon"><i className="file pdf icon"></i></div>
                                    <div className="ui button triggerEditableOptions icon"><i className="pencil alternate icon"></i></div></div> : <Button onClick={this.updateEventStatus} className="ui button saveActions icon"><i className="save icon"></i></Button>
                                }
                            </div>
                        </Grid>
                    </Container>
                </div>
                <Container>
                    <Menu pointing secondary>
                        <Menu.Item
                            name='CLIENT'
                            icon='cog'
                            active={activeItem === 'CLIENT'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='EVENT MANAGER'
                            icon='sitemap'
                            active={activeItem === 'EVENT MANAGER'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='VENUE'
                            icon='map marker alternate'
                            active={activeItem === 'VENUE'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='SUPPLIERS'
                            icon='truck'
                            active={activeItem === 'SUPPLIERS'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='EXHIBITORS'
                            icon='users'
                            active={activeItem === 'EXHIBITORS'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='FILES'
                            icon='file alternate'
                            active={activeItem === 'FILES'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='TIMELINE'
                            icon='clock'
                            active={activeItem === 'TIMELINE'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>
                </Container>
            </div>
        )
    }
}