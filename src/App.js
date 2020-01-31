import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Home from './components/home.js'
import Background from './media/Background.JPG'

//TODO: Ha en if (ternary) som gir forskjellig main/navbar?
function App() {
  // background: '#4C6663'
  const style = {
    background: 'black',
    alignItems: 'center'
  }

  const imageStyle = {
    width: '100%',
    height: '100%',
    opacity: '0.8',
    zIndex: 1,
    position: 'absolute',
    background: 'black'
  }


  return (
    <div style={style}>
      <div>
        <img style={imageStyle} src={Background} alt='' />
      </div>
      <Navbar />
      <Home />
    </div>
  );
}
// <div><Home /></div>

export default App;
