import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const List = (props) => {
  const { items, onDelete } = props;
  console.log(items);
  
  return (<ul>
    { items.map((item, index) => <li key={index}>{ item }<button data-index={index} onClick={onDelete} >delete</button><button data-index={index}>edit</button></li>) }
  </ul>);
}

class Viewtemp extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: '',
    //   complete: false,
    // }
    this.state = {
      term: '',
      items: ['item1', 'item2','item3']
    };
    //this.arr = [{value: 'item1', complete: false},{value: 'item2', complete: false}]

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);

  }
  handleChange(event) {
    this.setState({term: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    }, () => {
      console.log(this.state);
    });

  }
  onDelete(event) {
    console.log('onDelete', event.target.dataset.index);
    const newList = this.state.items.filter((item,key) => key != event.target.dataset.index);
    this.setState({
      term: '',
      items: newList
    }, () => {
      console.log(this.state);
    });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="addValue" placeholder="to do list" value={this.state.term}  onChange={this.handleChange}/>
          <button>add</button>
        </form>
        <List
          items={ this.state.items }
          onDelete={ this.onDelete }
          onEdit={ this.onEdit }
        />
        <input type="text" className = "editInput" />
      </div>
    );
  }
}

export default Viewtemp;
