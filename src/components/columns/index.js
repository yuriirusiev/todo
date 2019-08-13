import React from 'react'
import StartColumn from '../start-column'
import InProgressColumn from '../in-progress-column'
import DoneColumn from '../done-column'

import './index.scss'

const Columns = (props) => {
  return (
    <div className="app__columns">
      <StartColumn 
        inputData={props.inputData}
        onDelete={props.onDelete}
        onInProgressMove={props.onInProgressMove}
      />
      <InProgressColumn 
        inProgressData={props.inProgressData}
        onFreeze={props.onFreeze}
        onDone={props.onDone}
      />
      <DoneColumn 
        doneData={props.doneData}
      />
    </div>
  )
}

export default Columns