import React, { Component } from 'react'

class Jobdetails extends Component {
    constructor(props) {
        super(props)
        this.state = { job: [] }
    }

    componentDidMount() {
        fetch('./listing.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(job => this.setState({ job }))
    }

    render() {
        return (
            <div>
                <h2>Job Details</h2>
                <section id="job-info">
                    <h4>{this.state.job.title}</h4>
                    <p>{this.state.job.description}</p>
                </section>
            </div>
        )
    }
}

export default Jobdetails