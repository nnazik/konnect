import React, { Component } from 'react';
import '../assets/css/main.css';
import PersonalDetails from '../components/PersonalDetails';
import CreateKenetProfile1 from '../components/CreateKenetProfile1';
import CreateKenetProfile2 from '../components/CreateKenetProfile2';
import CreateKenetProfile3 from '../components/CreateKenetProfile3';


class CreateKenetProfile extends Component {

    state = {
        isPersonalTab: true,
        isCompanyCreate: false,
        isCompanyJoin: false
    }

    onClickCompanyJoin = () => {
        this.setState({ isCompanyJoin: true })

    }

    onClickCompanyCreate = (e) => {
        //e.preventDefault()
        this.setState({ isCompanyCreate: true })
    }


    onClickHandleCompany = (e) => {
        e.preventDefault()
        this.setState({
            isPersonalTab: false
        })
        this.setState({
            isCompanyCreate: false
        })
    }


    onClickHandle = (e) => {
        e.preventDefault()
        this.setState({
            isPersonalTab: true,
            isCompanyJoin: false
        })
        this.setState({
            isCompanyCreate: false
        })
    }


    render() {
        var content
        if (this.state.isCompanyJoin) { content = <CreateKenetProfile3 /> }
        else if (this.state.isCompanyCreate) { content = <CreateKenetProfile2 CompanyJoin={this.onClickCompanyJoin} /> }
        else {
            if (this.state.isPersonalTab) {
                content = <PersonalDetails />
            }
            else if (this.state.CompanyJoin) {
                content = <CreateKenetProfile3 />
            }
            else {
                content = <CreateKenetProfile1 onChangeState={this.onClickCompanyCreate} />
            }

        }
        return (
            <body className="notLogin">
                <div className="ui middle aligned center aligned grid">
                    <div className="column minContainer">
                        <h2 className="segmentTitle special">
                            Create Konnect Profile
                      </h2>

                        <div className="ui grid">
                            <div className="ui mini steps">
                                <div className="active step" onClick={this.onClickHandle}>
                                    <i className="user icon"></i>
                                    <div className="content">
                                        <div className="title">Personal Details</div>

                                    </div>
                                </div>
                                <div className="step" onClick={this.onClickHandleCompany}>
                                    <i className="building icon"></i>
                                    <div className="content">
                                        <div className="title">Company Details</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {content}
                    </div>
                </div>
            </body>

        );
    }
}

export default CreateKenetProfile;