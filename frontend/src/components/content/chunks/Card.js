import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image} />
        <span className="card-title">
          {props.title}
        </span>
      </div>
    </div>
  );
}

export default Card;