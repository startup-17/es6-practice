import React, { Component } from 'react';
import { data } from './treeData';
// import PropTypes from 'prop-types';
import List from './treeList'
import './App.css';

class Tree extends Component {
  constructor (props) {
		super (props);
		this.state = {
			data: { data },
		}

		this.handleClick = this.handleClick.bind(this);

	}
	handleClick(event) {
		const itemIndex = event.target.dataset.index;
		if (itemIndex) {
			this.state.data.data[itemIndex].isShow= !this.state.data.data[itemIndex].isShow;
		}
    this.setState({
			data: this.state.data,
		});
  }



  render() {
    return (
			<List
				item = {this.state.data.data}
				isShow = {this.isshow}
				onClick = {this.handleClick}
			/>
    );
  }
}


export default Tree;
