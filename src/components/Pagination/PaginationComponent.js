import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

const PaginationComponent = () => {
   const [active, setActive] = useState(1);

   let items = [];
   for (let number = 1; number <= 5; number++) {
      items.push(
         <Pagination.Item
            onClick={() => setActive(number)}
            key={number}
            active={number === active}
         >
            {number}
         </Pagination.Item>
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
