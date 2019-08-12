import React from 'react'
import MainHeader from '../main-header'
import MainForm from '../main-form'
import Columns from '../columns'
import '../../styles/inherited.scss'
import '../../styles/variables.scss'
import '../../styles/grid.scss'
import '../../styles/layout.scss'

import './index.scss'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      appData: [{
        id: "",
        inputText: "",
        addingTime: "",
        inProgress: false,
        freeze: false,
        done: false
      }]
    }
  }
  
  render () {
    return (
      <div className="app-wrapper">
        <div className="app">
          <MainHeader />
          <MainForm 
            //onSubmit = {this.handleSubmit} 
            //onChange = {this.handleChange}
          />
          <Columns 
            //userText = {this.state.value} 
          />
        </div>
      </div>
    )
  }
}