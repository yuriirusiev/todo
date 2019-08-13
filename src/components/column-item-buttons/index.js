import React from 'react'

import './index.scss'

const ColumnItemButtons = (props) => {
  const btnFirstPartClassname = "app-btn app__columns__column-item-data__buttons__"
  let removeBtnClassname = btnFirstPartClassname + "remove-btn__" + props.id
  let inProgressBtnClassname = btnFirstPartClassname + "in-progress-btn__" + props.id
  let freezeBtnClassname = btnFirstPartClassname + "freeze-btn__" + props.id
  let doneBtnClassname = btnFirstPartClassname + "done-btn__" + props.id

  if (props.inProgress) {
    removeBtnClassname += " hidden"
    inProgressBtnClassname += " hidden"
  } else if (props.done) {
    removeBtnClassname += " hidden"
    inProgressBtnClassname += " hidden"
    freezeBtnClassname = btnFirstPartClassname + "freeze-btn__" + props.id + " hidden"
    doneBtnClassname = btnFirstPartClassname + "done-btn__" + props.id + " hidden"
  } else {
     freezeBtnClassname = btnFirstPartClassname + "freeze-btn__" + props.id + " hidden"
     doneBtnClassname = btnFirstPartClassname + "done-btn__" + props.id + " hidden"
  }
  
  let freezeBtnText = "freeze"
  let doneBtnState = props.freeze

  if (props.freeze) {
    freezeBtnText = "unfreeze"
  }

  return (
    <div className="app__columns__column-item-data__buttons">
      <button 
        className={ removeBtnClassname }
        onClick={ () => props.onDelete(props.id) }
        >
        remove
      </button>
      <button 
        className={ inProgressBtnClassname }
        onClick={ () => props.onInProgressMove(props.id) }
      >
        in progress
      </button>
      <button 
        className={ freezeBtnClassname }
        onClick={ () => props.onFreeze(props.id) }
        >
        { freezeBtnText }
      </button>
      <button 
        className={ doneBtnClassname }
        disabled={ doneBtnState }
        onClick={ () => props.onDone(props.id) }
      >
        done
      </button>      
    </div>
  )
}

export default ColumnItemButtons