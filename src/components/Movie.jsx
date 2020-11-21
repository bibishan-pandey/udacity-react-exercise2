import React from 'react';


const Movie = ({movie, users, profiles}) => {
 
  const favoriteMovieUsers = profiles.filter(profile => parseInt(profile.favoriteMovieID) === movie.id);
  
  return (
    <div>
      <h2>{movie.name}</h2>
      {(favoriteMovieUsers.length !== 0) ? 
        <div>
          <p>
            Liked by:
          </p>
          <ul>
            {favoriteMovieUsers.map(user => <li key={user.id}>{users[user.userID].name}</li>)}
          </ul>
        </div>
        :
        <div>
          <p>None of the current users liked this movie</p>
        </div>
      }
    </div>    
  );
};

export default Movie;
