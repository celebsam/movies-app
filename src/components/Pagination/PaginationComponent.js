import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ setPage, total_pages }) => {
   const [active, setActive] = useState(1);
   console.log(total_pages);
   const paginationHandler = (number) => {
      setActive(number);
      setPage(number);
      window.scrollTo(0, 0);
   };

   let items = [];
   for (let number = 1; number <= total_pages; number++) {
      number < 10 ? (
         items.push(
            <Pagination.Item
               onClick={() => paginationHandler(number)}
               key={number}
               active={number === active}
            >
               {number}
            </Pagination.Item>
         )
      ) : (
         <Pagination.Ellipsis />
      );
   }
   return (
      <div>
         <div>
            <Pagination>{items}</Pagination>
            <br />
         </div>
      </div>
   );
};

export default PaginationComponent;
