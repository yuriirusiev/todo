import React from 'react'
import ColumnItem from '../column-item'

import './index.scss'

const InProgressColumn = () => {
  return (
    <div className="app__columns__in-progress-column app-column hidden">
      <h2 className="app__columns__in-progress-column__header column-header">in progress</h2>
      <ColumnItem />
    </div>
  )
}

export default InProgressColumn