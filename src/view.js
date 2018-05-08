import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import List from './compontent/List';

class Viewtemp extends Component {
  propTypes = {
    term: PropTypes.string,
    items: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [
        {value: 'item1',complete: false},
        {value: 'item2',complete: true},
        {value: 'item3',complete: false},
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onChange = this.onChange.bind(this);

  }
  handleChange(event) {
    this.setState({term: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      term: '',
      items: [
        ...this.state.items,
        {
          value: this.state.term,
          complete: false
        }]
    });

  }
  onDelete(event) {
    const newList = this.state.items.filter((item,key) => key !== event.target.dataset.index);
    this.setState({
      term: '',
      items: newList
    });
  }
  onChange(event) {
    const indexItem = event.target.dataset.index
    this.state.items[indexItem].complete = event.target.checked;
    const newList = this.state.items;
    this.setState({
      items:this.state.items
    });
  };



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="addValue"
            placeholder="to do list"
            value={this.state.term}
            onChange={this.handleChange}/>
          <button>add</button>
        </form>
        <List
          items={ this.state.items }
          onDelete={ this.onDelete }
          onChange={ this.onChange }
        />
      </div>
    );
  }
}


export default Viewtemp;
