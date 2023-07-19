import React, {useEffect} from 'react';
import Banner from "../Components/Banner";
import { movieAction } from "../redux/actions/movieAction";
import { useLocation } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector, useDispatch } from 'react-redux';
import { ClipLoader } from "react-spinners";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const MovieDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const movieItem = location.state;
  const { popularMovies, topRatedMovies, upComingMovies, loading, genreList } = useSelector(
    (state) => state.movie
  );
    useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <ClipLoader color="#fff" loading={loading} size={150} />
      </div>
    ) 
  }

  return (
    <div className='MovieDetail'>
      {/* MovieInfo (Top) */}
      <div 
      className='movie-info-wrap'
      style={{backgroundImage: 
        "URL(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movieItem.poster_path}` + ")",
      }}
      >
        <div className='movie-info'>
          <div className='movie-info-left'>
            <img 
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieItem.poster_path}`}
            />
          </div>
          <div className='movie-info-right'>
            <h1>{movieItem.title}</h1>
            <div className='date_adult_genre'>
              <span className='adult'>{movieItem.adult ? '19' : 'All'}</span>
              <span className='date'>{movieItem.release_date} (KR)</span>
              <div className='info-badge'>
                  {movieItem.genre_ids.map((id) => (
                    <span className='genre'>{genreList.find((movieItem) => movieItem.id === id).name}</span>
                  ))}
              </div>
              <span>{movieItem.release_runtime}</span>
            </div>
            <div className='overview'>
              <span className='title'>개요</span>
              <span className='desc'>{movieItem.overview}</span>
            </div>
            <div className='button'>
              <Button variant="danger"><FontAwesomeIcon icon={faPlay} /> 재생</Button>
              <Button variant="secondary"><FontAwesomeIcon icon={faCircleInfo} /> 상세보기</Button>
            </div>
          </div>
        </div>
      </div>
      {/* MovieDetail (Bottom) */}
      <div className='movie-detail'>
      </div>
    </div>
  )
}

export default MovieDetail
