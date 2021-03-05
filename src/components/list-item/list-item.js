/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ProgressBar from '../progress-bar/progress-bar';

import './list-item.css';

export default class ListItem extends Component {
  state = {
    itemList: null,
  }

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList,
        });
      });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);

      return (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li
          className="list-group-item list-group-item-action"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
          onKeyPress={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <ProgressBar />;
    }

    const items = this.renderItems(itemList);

    return (
      <ul className="list-item list-group">
        {items}
      </ul>
    );
  }
}
