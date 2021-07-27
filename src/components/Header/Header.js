import React from "react";

const Header = () => {
   return (
      <div
         style={{ cursor: "pointer" }}
         className="fixed-header"
         onClick={() => {
            window.scrollTo(0, 0);
         }}
      >
         <h2 className="main-heading-title">
            <i className="fas fa-film"></i> Cinematic Wonders
         </h2>
      </div>
   );
};

export default Header;
