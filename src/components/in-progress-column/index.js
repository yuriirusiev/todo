import React from 'react'
import ColumnItem from '../column-item'

import './index.scss'

const InProgressColumn = (props) => {
  let className = "app__columns__in-progress-column app-column"
  
  if (props.inProgressData.length === 0) {
    className += " hidden"
  }

  const columnItems = props.inProgressData.map((item) => {
    const { ...itemProps } = item
    
    let itemClassname = "app__columns__in-progress-column__item__" + itemProps.id + " in-progress-column-item"
    return (
      <div key={itemProps.id} className={itemClassname}>
        <ColumnItem 
          { ...itemProps }
          onFreeze={props.onFreeze}
          onDone={props.onDone}
        />
      </div>
    )
  })

  return (
    <div className={className}>
      <h2 className="app__columns__in-progress-column__header column-header">in progress</h2>
      { columnItems }
    </div>
  )
}

export default InProgressColumn