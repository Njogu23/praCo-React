import React, {useState} from 'react';

const SearchBar = ({workouts}) => {

  const [search, setSearch] = useState("")

  const searchResult = workouts.filter(item => {
    if(search === ""){
      return null
    }else{
      return item.name.toLowerCase().includes(search.toLowerCase())
    }
  })

  const workout = searchResult.map(item => {
    return (
      <section key={item.id} style={{padding:"2px", border:"solid", borderRadius:"8px"}}>
        <h2>{item.name}</h2>
        <img src={item.gifUrl} alt={item.name}></img>
        <p>target muscle : {item.target}</p>
        <p>equipment : {item.equipment}</p>
      </section>
    )
  })

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
      
  
    return (
      <div style={{padding:"15px", textAlign:"center"}}>
        <input type="search" placeholder="search" style={{fontSize:"25px", border:"none", borderRadius:"12px"}} onChange={handleSearch}></input>
        <>{workout}</>
      </div>
      
    )
  }

export default SearchBar;