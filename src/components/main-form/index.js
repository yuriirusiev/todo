import React from 'react'

import './index.scss'

export default class MainForm extends React.Component {
  state = {
    inputText: ''
  };

  onChange = (event) => {
    this.setState({
      inputText: event.target.value
    })
  };

  onSubmit = (event) => {
    event.preventDefault()
    const inputText = this.state.inputText
    
    this.setState({
      inputText: ''
    })
    this.props.onItemAdded(inputText)
  }

  render() {
    return (
      <form 
        className="app__main-form"
        onSubmit={this.onSubmit}
      >
        <div className="app__main-form-input__wrapper">
          <input
            className="app__main-form-input" 
            type="text"
            placeholder="reminder text"
            value={this.state.inputText} 
            onChange={this.onChange}
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