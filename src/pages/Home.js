import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

const Home = () => {
    return (
        <div style={{background:"indigo"}}>
          <NavBar />
          <SearchBar />
        </div>
    )
}

export default Home;