import React from "react";
import App from "../components/App";

const Home = () => {
    return (
        <div style={{background:"grey"}}>
          <header style={{textAlign:'center'}}>
            <h1 style={{color:'white', fontSize:"100px"}}>praCo.</h1>
          </header>
          <App />
        </div>
    )
}

export default Home;