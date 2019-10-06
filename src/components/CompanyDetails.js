import React, { Component } from 'react';

class CompanyDetails extends Component {
    state = {
        isSoleTrade: 0,
        isCompany: 1
    }
    render() {
        console.log(this.props.Title, 'Value')
        var content
        if (this.state.isSoleTrade == this.props.Title) { content = "Trading Name" }
        else if (this.state.isCompany == this.props.Title) { content = "Company Name" }
        return (
            <form className="ui form">
                <div className="ui stacked">
                    <div className="ui grid stackable">
                        <div className="row">
                            <div className="eight wide column">
                                <div className="uploadImage">
                                    <i className="upload icon"></i>
                                </div>
                                <div className="ui button basic small compact blue">Choose company profile image</div>
                            </div>
                        </div>
                        <div className="sixteen wide column left aligned">
                            <div className="field required">
                                <label>{content}</label>
                                <input type="text" name="" placeholder="Company Name" />
                            </div>
                        </div>
                        <div className="eight wide column left aligned">
                            <div className="field required">
                                <label>Country</label>
                                <select className="ui fluid dropdown">
                                    <option value="">Select</option>
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
                        <div className="eight wide column left aligned">
                            <div className="field required">
                                <label>City</label>
                                <input type="text" name="" placeholder="City" />
                            </div>
                        </div>
                        <div className="sixteen wide column left aligned">
                            <div className="column">
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
                            </div>
                        </div>
                        <div className="sixteen wide column left aligned">
                            <div className="column">
                                <div className="field required">
                                    <label>Website</label>
                                    <input type="text" name="" placeholder="Website" />
                                </div>
                            </div>
                        </div>
                        <div className="sixteen wide column left aligned">
                            <div className="field">
                                <label>Description</label>
                                <textarea placeholder="Description" rows="5"></textarea>
                                <p className="textRight marginT10 smallText">*compulsory fields</p>
                            </div>
                        </div>
                        <div className="sixteen wide column paddingT0">
                            <div class="ui divider"></div>
                        </div>
                        <div class="sixteen wide column right aligned saveButtons paddingT0">
                            <div className="ui button">
                                <div className="visible content">Save</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ui error message"></div>


            </form>
        );
    }
}

export default CompanyDetails;