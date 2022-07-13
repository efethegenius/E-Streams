import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../Components/useFetch";
import { useCastFetch } from "../Components/useCastFetch";
import { useDetailsFetch } from "../Components/useDetailsFetch";
import { Navbar } from "../Components/Navbar";
import { useTrailerFetch } from "../Components/useTrailerFetch";
import { FaLink, FaImdb } from "react-icons/fa";
import { AuthContext } from "../helpers/AuthContext";
import ReactPlayer from "react-player";

// import { GoToTop } from "./GoToTop";

export const Searched = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [overview, setOverview] = useState("");
  const { id } = useParams();
  const { searchTerm, setSearchTerm } = useContext(AuthContext);

  const url = `https://api.themoviedb.org/3/search/multi?api_key=04c35731a5ee918f014970082a0088b1&query=${
    searchTerm ? searchTerm : "avengers"
  }`;

  const castUrl = `https://api.themoviedb.org/3/movie/${parseInt(
    id
  )}/credits?api_key=04c35731a5ee918f014970082a0088b1`;
  const img_path = "https://image.tmdb.org/t/p/w1280";

  const detailUrl = `https://api.themoviedb.org/3/movie/${parseInt(
    id
  )}?api_key=04c35731a5ee918f014970082a0088b1`;
  const trailerUrl = `https://api.themoviedb.org/3/movie/${parseInt(
    id
  )}/videos?api_key=04c35731a5ee918f014970082a0088b1`;

  const { loading, data } = useFetch(url);
  const { loadingCast, cast } = useCastFetch(castUrl);
  const { loadingDetails, details } = useDetailsFetch(detailUrl);
  const { loadingTrailer, trailer } = useTrailerFetch(trailerUrl);

  console.log(details);

  useEffect(() => {
    const trending = data.find((movie) => movie.id === parseInt(id));
    if (data.length > 0) {
      setTitle(trending.title);
      setImage(trending.poster_path);
      setRating(trending.vote_average);
      setOverview(trending.overview);
      setReleaseDate(trending.release_date);
    }
    return;
  }, [data, id]);

  const newDate = new Date(releaseDate);

  return (
    <div className="movies-container single-movie-container">
      <Navbar />
      <div className="all-movie">
        <img src={img_path + image} alt="image" />
        <div className="full-movie">
          <h3>{title}</h3>
          <p className="tagline">{details.tagline}</p>
          <p className="rating">
            Rating:{" "}
            <span
              className={
                parseInt(rating) <= 4.5
                  ? "bad"
                  : parseInt(rating) <= 6.5
                  ? "good"
                  : "great"
              }
            >
              {rating}
            </span>
          </p>
          <div className="movie-stats">
            <div className="movie-stat">
              <h5>Length</h5>
              <p>{details.runtime + " min."}</p>
            </div>
            <div className="movie-stat">
              <h5>Language</h5>
              <p>{details.original_language}</p>
            </div>
            <div className="movie-stat">
              <h5>Year</h5>
              <p>{newDate.getFullYear()}</p>
            </div>
            <div className="movie-stat">
              <h5>Status</h5>
              <p>{details.status}</p>
            </div>
          </div>
          <div className="overview-container">
            <h4>Overview</h4>
            <p className="overview">{overview}</p>
          </div>
          <div className="trailer-container">
            <h4>Movie Clip</h4>
            {trailer ? (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer.key}`}
                width="100%"
                controls="true"
              />
            ) : (
              <p>No Clip for this movie is available at the moment</p>
            )}
          </div>

          <div className="links-container">
            <a
              className="link"
              href={details.homepage}
              target="_blank"
              rel="noreferrer noopener"
            >
              Website <FaLink />
            </a>

            <a
              className="link"
              href={`https://www.imdb.com/title/${details.imdb_id}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              IMDB <FaImdb />
            </a>
          </div>

          <div className="casts-container">
            <h4>Casts</h4>
            <div className="casts-wrapper">
              {cast.map((casts) => {
                const { id, name } = casts;
                return (
                  <p key={id} className="cast-name">
                    {name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
