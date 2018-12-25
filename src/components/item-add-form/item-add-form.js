import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
  constructor() {
    super();
    this.state = {
      label: ''
    };

    this.onLabelChange = (e) => {
      this.setState({
        label: e.target.value
      });
    };

    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.onItemAdded(this.state.label);
      this.setState({
        label: ''
      });
    };
  }

  render() {

    return (
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
        <input type="text" 
               className="form-control form-control-lg" 
               onChange={this.onLabelChange}
               placeholder="What's need to be done?"
               value={this.state.label}/>
        <button 
          className="btn btn-outline-secondary btn-sm">
          Add Item
        </button>
      </form>
    )
  }
}