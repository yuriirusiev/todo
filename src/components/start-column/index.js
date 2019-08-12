import React from 'react'
import ColumnItem from '../column-item'

import './index.scss'

const StartColumn = (props) => {
  return (
    <div className="app__columns__start-column app-column">
    <h2 className="app__columns__start-column__header column-header">to do</h2>
      <ColumnItem 
        //userText = {props.userText}
      />
    </div>
  )
}

export default StartColumn