import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../chunks/Card';
import CreateEntryModal from '../layout/CreateEntryModal';

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const [cards, setCards] = useState([]);
  const [genre, setGenre] = useState('');

  // Fetch data on mount
  useEffect(() => {
    if (props.match.params.genre) {
      setGenre(props.match.params.genre);
      fetch('https://movie-catalogue-248623.appspot.com/api/genres/' + props.match.params.genre + '/')
        .then(res => res.json())
        .then(data => setMovies(data.movie_set))
    } else {
      setGenre('');
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

  let title = (genre != '')? <h4>Genre: {genre}</h4> : <h4>All Movies</h4>;

  return (
    <div className="container">
      {title}
      <div className="row">
        {cards}
      </div>
      <CreateEntryModal />
    </div>
  );
}

export default withRouter(MovieList);