import React from 'react'

import './index.scss'

const ColumnItemInputText = (props) => {
  return (
    <div className="app__columns__column-item-data__input-text__wrapper">
      <p className="app__columns__column-item-data__input-text">
        {props.inputText}
      </p>
    </div>
  )
}

export default ColumnItemInputText