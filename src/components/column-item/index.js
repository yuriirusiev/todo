import React from 'react'
import ColumnItemHeader from '../column-item-header'
import ColumnItemInputText from '../column-item-input-text'
import ColumnItemButtons from '../column-item-buttons'

import './index.scss'

const ColumnItem = (props) => {
  return (
    <div className="app__columns__column-item">
      <ColumnItemHeader />
      <ColumnItemInputText 
        //userText = {props.userText}
      />
      <ColumnItemButtons />
    </div>
  )
}

export default ColumnItem