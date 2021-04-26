import React from 'react';
import WeatherContainer from './containers/WeatherContainer.js'
import "./App.css"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
class App extends React.Component {
  
    render(){
      return(
        <div className="App">
          <WeatherContainer />
        </div>
      );
    }
  }

export default App;
