import React from "react";
import SearchBar from "../components/SearchBar";

const Home = ({workouts}) => {
    return (
        <div style={{background:"grey"}}>
          <header style={{textAlign:'center'}}>
            <h1 style={{color:'white', fontSize:"100px"}}>praCo.</h1>
          </header>
          <SearchBar workouts={workouts} />
        </div>
    )
}

export default Home;