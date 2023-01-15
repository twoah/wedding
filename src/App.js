import './App.css';
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Greeting from "./components/Greeting";
import React from "react";
import MapDetail from "./components/MapDetail";
import MapInfo from "./components/MapInfo";
import Gallery from "./components/Gallery";
const GreetBorder = {
    borderTop : "1px solid #090303",
    width : "75%",
    margin: "0 auto",
}
function App() {
  return (
      <div className="App">
          {/**인트로**/}
          <div className="intro">
              <Intro1 />
              <Intro2 />
          </div>
          {/**인사**/}
          <div className="greeting">
              <div style ={GreetBorder}></div>
              <Greeting />
          </div>
          <div className="gallery">
              <div style ={GreetBorder}></div>
              <Gallery />
          </div>
          <div className="location">
            <div style = {GreetBorder}></div>
            <MapInfo />
            <MapDetail />
          </div>
      </div>
  );
}

export default App;
