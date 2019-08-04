import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Card from './chunks/Card';
import Modal from './chunks/Modal';

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const [cards, setCards] = useState([]);

  // Fetch data on mount
  useEffect(() => {
    if (props.match.params.genre) {
      fetch('https://movie-catalogue-248623.appspot.com/api/genres/' + props.match.params.genre + '/')
        .then(res => res.json())
        .then(data => setMovies(data.movie_set))
    } else {
      fetch('https://movie-catalogue-248623.appspot.com/api/movies/')
        .then(res => res.json())
        .then(data => setMovies(data))
    }
  }, [props.match]);

  // update movies
  useEffect(() => {
    if (movies.length > 0) {
      setCards(movies.map(movie => <Card image={movie.cover_art} title={movie.primary_title} key={movie.id} id={movie.id} />));
    } else {
      setCards([]);
    }
  }, [movies]);

  return (
    <div className="container">
      <div className="row">
        {cards}
      </div>
      <Modal />
    </div>
  );
}

export default withRouter(MovieList);