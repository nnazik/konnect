import React, { Component } from 'react';
import ServicesAccordion from '../ServicesAccordion'

class EventSuppliers extends Component {

    state = {
        Venue: 'USA',
        City: 'Newyork'
    }

    render() {
        return (
            <div>
                <div className="ui top attached tabular menu">
                    <a className="item active" data-tab="services/0"><i className="map marker alternate icon"></i><span className="hideMobile">International Convention Centre, Sydney</span></a>
                    <a className="item" data-tab="services/1"><i className="map marker alternate icon"></i><span className="hideMobile">{this.state.Venue}, {this.state.City}</span></a>
                </div>
                <div className="ui bottom attached tab segment thirdNest active" data-tab="services/0">
                    <h3 className="visibleMobile">International Convention Centre, Sydney</h3>
                    <form className="ui form">
                        <div className="ui grid stackable">
                            <div className="sixteen wide column">
                                <div className="companyContainer marginB20">
                                    <div className="ui dividing header">
                                        <h3>Notes to All Suppliers <i className="cog icon"></i><i className="sitemap icon"></i><i className="truck icon"></i></h3>
                                    </div>
                                    <div className="field">
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
                                <ServicesAccordion/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui bottom attached tab segment thirdNest" data-tab="services/1">
                    <h3 className="visibleMobile">{this.state.Venue}, {this.state.City}</h3>
                    INFO
                                </div>
            </div>
        );
    }
}

export default EventSuppliers;