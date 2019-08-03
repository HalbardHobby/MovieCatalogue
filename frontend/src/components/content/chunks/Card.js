import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="card-image activator waves-effect waves-block waves-light">
        <img className="activator" src={props.image} />
        <span className="card-title">
          {props.title}
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {props.title}<i className="material-icons right">close</i>
        </span>
      </div>
    </div>
  );
}

export default Card;