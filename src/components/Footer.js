import React, { Component } from 'react';

class footer extends Component {

    render() {
        return (
            <div className="ui container">
                <div className="ui grid stackable">
                    <div className="five wide column">
                        Konnect 2019
                    </div>
                    <div className="eleven wide column right aligned">
                        <a href="#">Support</a><i className="circle icon"></i><a href="#">Privacy</a><i className="circle icon"></i><a href="@">Terms and Conditions</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default footer;