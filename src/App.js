import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { SinglePin } from './components/SinglePin';
import { CreatePin } from './components/CreatePin';
import { TodayPins } from './components/TodayPins';
function App() {
  const [pins, setPins] = React.useState([]);


  const getNewPins = () => {
    fetch(`http://localhost:3000/pin`)
      .then(res => res.json())
      .then(res => setPins(res.pins));
  }

  useEffect(() => {
    getNewPins()
  }, []);


  const getImages = async (term) => {
    return fetch(`http://localhost:3000/pins?title=${term}`)
      .then(res => res.json())
  }

  const onSearchSubmit = (target) => {
    // console.log("onsearch submit",target);
    getImages(target).then((res) => {
      let results = res.pins;
      

      // let newPins = [
      //   ...results,
      //   ...pins
      // ]

      results.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setPins(results)
    });

  }

  console.log(pins);




  //console.log(pins);
  // onSearchSubmit("Maths");
  return (
    <>
      <Navbar onSubmit={onSearchSubmit} />
      <Routes>
        <Route path="/homepage" element={<HomePage pins={pins} />}></Route>
        <Route path='/pin/:id' element={<SinglePin />}></Route>
        <Route path='/pin/create' element={<CreatePin />}></Route>
        <Route path='/pin/todaypins' element={<TodayPins />}></Route>
      </Routes>

    </>
  );
}

export default App;
