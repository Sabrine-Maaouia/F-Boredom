import { Divider } from "antd";
import React, { useEffect, useState } from "react";
import Gallery from "react-photo-gallery";
import { Link } from "react-router-dom";
import FCarousel from "../components/FCarousel";
import FFilter from "../components/FFilter";
import FGallery from "../components/FGallery";
import { fetchGenre, fetchMovies, fetchTopratedMovie } from "../lib/fetch";
import { photos } from "../utils/img.constants";

function MoviesPage() {
  const [topRated, setTopRated] = useState([]);
  const [genre, setGenre] = useState([]);
  const [movieList, setMovieList] = useState([]);

  console.log(movieList);

  const fetchdata = async () => {
    setTopRated(await fetchTopratedMovie());
    setGenre(await fetchGenre());
    setMovieList(await fetchMovies());
  };

  // const handleGenreClick = async (genre_id) => {
  //   setMovieByGenre(await fetchMovieByGenre(genre_id));
  // };
  // const genreList = genres.map((item, index) => {
  //   return (
  //     <span key={index}>
  //       <Button
  //         type="link"
  //         onClick={() => {
  //           handleGenreClick(item.id);
  //         }}
  //       >
  //         {item.name}
  //       </Button>
  //     </span>
  //   );
  // });

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="f-page-layout">
      <FCarousel data={topRated} />
      <div className="f-page-container">
        <FGallery title="Latest Movies" data={topRated} />
        <div style={{ padding: "032px" }}>
          <Divider className="f-divider" />
        </div>
        <FFilter data={genre} />
        <div className="container">
          <ul className="image-gallery">
            {movieList?.map((movie) => (
              <li>
                <Link to={movie.id.toString()}>
                  <img alt={movie.title} src={movie.poster} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MoviesPage;
