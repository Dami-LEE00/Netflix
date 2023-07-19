import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../Components/Banner";
import MovieSlide from "../Components/MovieSlide";
import { useState, CSSProperties } from "react";
import { ClipLoader } from "react-spinners";
import MovieAll from "../Components/MovieAll";

const Movies = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector(
    (state) => state.movie
  );
  console.log("home", popularMovies);

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
    <div className="Movies">
      <h1>전체 영화 목록</h1>
      <div className="movies-wrapper">
        <MovieAll movies={popularMovies} />
        <MovieAll movies={topRatedMovies} />
        <MovieAll movies={upComingMovies} />
      </div>
    </div>
  );
}

export default Movies
