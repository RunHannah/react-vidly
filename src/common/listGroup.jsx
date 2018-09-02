import React, { Component } from "react";

// filtering items using valueProperty and itemProperty rather than property names
// so ListGroup can by reused by any list that may not have those property names
// look at movies under ListGroup
const ListGroup = props => {
  const { items, textProperty, valueProperty } = props;

  return (
    <ul className="list-group">
      {items.map(item => (
        <li key={item[valueProperty]} className="list-group-item">
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
