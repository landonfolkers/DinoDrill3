import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Jobdetails from './components/Jobdetails'
import Inputform from './components/Inputform'

class App extends Component {
  render() {
    return (
      <div id="mainbody">
        <Header />
          <main>
            <Jobdetails />
            <Inputform />
          </main>
        <Footer />
      </div>
    )
  }
}

export default App
