import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import CompanyModel from '../components/CompanyModel';
import TimeWindowAccordion from '../components/TimeWindowAccordion';

export default class ServicesAccordion
    extends Component {
    state = { activeIndex: 0 }

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
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    Service 1
        </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <form className="ui form">
                        <div className="ui grid stackable">
                            <div className="seven wide column">
                                <div className="companyContainer marginB20">
                                    <div className="ui dividing header">
                                        <h3>Service Name <i className="cog icon"></i><i className="sitemap icon"></i><i className="building icon"></i></h3>
                                    </div>
                                    <div className="field">
                                        <input type="text" name="" placeholder="Name" />
                                    </div>
                                    <div className="ui dividing header">
                                        <h3>Supplier Company <i className="cog icon"></i><i className="sitemap icon"></i><i className="building icon"></i></h3>
                                    </div>
                                    <div className="kcpCardContainer">
                                    </div>
                                    <div className="ui grid center aligned">
                                        <div className="sixteen wide column">
                                            <CompanyModel type="supplier" />
                                        </div>
                                    </div>
                                </div>
                                <div className="contactsContainer">
                                    <div className="ui dividing header">
                                        <h3>Supplier Contacts <i className="cog icon"></i><i className="sitemap icon"></i><i className="building icon"></i></h3>
                                    </div>
                                    <div className="kipCardContainer">
                                    </div>
                                    <div className="ui grid stackable center aligned">
                                        <div className="sixteen wide column">
                                            <div className="ui basic button blue fluid addContacts hasModal disabled" data-modal="contacts">
                                                <i className="plus circle icon"></i>Add Contact
                                                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nine wide column">
                                <div className="ui dividing header">
                                    <h3>Service Requirements <i className="cog icon"></i><i className="sitemap icon"></i><i className="building icon"></i></h3>
                                </div>
                                <div className="field">
                                    <div className="textarea" contentEditable=""></div>
                                </div>
                                <div className="timeWindowsContainer">
                                    <div className="ui dividing header">
                                        <h3>Supplier Time Windows <i className="cog icon"></i><i className="sitemap icon"></i><i className="building icon"></i></h3>
                                    </div>
                                    <TimeWindowAccordion method={"venue"} />
                                </div>
                            </div>
                            <div className="sixteen wide column saveButtons paddingT0">
                                <div className="ui divider"></div>
                                <div className="ui grid stackable">
                                    <div className="sixteen wide column right aligned">
                                        <div className="ui button hasModal" data-modal="inviteModal">Save & Invite</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Accordion.Content>
            </Accordion>
        )
    }
}