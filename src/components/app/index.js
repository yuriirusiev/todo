import React from 'react'
import MainHeader from '../main-header'
import MainForm from '../main-form'
import Columns from '../columns'
import '../../styles/inherited.scss'
import '../../styles/variables.scss'
import '../../styles/grid.scss'
import '../../styles/frameworks.scss'

import './index.scss'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      startData: [],
      inProgressData: [],
      doneData: [],
      startId: 0
    }
  }

  onAddItem = (inputTextFromForm) => {
    const checkInput = inputTextFromForm.split("")

    if (checkInput.length < 8) {
      return alert("Input min 8 characters")
    }
    
    const newItem = this.createItem(inputTextFromForm)

    this.setState({    
      startData: [newItem, ...this.state.startData] 
    })
  }

  createItem  = (inputText) => {
    let newId = this.state.startId
    newId++
    
    this.setState({
      startId: newId
    })
    return {
      id: newId,
      inputText: inputText,
      addingTime: (new Date()).toLocaleTimeString(),
      inProgress: false,
      freeze: false,
      done: false
    }
  }

  onDeleteItem = (idOfItemToDelete) => {
    const item = document.getElementsByClassName("app__columns__start-column__item__" + idOfItemToDelete)
    item[0].classList.add('deleting-item')

    setTimeout(()=>{
      const newData = [ ...this.state.startData]
      const index = newData.findIndex(item => item.id === idOfItemToDelete)

      newData.splice(index, 1)
      this.setState({
        startData: newData
      })
    }, 2000)
  }

  onInProgressMove = (idOfItemToMove) => {
    const item = document.getElementsByClassName("app__columns__start-column__item__" + idOfItemToMove)
    item[0].classList.remove('start-column-item')
    item[0].classList.add('in-progress-column-item')

    const toInProgressData = [ ...this.state.startData]
    const index = toInProgressData.findIndex(item => item.id === idOfItemToMove)

    const itemToMove = toInProgressData.splice(index, 1)
    itemToMove[0].inProgress = true

    this.setState({
      startData: toInProgressData,
      inProgressData: itemToMove.concat(this.state.inProgressData)
    })
  }

  onFreeze = (idFreezeItem) => {
    const item = document.getElementsByClassName("app__columns__in-progress-column__item__" + idFreezeItem)
    item[0].classList.toggle('in-progress-column-item')
    item[0].classList.toggle('freezed-item')

    const newInProgressData = [ ...this.state.inProgressData]
    const index = newInProgressData.findIndex(item => item.id === idFreezeItem)

    const itemToFreeze = newInProgressData.splice(index, 1)
    itemToFreeze[0].freeze = !itemToFreeze[0].freeze

    this.setState({
      inProgressData: itemToFreeze.concat(newInProgressData),
    })
  }

  onDone = (idOfItemToMove) => {
    const item = document.getElementsByClassName("app__columns__in-progress-column__item__" + idOfItemToMove)
    item[0].classList.remove('in-progress-column-item')
    item[0].classList.add('done-column-item')

    const toDoneData = [ ...this.state.inProgressData]
    const index = toDoneData.findIndex(item => item.id === idOfItemToMove)

    const itemToMove = toDoneData.splice(index, 1)
    itemToMove[0].inProgress = false
    itemToMove[0].done = true

    this.setState({
      inProgressData: toDoneData,
      doneData: itemToMove.concat(this.state.doneData)
    })
  }
  
  render () {
    return (
      <div className="app-wrapper">
        <div className="app">
          <MainHeader />
          <MainForm
            onItemAdded={this.onAddItem} />
          <Columns 
            inputData={this.state.startData}
            inProgressData={this.state.inProgressData}
            doneData={this.state.doneData}
            onDelete={this.onDeleteItem}
            onInProgressMove={this.onInProgressMove}
            onFreeze={this.onFreeze}
            onDone={this.onDone}
          />
        </div>
      </div>
    )
  }
}