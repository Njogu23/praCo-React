import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

const Home = () => {
    return (
        <div style={{background:"indigo"}}>
          <NavBar />
          <header style={{textAlign:'center'}}>
            <h1 style={{color:'white', fontSize:"100px"}}>praCo.</h1>
          </header>
          <SearchBar />
        </div>
    )
}

export default Home;