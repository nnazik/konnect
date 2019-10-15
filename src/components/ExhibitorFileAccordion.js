import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class ExhibitorFileAccordion extends Component {
    state = { activeIndex: 0, Exhibitor: 'Steve jobs' }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <Accordion>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    Exhibitor 1: {this.state.Exhibitor}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <form className="ui form">
                        <div className="ui grid stackable">
                            <div className="eight wide column">
                                <div className="field">
                                    <div className="ui dividing header">
                                        <div className="ui grid">
                                            <div className="ten wide column middle aligned">
                                                <h3>Exhibitor Shared Files <i className="cog icon"></i><i className="sitemap icon"></i><i className="building icon"></i></h3>
                                            </div>
                                            <div className="six wide column right aligned">
                                                <div className="ui button compact mini basic circular addDocuments hasModal" data-modal="uploadDocuments"><i className="upload icon"></i>Upload</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ui grid docsContainer">
                                        <div className="sixteen wide column">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="eight wide column">
                                <div className="field">
                                    <div className="ui dividing header">
                                        <div className="ui grid">
                                            <div className="ten wide column middle aligned">
                                                <h3>Exhibitor Internal Files <i className="building icon"></i></h3>
                                            </div>
                                            <div className="six wide column right aligned">
                                                <div className="ui button compact mini basic circular addDocuments hasModal" data-modal="uploadDocuments"><i className="upload icon"></i>Upload</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ui grid docsContainer">
                                        <div className="sixteen wide column">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Accordion.Content>
            </Accordion>
        )
    }
}