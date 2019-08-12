import React from 'react'

import './index.scss'

export default class MainForm extends React.Component {
  render() {
    return (
      <form 
        className="app__main-form"
        //onSubmit={this.props.onSubmit}
      >
        <div className="app__main-form-input__wrapper">
          <input
            className="app__main-form-input" 
            type="text"
            placeholder="reminder text"
            //value={this.props.value} 
            //onChange={this.props.onChange}
          />
          <p className="app__main-form__input-hint">
            at least 8 characters
          </p>
        </div>
        <button 
          className="app__main-form__button" 
          type="submit" 
          value="Submit" 
        >
          Add
        </button>
      </form>
    )
  }
}