import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import  HomePage  from './components/HomePage';
import React, { useEffect } from 'react';

function App() {
const [pins,setPins] = React.useState([]);


const getNewPins =()=>{
  fetch(`http://localhost:3001/posts`)
        .then(res=>res.json())
        .then(res=>setPins(res));
}

useEffect(()=>{
  getNewPins()
},[]);


  const getImages = async(term)=>{
   return fetch(`http://localhost:3001/posts?title=${term}`)
            .then(res=>res.json())
  }

  const onSearchSubmit = (target)=>{
   // console.log("onsearch submit",target);
  getImages(target).then((res)=>{
    let results = res;

    // let newPins = [
    //   ...results,
    //   ...pins
    // ]

    results.sort(function(a,b){
         return 0.5 - Math.random();
       });
       setPins(results)
  });
    
  }

  

   
  //console.log(pins);
  // onSearchSubmit("Maths");
  return (
    <div className="App">
      <Navbar onSubmit={onSearchSubmit}/>
      <HomePage pins={pins}/>
    </div>
  );
}

export default App;
