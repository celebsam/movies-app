import React from "react";
import { Badge, Card } from "react-bootstrap";
import { img_300 } from "../../config/config";

const SingleCard = ({
   id,
   poster,
   title,
   date,
   media_type,
   vote_average,
   overview,
}) => {
   return (
      <div style={{ position: "relative" }}>
         <Badge
            style={{
               zIndex: "100",
               position: "absolute",
               top: "2px",
               right: "2px",
            }}
            bg="secondary"
         >
            {vote_average}
         </Badge>
         <Card>
            <Card.Img
               style={{ width: "100%" }}
               variant="top"
               src={`${img_300}/${poster}`}
            />
            <Card.Body>
               <Card.Title
                  style={{
                     color: "turquoise",
                     textOverflow: "ellipsis",
                     whiteSpace: "nowrap",
                     overflow: "hidden",
                  }}
               >
                  {title}
               </Card.Title>
               <div className="ellipsis">
                  <Card.Text>{overview}</Card.Text>
               </div>
               <br />
               <div
                  style={{ display: "flex", justifyContent: "space-between" }}
               >
                  <Card.Text>
                     {media_type === "tv" ? "Series" : "Movie"}
                  </Card.Text>
                  <Card.Text>{date}</Card.Text>
               </div>
            </Card.Body>
         </Card>
      </div>
   );
};

export default SingleCard;
