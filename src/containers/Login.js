import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class login extends Component {

    render() {
        return (
            <body className="notLogin">
                <div className="ui grid middle aligned center aligned">
                    <div className="column minContainer">
                        <h2 className="segmentTitle">
                            <span className="loginLogo">Konnect</span>
                        </h2>
                        <form className="ui form loginForm">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input type="text" name="email" placeholder="E-mail address" />
                                </div>

                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" placeholder="Password" />
                                </div>

                            </div>
                            <div className="field">
                                {/* <div className="ui submit button fluid">Login</div> */}
                                <Link  className="ui submit button fluid" as={Link} to="/dashboard">Login</Link>
                            </div>
                            <div className="field">
                            <Link className="ui button basic fluid blue" as={Link} to= "/CreateKenetProfile" >Create profile</Link>
                            </div>

                            <div className="ui error message"></div>

                        </form>

                        < hr className="marginB10" />
                        <Link  className="ui button basic fluid" as={Link} to="/ResetPassword1">Forgot password?</Link>
                        {/* <a href={Link} as={Link} to="/resetpassword" className="ui button basic fluid">Forgot password?</a> */}
                    
                    </div>
                </div>
            </body>

        );



    }
}

export default login;