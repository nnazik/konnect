import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import CompanyModel from '../components/CompanyModel';
import VenueTimeWindowAccordion from '../components/VenueTimeWindowAccordion';

export default class VenueAccordion extends Component {
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
          Venue 1
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <form className="ui form">
            <div className="ui grid stackable">
              <div className="seven wide column">
                <div className="companyContainer marginB20">
                  <div className="ui dividing header">
                    <h3>Venue Company <i className="globe icon"></i></h3>
                  </div>
                  <div className="kcpCardContainer">
                  </div>
                  <div className="ui grid center aligned">
                    <div className="sixteen wide column">
                      <CompanyModel type="venue" />
                    </div>
                  </div>
                </div>
                <div className="contactsContainer">
                  <div className="ui dividing header">
                    <h3>Venue Contacts <i className="globe icon"></i></h3>
                  </div>
                  <div className="kipCardContainer">
                  </div>
                  <div className="ui grid stackable center aligned">
                    <div className="sixteen wide column">
                      <div className="ui basic button blue fluid addContacts hasModal disabled" data-modal="contacts">
                        <i className="plus circle icon"></i>Add Contact</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nine wide column">
                <div className="field">
                  <div className="timeWindowsContainer">
                    <div className="ui dividing header">
                      <h3>Venue Time Windows <i className="globe icon"></i></h3>
                    </div>
                    <VenueTimeWindowAccordion />
                  </div>
                </div>
                <div className="ui dividing header">
                  <h3>Venue Requirements <i className="cog icon"></i><i className="sitemap icon"></i><i className="map marker alternate icon"></i></h3>
                </div>
                <div className="field">
                  <div className="textarea" contentEditable=""></div>
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