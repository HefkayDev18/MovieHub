import React from 'react';


const MovieCard = ({ movieX }) => {
    return (
        <div className='movie'>
          <div>
            <p>{movieX.Year}</p>
          </div>

          <div>
            <img src={movieX.Poster !== 'N/A' ? movieX.Poster : 'https://via.placeholder.com/400'} alt={movieX.Title}/>
          </div>

          <div>
            <span>{movieX.Type}</span>
            <h3>{movieX.Title}</h3>
          </div>

        </div>
    );
}

export default MovieCard;