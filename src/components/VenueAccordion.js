import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import CompanyModel from '../components/CompanyModel';
import VenueTimeWindowAccordion from '../components/VenueTimeWindowAccordion';
import EventClientCompanyCard from '../components/EventClientCompanyCard'
import EventClientContactCard from '../components/EventClientContactCard'

export default class VenueAccordion extends Component {
  state = {
    activeIndex: 0,
    KCP_Name: 'Steve jobs',
    Date: '2019/10/25',
    CreateTime: '09.00 a.m',
    Editable: 'field',
    CompanyName: 'Apple co',
    City: 'Newyork'
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  componentDidUpdate() {
    if (this.props.status === 'Save') {
      if (this.state.Editable === 'field') {
        this.setState({ Editable: 'field disabled editable' })
      }
    }
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
          <div className="sixteen wide column middle aligned">
            <Icon name="dropdown" />Venue 1: {this.state.CompanyName}, {this.state.City}
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <form className="ui form">
            <div className="ui grid stackable">
              <div className="seven wide column">
                <div className="companyContainer marginB20">
                  <div className="ui dividing header">
                    <h3>Venue Company <i className="globe icon"></i></h3>
                  </div>
                  {
                    (this.props.status === 'Save') ? <div className="kcpCardContainer"><EventClientCompanyCard /></div> :
                      <div className="ui grid center aligned">
                        <div className="sixteen wide column">
                          <CompanyModel type="venue" />
                        </div>
                      </div>
                  }
                </div>
                <div className="contactsContainer">
                  <div className="ui dividing header">
                    <h3>Venue Contacts <i className="globe icon"></i></h3>
                  </div>
                  {/* <div className="kipCardContainer">
                  </div>
                  <div className="ui grid stackable center aligned">
                    <div className="sixteen wide column">
                      <div className="ui basic button blue fluid addContacts hasModal disabled" data-modal="contacts">
                        <i className="plus circle icon"></i>Add Contact</div>
                    </div>
                  </div> */}
                  {
                    (this.props.status == 'Save') ? <div className="kipCardContainer"><EventClientContactCard /></div> :
                      <div className="ui grid center aligned">
                        <div className="sixteen wide column">
                          <div className="ui basic button blue fluid addContacts hasModal disabled" data-modal="contacts">
                            <i className="plus circle icon"></i>Add Contact
                                            </div>
                        </div>
                      </div>
                  }
                </div>
              </div>
              <div className="nine wide column">
                <div className="field">
                  <div className="timeWindowsContainer">
                    <div className="ui dividing header">
                      <h3>Venue Time Windows <i className="globe icon"></i></h3>
                    </div>
                    <VenueTimeWindowAccordion status={this.props.status} />
                  </div>
                </div>
                <div className="ui dividing header">
                  <h3>Venue Requirements <i className="cog icon"></i><i className="sitemap icon"></i><i className="map marker alternate icon"></i></h3>
                </div>
                <div className={this.state.Editable}>
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