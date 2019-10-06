import React, { Component } from 'react';
import '../assets/css/main.css';
import { Link } from 'react-router-dom';

class ResetPassword1 extends Component {

    render() {
        return (
            <body class="notLogin">
                <div class="ui middle aligned center aligned grid">
                    <div class="column minContainer">
                        <h2 class="segmentTitle">
                            Reset Your Password
                </h2>
                        <p class="marginB20">Enter your username email address to receive instructions to reset your password</p>
                        <form class="ui form">
                            <div class="field">
                                <div class="ui left icon input">
                                    <i class="mail icon"></i>
                                    <input type="text" name="email" placeholder="E-mail address" />
                                </div>
                            </div>
                            <div class="field">
                                <Link as={Link} to="/ResetPassword2" class="ui fluid button">Send reset instructions</Link>
                            </div>

                            <div class="ui error message"></div>

                        </form>
                    </div>
                </div>
            </body>


        );
    }
}

export default ResetPassword1;