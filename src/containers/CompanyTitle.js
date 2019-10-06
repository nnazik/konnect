import React, { Component } from 'react';
import CompanyDetails from '../components/CompanyDetails';

class CompanyTitle extends Component {

    state = {
        isProfile: ''

    }

    componentDidMount = () => {
        const sd = (window.location.href).split("/")[4]
        if (sd == 1 || sd == 0) {
            this.setState({ isProfile: sd })
        }

    }

    render() {
        var content
        if (this.state.isProfile == 0) { content = " Sole Trader/Proprietor Details" }
        else if (this.state.isProfile == 1) { content = " Company Details" }

        return (

            <body className="notLogin">
                <div className="ui middle aligned center aligned grid">
                    <div className="column minContainer marginT50 marginB30">
                        <h2 className="segmentTitle">
                            {content}
                        </h2>
                        <CompanyDetails Title={this.state.isProfile} />
                    </div>
                </div>
            </body>

        );
    }
}

export default CompanyTitle;