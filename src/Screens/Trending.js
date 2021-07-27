import axios from "axios";
import React, { useEffect, useState } from "react";
import PaginationComponent from "../components/Pagination/PaginationComponent";
import SingleCard from "../components/SingleCard/SingleCard";

const Trending = () => {
   const [data, setData] = useState([]);
   const [page, setPage] = useState(1);
   useEffect(() => {
      axios
         .get(
            `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
         )
         .then((response) => {
            setData(response.data.results);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [page]);
   return (
      <>
         <h1 className="category-heading">Trending</h1>
         <section className="trending-card-grid">
            {!data
               ? null
               : data.map((movie) => (
                    <div>
                       <SingleCard
                          key={movie.id}
                          id={movie.id}
                          poster={movie.poster_path}
                          title={movie.title || movie.name}
                          date={movie.first_air_date || movie.release_date}
                          media_type={movie.media_type}
                          vote_average={movie.vote_average}
                          overview={movie.overview}
                       />
                    </div>
                 ))}
         </section>
         <PaginationComponent />
      </>
   );
};

export default Trending;
