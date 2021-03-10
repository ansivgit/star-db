/* eslint-disable react/prop-types */
import React from 'react';

import './item-list.css';

const ItemList = (props) => {
  const {
    data,
    onItemSelected,
    children: renderLabel,
  } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        className="list-group-item list-group-item-action"
        key={id}
        onClick={() => onItemSelected(id)}
        onKeyPress={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};

export default ItemList;
