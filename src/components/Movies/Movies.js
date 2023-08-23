import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie/Movie';
import styles from './Movies.module.css';

const propTypes = {
  movies: PropTypes.array.isRequired,
}
function Movies(props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oferty:</h2>
      {props.movies.map(movie => (
        <Movie 
          onOpen={props.onOpen}
          key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Movies.propTypes = propTypes;

const areEqual = (prevProps, nextProps) => {
  return prevProps.movies === nextProps.movies;
}

export default React.memo(Movies, areEqual);