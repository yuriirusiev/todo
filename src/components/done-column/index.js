import React from 'react'
import ColumnItem from '../column-item'

import './index.scss'

const DoneColumn = (props) => {
  let className = "app__columns__done-column app-column"
  
  if (props.doneData.length === 0) {
    className += " hidden"
  }

  const columnItems = props.doneData.map((item) => {
    const { ...itemProps } = item
    
    let itemClassname = "app__columns__done-column__item__" + itemProps.id + " done-column-item"
    return (
      <div key={itemProps.id} className={itemClassname}>
        <ColumnItem 
          { ...itemProps }
        />
      </div>
    )
  })

  return (
    <div className={className}>
      <h2 className="app__columns__done-column__header column-header">done</h2>
      { columnItems }
    </div>
  )
}

export default DoneColumn