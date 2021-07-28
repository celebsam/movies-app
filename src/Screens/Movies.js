import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PaginationComponent from "../components/Pagination/PaginationComponent";
import SingleCard from "../components/SingleCard/SingleCard";

const Movies = () => {
   const [data, setData] = useState([]);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(5);

   useEffect(() => {
      axios
         .get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`
         )
         .then((response) => {
            console.log(response);
            setData(response.data.results);
            setTotalPages(response.data.total_pages);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [page]);
   return (
      <>
         <h1 className="category-heading">Movies</h1>
         <section className="trending-card-grid">
            {!data
               ? null
               : data.map((movie) => (
                    <Link key={movie.id} className="trending-card">
                       <SingleCard
                          id={movie.id}
                          poster={movie.poster_path}
                          title={movie.title || movie.name}
                          date={movie.first_air_date || movie.release_date}
                          media_type={movie.media_type}
                          vote_average={movie.vote_average}
                          overview={movie.overview}
                       />
                    </Link>
                 ))}
         </section>
         <br />
         <PaginationComponent setPage={setPage} total_pages={totalPages} />
      </>
   );
};

export default Movies;
