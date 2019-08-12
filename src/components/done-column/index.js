import React from 'react'
import ColumnItem from '../column-item'

import './index.scss'

const DoneColumn = () => {
  return (
    <div className="app__columns__done-column app-column hidden">
    <h2 className="app__columns__done-column__header column-header">done</h2>
      <ColumnItem />
    </div>
  )
}

export default DoneColumn