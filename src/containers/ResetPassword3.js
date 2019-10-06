import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ResetPassword3 extends Component {

    render() {
        return (
            <body class="notLogin">

                <div class="ui middle aligned center aligned grid">
                    <div class="column minContainer">
                        <h2 class="segmentTitle">
                            Reset Your Password
            </h2>
                        <h3 class="marginB30">Your password has been updated</h3>
                        <div class="field">
                            <Link as={Link} to= "/" class="ui fluid button">Login</Link>
                        </div>
                    </div>
                </div>
            </body>

        );
    }
}

export default ResetPassword3;