import React from 'react'
import ColumnItem from '../column-item'

import './index.scss'

const StartColumn = (props) => {

  let className = "app__columns__start-column app-column"
  
  if (props.inputData.length === 0) {
    className += " hidden"
  }

  const columnItems = props.inputData.map((item) => {
    const { ...itemProps } = item;
    return (
      <div key={itemProps.id} className="list-group-item">
        <ColumnItem 
          { ...itemProps}
        />
        {/* onToggleImportant={ () => onToggleImportant(id) }
        onToggleDone={ () => onToggleDone(id) }
        onDelete={ () => onDelete(id) } /> */}
      </div>
    )
  })

  return (
    <div className={className}>
      <h2 className="app__columns__start-column__header column-header">to do</h2>
      { columnItems }
    </div>
  )
}

export default StartColumn