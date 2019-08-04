import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const MovieDetail = () => {
  return (
    <div className='container'>
      <h3>Avengers: Endgame (2019)</h3>
      <div className="row">
        <div className="col s12 m5 l4">
          <img
            src='https://images-na.ssl-images-amazon.com/images/I/81hkRNYQhNL._SY679_.jpg'
            alt='poster'
            style={{ width: '100%' }} />
        </div>
        <div className="container col s12 m7 l8" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
          <p className="flow-text">
            Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.
          </p>
          <p className="flow-text">
            <b>Director:</b> Anthony Russo, Joe Russo
          </p>
          <p className="flow-text">
            <b>Genres: </b>
            <Link to='/action/'>Action, </Link>
            <Link to='/sci-fi/'>Sci-Fi, </Link>
            <Link to='/superhero/'>Superhero</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MovieDetail);