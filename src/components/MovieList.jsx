import React from 'react';
import Movie from './Movie';


const MovieList = ({movies, users, profiles}) => {
  const moviesList = Object.keys(movies).map(movie => movies[movie]);
  return (
    <div>
      {moviesList.map(movie => <Movie key={movie.id} movie={movie} users={users} profiles={profiles}/>)}
    </div>    
  );
};

export default MovieList;
