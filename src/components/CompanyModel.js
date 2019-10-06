import React from 'react'
import { Modal } from 'semantic-ui-react'
import '../assets/css/main.css';

const InviteColleaguesModel = (props) => (
    <Modal trigger={<a className="inviteByEmailBtn hasModal"><i className="user plus icon"></i>Invite Colleagues</a>} closeIcon>
        <Modal.Header>Invite Colleague</Modal.Header>
        <Modal.Content image>
            <Modal.Description>
                <form className="ui form">
                    <div className="ui grid">
                        <div className="sixteen wide column">
                            <div className="two fields">
                                <div className="field">
                                    <label>Name</label>
                                    <input type="text" name="" placeholder="Name" />
                                </div>
                                <div className="field">
                                    <label>Email</label>
                                    <input type="text" name="" placeholder="Email" />
                                </div>
                            </div>
                            <div className="field">
                                <label>Position</label>
                                <input type="text" name="" placeholder="Position" />
                            </div>
                            <div className="field">
                                <label>Message</label>
                                <div className="editableArea">
                                    <p>Hi {props.Name},</p>
                                    <p>{props.AdminName} would like to invite you to join the company, {props.CompanyName} on the Konnect Platform to assist manage and deliver events.</p>
                                    <p>To accept the invite and create a profile use the URL below:</p>
                                    <p><a href="#">https://www.konnect.com/hjgdfa6tr4wqnu9mfuiwd87wi</a>
                                    </p>
                                    <p>Regards<br></br>Konnect</p>
                                </div>
                            </div>
                            <div className="field">
                                <p>People that you invite as colleagues will be able to see, access and edit any
                            event related to this company.</p>
                                <p>If you want to add an external person to assist with a specific event you can
                            do so by adding them as crew during the event set up process.</p>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <div className="ui grid">
                <div className="sixteen wide column right aligned hideMobile">
                    <div className="ui button basic blue negative">Cancel</div>
                    <div className="ui button positive">Send</div>
                </div>
            </div>
        </Modal.Actions>
    </Modal>
)

export default InviteColleaguesModel;