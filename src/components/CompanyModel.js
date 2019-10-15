import React from 'react'
import { Modal } from 'semantic-ui-react'

const CompanyModel = (props) => (
    
    
    <Modal trigger={<div className="ui button basic blue fluid addClient hasModal" data-modal="client"><i className="plus circle icon"></i>
    {(() => {
          switch(props.type) {
            case "client": return 'Add Client';
            case "manager": return 'Add Management Company';
            case "venue": return 'Add Venue';
            case "supplier": return 'Add Supplier';
            case "exhibitor": return 'Add Exhibitor';
            default: return 'Add'
          }
        })()}
    </div>} closeIcon>
        <Modal.Header><div className="header">Search for Company</div></Modal.Header>
        <Modal.Content>
            <Modal.Description>
                <div className="ui grid">
                    <div className="sixteen wide column">
                        <div className="field">
                            <div className="ui search searchCompany">
                                <div className="ui fluid icon input">
                                    <input className="prompt" type="text" placeholder="Search" />
                                    <i className="search icon"></i>
                                </div>
                                <div className="results"></div>
                            </div>
                        </div>
                    </div>
                    <div className="sixteen wide column center aligned">
                        <div className="field">
                            <button className="ui button">Add Selected</button>
                        </div>
                    </div>
                    <div className="sixteen wide column">
                        <p>If you cannot find the company you are searching for they probably do not have a company profile in
                            Konnect. You can create an address book card with details you can use in the event now, and invite them
                    to create a profile by filling out the details below.</p>
                    </div>
                    <div className="sixteen wide column">
                        <h3>Invite New Company</h3>
                        <form className="ui form">
                            <div className="field required">
                                <label>Name</label>
                                <input type="text" name="" placeholder="Name" />
                            </div>
                            <div className="two fields">
                                <div className="field required">
                                    <label>Country</label>
                                    <select className="ui fluid dropdown">
                                        <option value="">Select Country</option>
                                        <option value="AF">Afghanistan</option>
                                        <option value="AX">Åland Islands</option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">American Samoa</option>
                                        <option value="AD">Andorra</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AQ">Antarctica</option>
                                        <option value="AG">Antigua and Barbuda</option>
                                        <option value="AR">Argentina</option>
                                        <option value="AM">Armenia</option>
                                        <option value="AW">Aruba</option>
                                        <option value="AU">Australia</option>
                                        <option value="AT">...</option>
                                    </select>
                                </div>
                                <div className="field required">
                                    <label>City</label>
                                    <input type="text" name="" placeholder="City" />
                                </div>
                            </div>
                            <div className="two fields">
                                <div className="field required">
                                    <label>Contact Name</label>
                                    <input type="text" name="" placeholder="Name" />
                                </div>
                                <div className="field required">
                                    <label>Contact email</label>
                                    <input type="email" name="" placeholder="Email" />
                                </div>
                            </div>
                            <div className="ui grid">
                                <div className="sixteen wide column right aligned">
                                    <span className="smallText">*compulsory fields</span>
                                </div>
                                <div className="sixteen wide column center aligned paddingT0">
                                    <div className="ui button">Add Comapny and invite</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default CompanyModel;