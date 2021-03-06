/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>
        {item[field]}
      </span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {
  PERSONIMGESURL = 'https://starwars-visualguide.com/assets/img/characters/';

  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item),
        });
      });
  }

  render() {
    const { item, image } = this.state;

    if (!item) {
      return <span>Select smth from a List</span>;
    }

    const {
      // id,
      name,
      // gender,
      // birthYear,
      // height,
      // hairColor,
      // eyeColor,
    } = item;

    return (
      <div className="item-details card mb-3">
        <img
          className="item-image"
          src={image}
          alt={name}
        />

        <div className="card-body">
          <h4 className="text-white">
            {name}
          </h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}
