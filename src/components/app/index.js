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
      appData: [],
      history: [],
      startId: 0
    }
  }

  onItemAdded = (inputTextFromForm) => {
    const newItem = this.createItem(inputTextFromForm)

    this.setState({    
      appData: [...this.state.appData, newItem] 
    })
  }

  createItem  = (inputTextFromForm) => {
    let newId = this.state.startId
    newId++

    this.setState({
      startId: newId
    })
    return {
      id: newId,
      inputText: inputTextFromForm,
      addingTime: (new Date()).toLocaleTimeString(),
      inProgress: false,
      freeze: false,
      done: false
    }
  }

  onDeleteItem = (IdOfItemToDelete) => {
    const newData = [ ...this.state.appData]
    const index = newData.findIndex(item => item.id === IdOfItemToDelete)

    newData.splice(index, 1)
    this.setState({
      appData: newData
    })
  }
  
  render () {
    return (
      <div className="app-wrapper">
        <div className="app">
          <MainHeader />
          <MainForm
            onItemAdded={this.onItemAdded} />
          <Columns 
            inputData = {this.state.appData}
            onDelete = {this.onDeleteItem}
          />
        </div>
      </div>
    )
  }
}