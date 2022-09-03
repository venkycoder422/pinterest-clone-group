import './App.css';
import Navbar from './components/Navbar/Navbar';
import {gapi} from 'gapi-script'
import { useEffect } from 'react';
import Home_BL from './components/Home_BL/Home_BL';
import Today from './components/todayPage/Today';

const clientId = "779029402943-c8c6rrt9rkfpf60it2qqv31agcgq8i55.apps.googleusercontent.com"

function App() {
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope:""
      })
    };
    gapi.load('client:auth2' , start)
  },[] )
  return (
    <div className="App">
     {/* <Navbar/> */}
     {/* <Home_BL/> */}
     <Today/>
    </div>
  );
}

export default App;
