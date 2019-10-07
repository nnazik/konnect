import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfImg from '../assets/img/joe.jpg';
import ProfImg2 from '../assets/img/elliot.jpg';

class EditProfile extends Component {

    state = {
        Company: 'Apple co.',
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
                                <div className="sixteen wide column maxWidth">
                                    <div className="ui grid">
                                        <div className="sixteen wide column left aligned">
                                            <h2>Edit Konnect Profile</h2>
                                        </div>
                                    </div>
                                    <div className="ui segment">
                                        <form className="ui form">
                                            <div className="ui grid stackable">
                                                <div className="nine wide column left aligned">
                                                    <h3 className="ui dividing header">Personal Details</h3>
                                                    <div className="two fields">
                                                        <div className="field">
                                                            <div className="ui grid centered">
                                                                <div className="ten wide column marginB10 marginT10">
                                                                    <img src={ProfImg} alt="" className="ui medium fluid image marginB10" />
                                                                    <div className="ui button basic small compact blue fluid">Replace profile image</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="field hideMobile">
                                                            &nbsp;
                                                        </div>
                                                    </div>
                                                    <div className="two fields">
                                                        <div className="field required">
                                                            <label>First Name</label>
                                                            <input type="text" name="" value="Name" />
                                                        </div>
                                                        <div className="field">
                                                            <label>Last Name</label>
                                                            <input type="text" name="" value="Surname" />
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <label>Headline</label>
                                                        <input type="text" name="" value="Headline" />
                                                    </div>
                                                    <div className="field required">
                                                        <label>Email Address</label>
                                                        <input type="email" name="" value="email@email.com" />
                                                    </div>
                                                    <div className="field">
                                                        <label>Recovery Email</label>
                                                        <input type="email" name="" value="newemail@newemail.com" />
                                                    </div>
                                                    <div className="field">
                                                        <label>Time Zone</label>
                                                        <select className="ui fluid dropdown">
                                                            <option value="">(GMT+10:00) Canberra, Melbourne, Sydney</option>
                                                            <option timeZoneId="1" gmtAdjustment="GMT-12:00" useDaylightTime="0" value="-12">(GMT-12:00) International
                                                        Date Line West</option>
                                                            <option timeZoneId="2" gmtAdjustment="GMT-11:00" useDaylightTime="0" value="-11">(GMT-11:00) Midway Island,
                                                        Samoa</option>
                                                            <option timeZoneId="3" gmtAdjustment="GMT-10:00" useDaylightTime="0" value="-10">(GMT-10:00) Hawaii</option>
                                                            <option timeZoneId="4" gmtAdjustment="GMT-09:00" useDaylightTime="1" value="-9">(GMT-09:00) Alaska</option>
                                                            <option timeZoneId="5" gmtAdjustment="GMT-08:00" useDaylightTime="1" value="-8">(GMT-08:00) Pacific Time (US
                                                        & Canada)</option>
                                                            <option timeZoneId="6" gmtAdjustment="GMT-08:00" useDaylightTime="1" value="-8">(GMT-08:00) Tijuana, Baja
                                                        California</option>
                                                            <option timeZoneId="7" gmtAdjustment="GMT-07:00" useDaylightTime="0" value="-7">(GMT-07:00) Arizona</option>
                                                            <option timeZoneId="8" gmtAdjustment="GMT-07:00" useDaylightTime="1" value="-7">(GMT-07:00) Chihuahua, La
                                                        Paz, Mazatlan</option>
                                                            <option timeZoneId="9" gmtAdjustment="GMT-07:00" useDaylightTime="1" value="-7">(GMT-07:00) Mountain Time (US
                                                        & Canada)</option>
                                                            <option timeZoneId="10" gmtAdjustment="GMT-06:00" useDaylightTime="0" value="-6">(GMT-06:00) Central America
                                                    </option>
                                                            <option timeZoneId="11" gmtAdjustment="GMT-06:00" useDaylightTime="1" value="-6">(GMT-06:00) Central Time (US
                                                        & Canada)</option>
                                                            <option timeZoneId="12" gmtAdjustment="GMT-06:00" useDaylightTime="1" value="-6">(GMT-06:00) Guadalajara,
                                                        Mexico City, Monterrey</option>
                                                            <option timeZoneId="13" gmtAdjustment="GMT-06:00" useDaylightTime="0" value="-6">(GMT-06:00) Saskatchewan
                                                    </option>
                                                            <option timeZoneId="14" gmtAdjustment="GMT-05:00" useDaylightTime="0" value="-5">(GMT-05:00) Bogota, Lima,
                                                        Quito, Rio Branco</option>
                                                            <option timeZoneId="15" gmtAdjustment="GMT-05:00" useDaylightTime="1" value="-5">(GMT-05:00) Eastern Time (US
                                                        & Canada)</option>
                                                            <option timeZoneId="16" gmtAdjustment="GMT-05:00" useDaylightTime="1" value="-5">(GMT-05:00) Indiana (East)
                                                    </option>
                                                            <option timeZoneId="17" gmtAdjustment="GMT-04:00" useDaylightTime="1" value="-4">(GMT-04:00) Atlantic Time
                                                        (Canada)</option>
                                                            <option timeZoneId="18" gmtAdjustment="GMT-04:00" useDaylightTime="0" value="-4">(GMT-04:00) Caracas, La Paz
                                                    </option>
                                                            <option timeZoneId="19" gmtAdjustment="GMT-04:00" useDaylightTime="0" value="-4">(GMT-04:00) Manaus</option>
                                                            <option timeZoneId="20" gmtAdjustment="GMT-04:00" useDaylightTime="1" value="-4">(GMT-04:00) Santiago</option>
                                                            <option timeZoneId="21" gmtAdjustment="GMT-03:30" useDaylightTime="1" value="-3.5">(GMT-03:30) Newfoundland
                                                    </option>
                                                            <option timeZoneId="22" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Brasilia</option>
                                                            <option timeZoneId="23" gmtAdjustment="GMT-03:00" useDaylightTime="0" value="-3">(GMT-03:00) Buenos Aires,
                                                        Georgetown</option>
                                                            <option timeZoneId="24" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Greenland
                                                    </option>
                                                            <option timeZoneId="25" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Montevideo
                                                    </option>
                                                            <option timeZoneId="26" gmtAdjustment="GMT-02:00" useDaylightTime="1" value="-2">(GMT-02:00) Mid-Atlantic
                                                    </option>
                                                            <option timeZoneId="27" gmtAdjustment="GMT-01:00" useDaylightTime="0" value="-1">(GMT-01:00) Cape Verde Is.
                                                    </option>
                                                            <option timeZoneId="28" gmtAdjustment="GMT-01:00" useDaylightTime="1" value="-1">(GMT-01:00) Azores</option>
                                                            <option timeZoneId="29" gmtAdjustment="GMT+00:00" useDaylightTime="0" value="0">(GMT+00:00) Casablanca,
                                                        Monrovia, Reykjavik</option>
                                                            <option timeZoneId="30" gmtAdjustment="GMT+00:00" useDaylightTime="1" value="0">(GMT+00:00) Greenwich Mean
                                                                Time : Dublin, Edinburgh,
                                                        Lisbon, London</option>
                                                            <option timeZoneId="31" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Amsterdam, Berlin,
                                                                Bern, Rome, Stockholm,
                                                        Vienna</option>
                                                            <option timeZoneId="32" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Belgrade,
                                                                Bratislava, Budapest, Ljubljana,
                                                        Prague</option>
                                                            <option timeZoneId="33" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Brussels,
                                                        Copenhagen, Madrid, Paris</option>
                                                            <option timeZoneId="34" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Sarajevo, Skopje,
                                                        Warsaw, Zagreb</option>
                                                            <option timeZoneId="35" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) West Central
                                                        Africa</option>
                                                            <option timeZoneId="36" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Amman</option>
                                                            <option timeZoneId="37" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Athens, Bucharest,
                                                        Istanbul</option>
                                                            <option timeZoneId="38" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Beirut</option>
                                                            <option timeZoneId="39" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Cairo</option>
                                                            <option timeZoneId="40" gmtAdjustment="GMT+02:00" useDaylightTime="0" value="2">(GMT+02:00) Harare, Pretoria
                                                    </option>
                                                            <option timeZoneId="41" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Helsinki, Kyiv,
                                                                Riga, Sofia, Tallinn, Vilnius
                                                    </option>
                                                            <option timeZoneId="42" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Jerusalem</option>
                                                            <option timeZoneId="43" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Minsk</option>
                                                            <option timeZoneId="44" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Windhoek</option>
                                                            <option timeZoneId="45" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Kuwait, Riyadh,
                                                        Baghdad</option>
                                                            <option timeZoneId="46" gmtAdjustment="GMT+03:00" useDaylightTime="1" value="3">(GMT+03:00) Moscow, St.
                                                        Petersburg, Volgograd</option>
                                                            <option timeZoneId="47" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Nairobi</option>
                                                            <option timeZoneId="48" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Tbilisi</option>
                                                            <option timeZoneId="49" gmtAdjustment="GMT+03:30" useDaylightTime="1" value="3.5">(GMT+03:30) Tehran</option>
                                                            <option timeZoneId="50" gmtAdjustment="GMT+04:00" useDaylightTime="0" value="4">(GMT+04:00) Abu Dhabi, Muscat
                                                    </option>
                                                            <option timeZoneId="51" gmtAdjustment="GMT+04:00" useDaylightTime="1" value="4">(GMT+04:00) Baku</option>
                                                            <option timeZoneId="52" gmtAdjustment="GMT+04:00" useDaylightTime="1" value="4">(GMT+04:00) Yerevan</option>
                                                            <option timeZoneId="53" gmtAdjustment="GMT+04:30" useDaylightTime="0" value="4.5">(GMT+04:30) Kabul</option>
                                                            <option timeZoneId="54" gmtAdjustment="GMT+05:00" useDaylightTime="1" value="5">(GMT+05:00) Yekaterinburg
                                                    </option>
                                                            <option timeZoneId="55" gmtAdjustment="GMT+05:00" useDaylightTime="0" value="5">(GMT+05:00) Islamabad,
                                                        Karachi, Tashkent</option>
                                                            <option timeZoneId="56" gmtAdjustment="GMT+05:30" useDaylightTime="0" value="5.5">(GMT+05:30) Sri
                                                        Jayawardenapura</option>
                                                            <option timeZoneId="57" gmtAdjustment="GMT+05:30" useDaylightTime="0" value="5.5">(GMT+05:30) Chennai,
                                                        Kolkata, Mumbai, New Delhi</option>
                                                            <option timeZoneId="58" gmtAdjustment="GMT+05:45" useDaylightTime="0" value="5.75">(GMT+05:45) Kathmandu
                                                    </option>
                                                            <option timeZoneId="59" gmtAdjustment="GMT+06:00" useDaylightTime="1" value="6">(GMT+06:00) Almaty,
                                                        Novosibirsk</option>
                                                            <option timeZoneId="60" gmtAdjustment="GMT+06:00" useDaylightTime="0" value="6">(GMT+06:00) Astana, Dhaka
                                                    </option>
                                                            <option timeZoneId="61" gmtAdjustment="GMT+06:30" useDaylightTime="0" value="6.5">(GMT+06:30) Yangon (Rangoon)
                                                    </option>
                                                            <option timeZoneId="62" gmtAdjustment="GMT+07:00" useDaylightTime="0" value="7">(GMT+07:00) Bangkok, Hanoi,
                                                        Jakarta</option>
                                                            <option timeZoneId="63" gmtAdjustment="GMT+07:00" useDaylightTime="1" value="7">(GMT+07:00) Krasnoyarsk
                                                    </option>
                                                            <option timeZoneId="64" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Beijing,
                                                        Chongqing, Hong Kong, Urumqi</option>
                                                            <option timeZoneId="65" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Kuala Lumpur,
                                                        Singapore</option>
                                                            <option timeZoneId="66" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Irkutsk, Ulaan
                                                        Bataar</option>
                                                            <option timeZoneId="67" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Perth</option>
                                                            <option timeZoneId="68" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Taipei</option>
                                                            <option timeZoneId="69" gmtAdjustment="GMT+09:00" useDaylightTime="0" value="9">(GMT+09:00) Osaka, Sapporo,
                                                        Tokyo</option>
                                                            <option timeZoneId="70" gmtAdjustment="GMT+09:00" useDaylightTime="0" value="9">(GMT+09:00) Seoul</option>
                                                            <option timeZoneId="71" gmtAdjustment="GMT+09:00" useDaylightTime="1" value="9">(GMT+09:00) Yakutsk</option>
                                                            <option timeZoneId="72" gmtAdjustment="GMT+09:30" useDaylightTime="0" value="9.5">(GMT+09:30) Adelaide
                                                            </option>
                                                            <option timeZoneId="73" gmtAdjustment="GMT+09:30" useDaylightTime="0" value="9.5">(GMT+09:30) Darwin</option>
                                                            <option timeZoneId="74" gmtAdjustment="GMT+10:00" useDaylightTime="0" value="10">(GMT+10:00) Brisbane</option>
                                                            <option timeZoneId="75" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Canberra,
                                                        Melbourne, Sydney</option>
                                                            <option timeZoneId="76" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Hobart</option>
                                                            <option timeZoneId="77" gmtAdjustment="GMT+10:00" useDaylightTime="0" value="10">(GMT+10:00) Guam, Port
                                                        Moresby</option>
                                                            <option timeZoneId="78" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Vladivostok
                                                    </option>
                                                            <option timeZoneId="79" gmtAdjustment="GMT+11:00" useDaylightTime="1" value="11">(GMT+11:00) Magadan, Solomon
                                                        Is., New Caledonia</option>
                                                            <option timeZoneId="80" gmtAdjustment="GMT+12:00" useDaylightTime="1" value="12">(GMT+12:00) Auckland,
                                                        Wellington</option>
                                                            <option timeZoneId="81" gmtAdjustment="GMT+12:00" useDaylightTime="0" value="12">(GMT+12:00) Fiji, Kamchatka,
                                                        Marshall Is.</option>
                                                            <option timeZoneId="82" gmtAdjustment="GMT+13:00" useDaylightTime="0" value="13">(GMT+13:00) Nuku'alofa
                                                    </option>
                                                        </select>
                                                    </div>
                                                    <div className="two fields">
                                                        <div className="field">
                                                            <label>Mobile</label>
                                                            <input type="email" name="" value="1234 5678" />
                                                        </div>
                                                    </div>
                                                    <div className="two fields">
                                                        <div className="field required">
                                                            <label>City</label>
                                                            <input type="text" name="" value="Sydney" />
                                                        </div>
                                                        <div className="field required">
                                                            <label>Country</label>
                                                            <select className="ui fluid dropdown">
                                                                <option value="">Australia</option>
                                                                <option value="af">Afghanistan</option>
                                                                <option value="ax">Aland Islands</option>
                                                                <option value="al">Albania</option>
                                                                <option value="dz">Algeria</option>
                                                                <option value="as">American Samoa</option>
                                                                <option value="ad">Andorra</option>
                                                                <option value="ao">Angola</option>
                                                                <option value="ai">Anguilla</option>
                                                                <option value="ag">Antigua</option>
                                                                <option value="ar">Argentina</option>
                                                                <option value="am">Armenia</option>
                                                                <option value="aw">Aruba</option>
                                                                <option value="au">Australia</option>
                                                                <option value="xx">...</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <label>About Me</label>
                                                        <div className="textarea" contentEditable>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nesciunt necessitatibus accusantium omnis ducimus officia eos eum iusto beatae voluptate. Minima praesentium quia quasi pariatur sunt amet atque, nobis, natus.</div>
                                                        <p className="textRight marginT10 smallText">*compulsory fields</p>
                                                    </div>
                                                    <div className="sixteen wide column paddingT0">
                                                        <div className="ui divider"></div>
                                                    </div>
                                                    <div className="ui grid stackable">
                                                        <div className="eight wide column middle aligned">
                                                            <a href="#" className="ui mini basic button confirmRemove hasModal" data-modal="removeModal"><i className="ui trash icon"></i>Delete Profile</a>
                                                        </div>
                                                        <div className="eight wide column right aligned">
                                                            <a href="RP-04.html" className="ui button basic blue hideMobile">Change Password</a>
                                                            <button className="ui button hideMobile">Save</button>
                                                            <div className="marginB10 visibleMobile"><a href="RP-01.html" className="ui button basic blue fluid">Change Password</a></div>
                                                            <button className="ui button fluid visibleMobile">Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="seven wide column left aligned">
                                                    <div className="contactsContainer">
                                                        <div className="field">
                                                            <h3 className="ui dividing header">Associated Companies</h3>
                                                        </div>
                                                        <div className="kcpCardContainer marginT20 marginB20">
                                                            <div className="ui one column grid">
                                                                <div className="column">
                                                                    <div className="ui fluid card">
                                                                        <div className="content">
                                                                            <img className="right floated mini ui image circular" src={ProfImg2} />
                                                                            <div className="header">
                                                                                <a href="/VCP.html" target="_blank">{this.state.Company}</a>
                                                                            </div>
                                                                            <div className="meta">
                                                                                <b>{this.state.Position}</b>
                                                                                <i className="map marker alternate icon"></i>
                                                                                Sydney<span>|</span><i className="phone icon"></i>9876 5432</div>
                                                                            <div className="description"></div>
                                                                        </div>
                                                                        <div className="extra content">
                                                                            <div className="ui grid">
                                                                                <div className="ten wide column">
                                                                                    <div className="ui toggle checkbox checked">
                                                                                        <input type="checkbox" name="" class="hidden" checked="checked" />
                                                                                        <label>Default company</label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="six wide column right aligned middle aligned">
                                                                                    <div className="ui circular compact mini basic icon button confirmRemove hasModal" data-modal="removeModal"><i className="trash icon"></i></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="C-KCP-01.html" className="ui button fluid">Join or create a company</a>
                                                    </div>
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

export default EditProfile;