import React from 'react'
import ColumnItemHeader from '../column-item-header'
import ColumnItemInputText from '../column-item-input-text'
import ColumnItemButtons from '../column-item-buttons'

import './index.scss'

const ColumnItem = (props) => {
  console.log(props)
  return (
    <div className="app__columns__column-item">
      <ColumnItemHeader 
        id= {props.id}
        addingTime = {props.addingTime}
      />
      <ColumnItemInputText 
        inputText = {props.inputText}
      />
      <ColumnItemButtons 
        inProgress = {props.inProgress}
        freeze = {props.freeze}
        done = {props.done}
      />
    </div>
  )
}

export default ColumnItem