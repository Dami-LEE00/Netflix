import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const responsive = {
  desktop1: {
    breakpoint: { max: 3000, min: 1800 },
    items: 6
  },
  desktop2: {
    breakpoint: { max: 1799, min: 1280 },
    items: 4
  },
  desktop3: {
    breakpoint: { max: 1279, min: 950 },
    items: 3
  },
  tablet1: {
    breakpoint: { max: 949, min: 640 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 639, min: 0 },
    items: 1
  }
};

const MovieAll = ({ movies }) => {
  return (
    <div className='MovieAll' responsive={responsive}>
        {movies.results.map((item) => (
          <MovieCard item={item} />
        ))}
    </div>
  )
}

export default MovieAll
