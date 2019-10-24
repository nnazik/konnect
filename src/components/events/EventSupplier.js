import React, { Component } from 'react';
import ServicesAccordion from '../ServicesAccordion'
import { Icon } from 'semantic-ui-react';

class EventSuppliers extends Component {

    state = {
        Venue: 'USA',
        City: 'Newyork',
        Editable: 'field',
        ServiceName: 'Clean'
    }

    componentDidUpdate() {
        if (this.props.data === 'Save') {
            if (this.state.Editable === 'field') {
                this.setState({ Editable: 'field disabled editable' })
            }
        }
    }

    render() {
        return (
            <div>
                <h3 className="visibleMobile">International Convention Centre, Sydney</h3>
                <form className="ui form">
                    <div className="ui grid stackable">
                        <div className="sixteen wide column">
                            <div className="companyContainer marginB20">
                                <div className="ui dividing header">
                                    <h3>Notes to All Suppliers <i className="cog icon"></i><i className="sitemap icon"></i><i className="truck icon"></i></h3>
                                </div>
                                <div className={this.state.Editable}>
                                    <div className="textarea" contentEditable=""></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="ui grid">
                    <div className="sixteen wide column">
                        <div className="marginT10"></div>
                        <div className="ui button compact addNewService addToPanel"><i className="plus circle icon"></i><span className="hideMobile">Add Service</span></div>
                        <h3 id="servicesAnchor" className="ui dividing header">Services</h3>
                        <div className="ui styled fluid accordion parentAccordion parentAccordionService">
                            <div className="insideAccordionContainer">
                                {
                                    (this.props.data == 'Save') ? <div className="ui selection dropdown">
                                        <div className="text"><Icon name="circle green"/>Confirmed</div>
                                    </div> : <div></div>
                                }
                                <ServicesAccordion />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventSuppliers;