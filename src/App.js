import React from 'react'
import axios from 'axios'


function App() {
  //const url = 'http://api.weatherapi.com/v1/forecast.json?key=adeca4f1a42a4bf0a69115018220304&q=dallas&days=1&aqi=no&alerts=no'


  return (
    <div className="app">
      <div className='container'>
        <div className='top'>
            <div className="location">
                <p>Dallas</p>
            </div>
            <div className="temp">
                <h1>60° C</h1>
            </div>
            <div className="description">
                <p>Clouds</p>
            </div>
        </div>
        <div className='bottom'>
            <div className="feels">
                <p>65° C</p>
            </div>
            <div className="humidity">
                <p>20%</p>
            </div>
            <div className="wind">
                <p>12 KMH</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
