import React, { Component } from 'react'
import { Container, Menu} from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
    state = { activeItem: 'CLIENT' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Container>
                <Menu pointing secondary>
                    <Menu.Item
                        name='CLIENT'
                        icon='cog icon'
                        active={activeItem === 'CLIENT'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='EVENT MANAGER'
                        icon='sitemap icon'
                        active={activeItem === 'EVENT MANAGER'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='VENUE'
                        icon='map marker alternate icon'
                        active={activeItem === 'VENUE'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='SUPPLIERS'
                        icon='truck icon'
                        active={activeItem === 'SUPPLIERS'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='EXHIBITORS'
                        icon='users icon'
                        active={activeItem === 'EXHIBITORS'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='FILES'
                        icon='file alternate icon icon'
                        active={activeItem === 'FILES'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='TIMELINE'
                        icon='clock icon'
                        active={activeItem === 'TIMELINE'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </Container>
        )
    }
}