import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => {
  return (
    <div className="col s6 m4 l3">
      <Link to='/detail/'>
        <div className="card">
          <div className="card-image">
            <img src={props.image} />
            <span className="card-title">
              {props.title}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;