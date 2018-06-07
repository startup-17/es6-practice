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
		const trigger = event.target.className;
		const isShow = (trigger === 'closeTree') ? false: true;
		if (trigger) { // 點選全開或全關時
			this.state.data.data.map((item, index) =>
				item.isShow = isShow
			)
		} else if (itemIndex) { // 單個點擊時
			this.state.data.data[itemIndex].isShow= !this.state.data.data[itemIndex].isShow;
		}
    this.setState({
			data: this.state.data,
		});
  }



  render() {
    return (
			<div>
				<List
					item = {this.state.data.data}
					isShow = {this.isshow}
					onClick = {this.handleClick}
				/>
				<button className="closeTree" onClick={this.handleClick}>close tree</button>
				<button className="openTree" onClick={this.handleClick}>open tree</button>
			</div>
    );
  }
}


export default Tree;
