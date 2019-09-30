import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../assets/css/main.css';


class ResetPassword extends Component {

    render() {
        return (
            <div>
                <div className="ui middle aligned center aligned grid">
                    <div className="column minContainer">
                        <h2 className="segmentTitle">
                            Reset Your Password
                        </h2>
                        <p className="marginB20">Enter your username email address to receive instructions to reset your password</p>
                        <form className="ui form">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="mail icon"></i>
                                    <input type="text" name="email" placeholder="E-mail address"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );



    }
}

export default ResetPassword;