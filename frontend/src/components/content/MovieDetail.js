import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from '../chunks/Modal';

const MovieDetail = props => {
  const [movie, setMovie] = useState({});

  // Fetch data on url change
  useEffect(() => {
    fetch('https://movie-catalogue-248623.appspot.com/api/movies/' + props.match.params.id + '/')
      .then(res => res.json())
      .then(data => setMovie(data))
  }, [props.match]);

  let genres;
  if (movie.genres) {
    genres = movie.genres.map(g => <Link to={'/' + g} key={g}>{g}, </Link>);
  }

  return (
    <div className='container'>
      <h3>{movie.primary_title} ({movie.year})</h3>
      <div className="row">
        <div className="col s12 m5 l4">
          <img
            src={movie.cover_art}
            alt='poster'
            style={{ width: '100%' }} />
        </div>
        <div className="container col s12 m7 l8" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
          <p className="flow-text">
            {movie.synopsis}
          </p>
          <p className="flow-text">
            <b>Runtime: </b> {movie.runtime_minutes} minutes.
          </p>
          <p className="flow-text">
            <b>Genres: </b>
            {genres}
          </p>
        </div>
      </div>
      <div className="fixed-action-btn">
        <button
          data-target="editModal"
          className="btn-floating btn-large waves-effect waves-light modal-trigger red">
          <i className="large material-icons">mode_edit</i>
        </button>
      </div>
      <Modal modalId="editModal"/>
    </div>
  );
}

export default withRouter(MovieDetail);