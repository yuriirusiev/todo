import React from 'react'

import './index.scss'

const ColumnItemHeader = (props) => {
  return (
    <div className="app__columns__column-item-data__header">
      <p className="app__columns__column-item-data__header-number">
        {props.id}
      </p>
      <p className="app__columns__column-item-data__header-time">
        {props.addingTime}
      </p>
    </div>
  )
}

export default ColumnItemHeader