import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MovieCard = ({ item }) => {

  const {genreList} = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const onMoveLink = () => {
    navigate(`/movies/${item.id}`, { state : item });
    console.log(item);
  };
  return (
    <div
      onClick={onMoveLink}
      className='card' 
      style={{backgroundImage: 
        "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` + ")",
      }}
    >
      <div className='overlay'>
        <h1>{item.title}</h1>
        <div className='overlay-badge'>
          {item.genre_ids.map((id) => (
            <Badge bg='danger'>
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
      <div className='bottom'>
        <span>{item.adult ? '19' : 'ALL'}</span>
        <span>{item.vote_average}</span>
      </div>
      </div>
    </div>
  )
}

export default MovieCard
