import React, { Component } from 'react'
import Preview from './Preview'

class Inputform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            areaText: [],
            showMessage: true,
            showPreview: true,
            hideMessage: false
        }
    }

    clearState(e) {
        e.preventDefault()
        this.setState({ areaText: [] })
        this.setState({ showMessage: false })
        this.setState({ hideMessage: true })
    }


    showText() {
        let newState = this.state.showPreview
        newState = !newState
        this.setState({ showPreview: newState })
    }

    render() {
        return (
            <div>
                <form id='application-input'>
                    <label>Apply Here:</label>
                    <textarea id="application-text" rows="8" cols="100" value={this.state.areaText}
                        onChange={(event) => {
                            this.setState({
                                areaText: event.target.value
                            })
                        }}></textarea>
                    <input id="submit" type="submit" value="Submit" onClick={this.clearState.bind(this)} />
                </form>
                <section>
                    {
                        this.state.hideMessage
                            ? true :
                            <p id="hiddenmessage">&nbsp;</p>
                    }
                    {
                        this.state.showMessage
                            ? false :
                            <p id="message">Your application was submitted!</p>
                    }
                </section>
                <Preview areaText={this.state.areaText} showPreview={this.state.showPreview} showText={this.showText.bind(this)} />
            </div>
        )
    }
}

export default Inputform