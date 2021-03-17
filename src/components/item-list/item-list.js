import React from 'react';
import PropTypes from 'prop-types';

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

ItemList.defaultProps = {
  onItemSelected: () => { },
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
};

export default ItemList;
