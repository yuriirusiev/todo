import React from 'react'
import StartColumn from '../start-column'
import InProgressColumn from '../in-progress-column'
import DoneColumn from '../done-column'

import './index.scss'

const Columns = (props) => {
  return (
    <div className="app__columns">
      <StartColumn 
        //userText = {props.userText}
      />
      <InProgressColumn />
      <DoneColumn />
    </div>
  )
}

export default Columns