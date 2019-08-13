import React from 'react'
import ColumnItemHeader from '../column-item-header'
import ColumnItemInputText from '../column-item-input-text'
import ColumnItemButtons from '../column-item-buttons'

import './index.scss'

const ColumnItem = (props) => {
  return (
    <div className="app__columns__column-item__inner">
      <ColumnItemHeader 
        id= {props.id}
        addingTime = {props.addingTime}
      />
      <ColumnItemInputText 
        inputText = {props.inputText}
      />
      <ColumnItemButtons 
        id={props.id}
        inProgress={props.inProgress}
        freeze={props.freeze}
        done={props.done}
        onDelete={props.onDelete}
        onInProgressMove={props.onInProgressMove}
        onFreeze={props.onFreeze}
        onDone={props.onDone}
      />
    </div>
  )
}

export default ColumnItem