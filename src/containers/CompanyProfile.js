import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../assets/css/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileImg from '../assets/img/logo-ex-7.png';
import StaffImg from '../assets/img/jenny.jpg';

class CompanyProfile extends Component {

    state = {
        KCPName: 'Apple co.',
        Name: 'John Dev',
        Position: 'Manager'
    }

    render() {
        return (
            <div className="pusher">
                <div className="mainContainer">
                    <div className="actionBar">
                        <Header />
                    </div>
                    <div className="mainContent">
                        <div className="ui container">
                            <div className="ui grid">
                                <div className="sixteen wide column">
                                    <div className="ui grid">
                                        <div className="sixteen wide column left aligned">
                                            <h2>Edit Company Profile - {this.state.KCPName}</h2>
                                        </div>
                                    </div>
                                    <div className="ui segment">
                                        <form className="ui form">
                                            <div className="ui grid stackable">
                                                <div className="nine wide column">
                                                    <div className="ui dividing header">
                                                        <h3>Company Details</h3>
                                                    </div>
                                                    <div className="two fields">
                                                        <div className="field">
                                                            <div className="ui grid centered">
                                                                <div className="ten wide column marginB10 marginT10">
                                                                    <img src={ProfileImg} alt="" className="ui medium fluid image marginB10" />
                                                                    <div className="ui button basic small compact blue fluid">Replace company image</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="field hideMobile">
                                                            &nbsp;
                                                        </div>
                                                    </div>
                                                    <div className="two fields">
                                                        <div className="field required">
                                                            <label>Company Name</label>
                                                            <input type="text" name="" value="Company Name" />
                                                        </div>
                                                        <div className="field">
                                                            <label>Company/Tax Number</label>
                                                            <input type="text" name="" value="0987654321" />
                                                        </div>
                                                    </div>
                                                    <div className="two fields">
                                                        <div className="field">
                                                            <label>Street Address 1</label>
                                                            <input type="text" name="" value="Address 1" />
                                                        </div>
                                                        <div className="field">
                                                            <label>Street Address 2</label>
                                                            <input type="text" name="" value="Address 2" />
                                                        </div>
                                                    </div>
                                                    <div className="two fields">
                                                        <div className="field required">
                                                            <label>City</label>
                                                            <input type="text" name="" value="Sydney" />
                                                        </div>
                                                        <div className="field">
                                                            <label>State/Province/Region</label>
                                                            <input type="text" name="" value="NSW" />
                                                        </div>
                                                    </div>
                                                    <div className="two fields">
                                                        <div className="field">
                                                            <label>ZIP/Postcode</label>
                                                            <input type="text" name="" value="2000" />
                                                        </div>
                                                        <div className="field required">
                                                            <label>Country</label>
                                                            <select className="ui fluid dropdown">
                                                                <option value="">Australia</option>
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
                                                    </div>
                                                    <div className="two fields">
                                                        <div className="field">
                                                            <label>Phone</label>
                                                            <input type="text" name="" value="1234 5678" />
                                                        </div>
                                                        <div className="field required">
                                                            <label>Website</label>
                                                            <input type="text" name="" value="www.website.com" />
                                                        </div>
                                                    </div>
                                                    <div className="field required">
                                                        <label>Category</label>
                                                        <div className="ui fluid multiple dropdown selection dropdown selectCategory">
                                                            <input type="hidden" name="" />
                                                            <i className="dropdown icon"></i>
                                                            <div className="default text">Select</div>
                                                            <div className="menu">
                                                                <div className="ui segment">
                                                                    <div className="ui two column very relaxed grid">
                                                                        <div className="column">
                                                                            <div className="item noClickable">
                                                                                <h4>Event Industry</h4>
                                                                            </div>
                                                                            <div className="item" data-value="1">Amusement Hire</div>
                                                                            <div className="item" data-value="2">App & Website Developers</div>
                                                                            <div className="item" data-value="3">Audio Visual, Staging & Lighting</div>
                                                                            <div className="item" data-value="4">Awards & Prizes</div>
                                                                            <div className="item" data-value="5">Band, DJ, Musical Services</div>
                                                                            <div className="item" data-value="6">Catering</div>
                                                                            <div className="item" data-value="7">Computer Hire & IT Solutions</div>
                                                                            <div className="item" data-value="8">Corporate Hospitality</div>
                                                                            <div className="item" data-value="9">Entertainment & Performers</div>
                                                                            <div className="item" data-value="10">Event Management</div>
                                                                            <div className="item" data-value="11">Florist</div>
                                                                            <div className="item" data-value="12">Freight & Logistics</div>
                                                                            <div className="item" data-value="13">Gifts & Merchandise</div>
                                                                            <div className="item" data-value="14">Personel & Support Staff</div>
                                                                            <div className="item" data-value="15">Photography & Image Services</div>
                                                                            <div className="item" data-value="16">Printing Services</div>
                                                                            <div className="item" data-value="17">Registration & Identity Management</div>
                                                                            <div className="item" data-value="18">Security Services</div>
                                                                            <div className="item" data-value="19">Stand/Display Builders & Signage</div>
                                                                            <div className="item" data-value="20">Team Building</div>
                                                                            <div className="item" data-value="21">Theming, Decorations & Props</div>
                                                                            <div className="item" data-value="22">Transportation & Hire Car</div>
                                                                            <div className="item" data-value="23">Travel Agent</div>
                                                                            <div className="item" data-value="24">Videography & Video Editing</div>
                                                                            <div className="item" data-value="25">Venue</div>
                                                                            <div className="item" data-value="26">Web Streaming</div>
                                                                        </div>
                                                                        <div className="column">
                                                                            <div className="item noClickable">
                                                                                <h4>GICS</h4>
                                                                            </div>
                                                                            <div className="item" data-value="27">Automobiles and Components</div>
                                                                            <div className="item" data-value="28">Banks</div>
                                                                            <div className="item" data-value="29">Capital Goods</div>
                                                                            <div className="item" data-value="30">Commercial and Professional Services</div>
                                                                            <div className="item" data-value="31">Communication Services</div>
                                                                            <div className="item" data-value="32">Consumer Durables and Apparel</div>
                                                                            <div className="item" data-value="33">Consumer Services</div>
                                                                            <div className="item" data-value="34">Diversified Financials</div>
                                                                            <div className="item" data-value="35">Energy</div>
                                                                            <div className="item" data-value="36">Food, Beverage and Tobacco</div>
                                                                            <div className="item" data-value="37">Food and Staples Retailing</div>
                                                                            <div className="item" data-value="38">Health Care Equipment and Services</div>
                                                                            <div className="item" data-value="39">Household and Personal Products</div>
                                                                            <div className="item" data-value="40">Insurance</div>
                                                                            <div className="item" data-value="41">Materials</div>
                                                                            <div className="item" data-value="42">Media</div>
                                                                            <div className="item" data-value="43">Pharmaceuticals, Biotech and Life Sciences</div>
                                                                            <div className="item" data-value="44">Real Estate</div>
                                                                            <div className="item" data-value="45">Retailing</div>
                                                                            <div className="item" data-value="46">Semiconductors and Semiconductor Equipment</div>
                                                                            <div className="item" data-value="47">Software and Services</div>
                                                                            <div className="item" data-value="48">Technology Hardware and Equipment</div>
                                                                            <div className="item" data-value="49">Transportation</div>
                                                                            <div className="item" data-value="50">Utilities</div>
                                                                            <div className="item" data-value="51">Other</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ui vertical divider"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <label>Description</label>
                                                        <div className="textarea" contentEditable="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolores asperiores ullam, officia repellat ex, dignissimos quae assumenda laudantium tempore a in fugit enim dicta, quos maxime doloremque minus. Et.</div>
                                                    </div>
                                                    <div className="sixteen wide column marginT10 marginB20">
                                                        <p className="textRight marginT10 smallText">*compulsory fields</p>
                                                    </div>
                                                    <div className="sixteen wide column paddingT0">
                                                        <div className="ui divider"></div>
                                                    </div>
                                                    <div className="ui grid">
                                                        <div className="sixteen wide column right aligned">
                                                            <div className="ui button hideMobile">Save</div>
                                                            <div className="ui button fluid visibleMobile">Save</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="seven wide column">
                                                    <div className="contactsContainer">
                                                        <div className="field">
                                                            <h3 className="ui dividing header">Staff</h3>
                                                        </div>
                                                        <div className="kipCardContainer">
                                                            <div className="ui one column grid stackable">
                                                                <div className="column">
                                                                    <div className="ui fluid card">
                                                                        <div className="content">
                                                                            <img className="right floated mini ui image circular" src={StaffImg} />
                                                                            <div className="header">
                                                                                <a href="/VPP.html" target="">{this.state.Name}</a>
                                                                            </div>
                                                                            <div className="meta">{this.state.Position}</div>
                                                                            <div className="description">
                                                                                mail@mail.com<br></br>
                                                                                1234 5678
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="marginT30"></div>
                                                    <a href="IC-01.html" className="ui button fluid">Manage Colleagues</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default CompanyProfile;