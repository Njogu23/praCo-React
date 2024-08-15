import React, { useEffect, useState } from "react";
import Workout from "./Workout";
import Challenge from "./Challenge";
import MyRecords from "./MyRecords";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from './Home';

function HomePage() {
  const [workouts, setWorkouts] = useState([]);
  const [bodyPartList, setBodyPartList] = useState([]);

  useEffect(() => {
    fetch('https://exercisedb.p.rapidapi.com/exercises', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '86332af65amsha50a1827694ecaep1dece6jsnfa56659d3b85',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    })
    .then(response => response.json())
    .then(response => setWorkouts(response))
    .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '86332af65amsha50a1827694ecaep1dece6jsnfa56659d3b85',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    })
    .then(response => response.json())
    .then(response => setBodyPartList(response))
    .catch(err => console.error(err));
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/workouts" element={<Workout workouts={workouts} bodyPartList={bodyPartList} />} />
        <Route path="/challenge" element={<Challenge workouts={workouts} bodyPartList={bodyPartList} />} />
        <Route path="/myrecords" element={<MyRecords />} />
        <Route index element={<Home workouts={workouts}/>} />
      </Routes>
    </>
  );
}

export default HomePage;
