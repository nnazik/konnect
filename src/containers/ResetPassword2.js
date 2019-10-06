import React, { Component } from 'react';
import {Link} from "react-router-dom";


class ResetPassword2 extends Component {

    render() {
        return (

            <body class="notLogin">

                <div class="ui middle aligned center aligned grid">
                    <div class="column minContainer">
                        <h2 class="segmentTitle">
                            Reset Your Password
            </h2>
                        <form class="ui form">
                            <div class="field">
                                <div class="ui left icon input">
                                    <i class="lock icon"></i>
                                    <input type="password" name="" placeholder="Add new password" />
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui left icon input">
                                    <i class="lock icon"></i>
                                    <input type="password" name="" placeholder="Repeat new password" />
                                </div>
                            </div>
                            <div class="field">
                                <Link as={Link} to = "/ResetPassword3" class="ui fluid button">Save</Link>
                            </div>
                            <div class="ui error message"></div>
                        </form>
                    </div>
                </div>
            </body>

        );
    }
}

export default ResetPassword2;


