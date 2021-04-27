import React from 'react';
import "./App.css"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router } from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Favorites from './components/Favorites'
import Default from './components/Default'
import WeatherContainer from './containers/WeatherContainer.js'
import WeatherInfo from './components/WeatherInfo.js'

class App extends React.Component {
  
    render(){
      return(
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/current" component={WeatherContainer} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/favorite-weather" component={WeatherInfo} />
              <Route component={Default} />
            </Switch>
          </div>
        </Router>
      );
    }
  }

export default App;
