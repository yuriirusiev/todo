import React from 'react'

import './index.scss'

const ColumnItemButtons = () => {
  return (
    <div className="app__columns__column-item-data__buttons">
      <button className="app__columns__column-item-data__buttons__remove-btn app-btn">
        remove
      </button>
      <button className="app__columns__column-item-data__buttons__in-progress-btn app-btn">
        in progress
      </button>
      <button className="app__columns__column-item-data__buttons__freeze-btn app-btn hidden">
        freeze
      </button>
      <button className="app__columns__column-item-data__buttons__done-btn app-btn hidden">
        done
      </button>      
    </div>
  )
}

export default ColumnItemButtons