import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
    return (
      <nav >
       <NavLink  exact to="/" >Home</NavLink>
       <NavLink to="/workouts" >Workouts</NavLink>
       <NavLink to="/challenge" >Challenge</NavLink>
       <NavLink to="/myrecords" >My Records</NavLink>
      </nav>
      
    )
  }

export default NavBar;