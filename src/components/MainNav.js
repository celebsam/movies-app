import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MainNav = () => {
   return (
      <div className="fixed-footer">
         <Nav justify variant="tabs">
            <Nav.Item>
               <NavLink to="/trending">
                  <i className="fab fa-hotjar"></i>
                  <p className="nav-description">Trending</p>
               </NavLink>
            </Nav.Item>
            <Nav.Item>
               <NavLink to="/movies">
                  <i className="fa fa-film" aria-hidden="true"></i>
                  <p className="nav-description">Movies</p>
               </NavLink>
            </Nav.Item>
            <Nav.Item>
               <NavLink to="/series">
                  <i className="fas fa-tv"></i>{" "}
                  <p className="nav-description">Series</p>
               </NavLink>
            </Nav.Item>
            <Nav.Item>
               <NavLink to="/search">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  <p className="nav-description">Search</p>
               </NavLink>
            </Nav.Item>
         </Nav>
      </div>
   );
};

export default MainNav;
