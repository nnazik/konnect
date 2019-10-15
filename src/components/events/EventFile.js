import React, { Component } from 'react';
import VenueFileAccordion from '../VenueFileAccordion';
import SupplierFileAccordion from '../SupplierFileAccordion';
import ExhibitorFileAccordion from '../ExhibitorFileAccordion';


class EventFile extends Component {

    state = {
        Venue: 'USA',
        City: 'Newyork',
        Name: 'John dev',
        Exhibitor :'Chris brown'
    }
    render() {
        return (
            <div>
            {/* <form className="ui form"> */}
                <div className="ui grid stackable">
                    <div className="sixteen wide column">
                        <div className="field">
                            <div className="ui dividing header">
                                <div className="ui grid">
                                    <div className="ten wide column middle aligned">
                                        <h3>Client/Event Manager Shared Files <i className="cog icon"></i><i className="sitemap icon"></i></h3>
                                    </div>
                                    <div className="six wide column right aligned">
                                        <div className="ui button compact mini basic circular addDocuments hasModal" data-modal="uploadDocuments"><i className="upload icon"></i>Upload</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui grid docsContainer">
                                <div className="sixteen wide column">



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sixteen wide column">
                        <div className="field">
                            <div className="ui dividing header">
                                <div className="ui grid">
                                    <div className="ten wide column middle aligned">
                                        <h3>Client Internal Files <i className="cog icon"></i></h3>
                                    </div>
                                    <div className="six wide column right aligned">
                                        <div className="ui button compact mini basic circular addDocuments hasModal" data-modal="uploadDocuments"><i className="upload icon"></i>Upload</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui grid docsContainer">
                                <div className="sixteen wide column">



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sixteen wide column">
                        <div className="field">
                            <div className="ui dividing header">
                                <div className="ui grid">
                                    <div className="ten wide column middle aligned">
                                        <h3>Event Management Internal Files <i className="sitemap icon"></i></h3>
                                    </div>
                                    <div className="six wide column right aligned">
                                        <div className="ui button compact mini basic circular addDocuments hasModal" data-modal="uploadDocuments"><i className="upload icon"></i>Upload</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui grid docsContainer">
                                <div className="sixteen wide column">



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sixteen wide column">
                        <div className="field">
                            <div className="ui dividing header">
                                <div className="ui grid">
                                    <div className="ten wide column middle aligned">
                                        <h3>Event Files <i className="globe icon"></i></h3>
                                    </div>
                                    <div className="six wide column right aligned">
                                        <div className="ui button compact mini basic circular addDocuments hasModal" data-modal="uploadDocuments"><i className="upload icon"></i>Upload</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui grid docsContainer">
                                <div className="sixteen wide column">



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sixteen wide column">
                        <div className="field">
                            <div className="ui dividing header">
                                <div className="ui grid">
                                    <div className="ten wide column middle aligned">
                                        <h3>Files for All Venues <i className="cog icon"></i><i className="sitemap icon"></i><i className="map marker alternate icon"></i></h3>
                                    </div>
                                    <div className="six wide column right aligned">
                                        <div className="ui button compact mini basic circular addDocuments hasModal" data-modal="uploadDocuments"><i className="upload icon"></i>Upload</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui grid docsContainer">
                                <div className="sixteen wide column">



                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui styled fluid accordion parentAccordion">
                                <VenueFileAccordion/>
                            </div>
                        </div>
                    </div>
                    <div className="sixteen wide column">
                        <div className="field">
                            <div className="ui dividing header">
                                <div className="ui grid">
                                    <div className="ten wide column middle aligned">
                                        <h3>Files for All Suppliers <i className="cog icon"></i><i className="sitemap icon"></i><i className="truck icon"></i></h3>
                                    </div>
                                    <div className="six wide column right aligned">
                                        <div className="ui button compact mini basic circular addDocuments hasModal" data-modal="uploadDocuments"><i className="upload icon"></i>Upload</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui grid docsContainer">
                                <div className="sixteen wide column">



                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui styled fluid accordion parentAccordion">
                               <SupplierFileAccordion/>
                            </div>
                        </div>
                    </div>
                    <div className="sixteen wide column">
                        <div className="field">
                            <div className="ui dividing header">
                                <div className="ui grid">
                                    <div className="ten wide column middle aligned">
                                        <h3>Files for All Exhibitors <i className="cog icon"></i><i className="sitemap icon"></i><i className="users icon"></i></h3>
                                    </div>
                                    <div className="six wide column right aligned">
                                        <div className="ui button compact mini basic circular addDocuments hasModal" data-modal="uploadDocuments"><i className="upload icon"></i>Upload</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui grid docsContainer">
                                <div className="sixteen wide column">



                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui styled fluid accordion parentAccordion">
                                <ExhibitorFileAccordion/>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </form> */}
        </div>
        );
    }
}

export default EventFile;